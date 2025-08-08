import { Hono } from "hono";
import type { Env } from "./types";
import { zValidator } from '@hono/zod-validator';
import {
  CreatePortfolioProjectSchema,
  CreatePortfolioImageSchema,
  CreateTestimonialSchema,
  CreateBlogPostSchema,
} from "@/shared/types";

const app = new Hono<{ Bindings: Env }>();

// Portfolio routes
app.get("/api/portfolio", async (c) => {
  const db = c.env.DB;
  
  const projects = await db.prepare(`
    SELECT p.*, 
           json_group_array(
             json_object(
               'id', i.id,
               'image_url', i.image_url,
               'caption', i.caption,
               'sort_order', i.sort_order
             )
           ) as images
    FROM portfolio_projects p
    LEFT JOIN portfolio_images i ON p.id = i.project_id
    GROUP BY p.id
    ORDER BY p.created_at DESC
  `).all();

  return c.json(projects.results.map((project: any) => ({
    ...project,
    images: JSON.parse(project.images as string).filter((img: any) => img.id !== null)
  })));
});

app.post("/api/portfolio", zValidator('json', CreatePortfolioProjectSchema), async (c) => {
  const db = c.env.DB;
  const data = c.req.valid('json');

  const result = await db.prepare(`
    INSERT INTO portfolio_projects (title, description, is_featured)
    VALUES (?, ?, ?)
  `).bind(data.title, data.description || null, data.is_featured ? 1 : 0).run();

  return c.json({ id: result.meta.last_row_id, ...data });
});

app.post("/api/portfolio/images", zValidator('json', CreatePortfolioImageSchema), async (c) => {
  const db = c.env.DB;
  const data = c.req.valid('json');

  const result = await db.prepare(`
    INSERT INTO portfolio_images (project_id, image_url, caption, sort_order)
    VALUES (?, ?, ?, ?)
  `).bind(data.project_id, data.image_url, data.caption || null, data.sort_order).run();

  return c.json({ id: result.meta.last_row_id, ...data });
});

// Testimonials routes
app.get("/api/testimonials", async (c) => {
  const db = c.env.DB;
  
  const testimonials = await db.prepare(`
    SELECT * FROM testimonials 
    WHERE is_featured = 1 
    ORDER BY created_at DESC
  `).all();

  return c.json(testimonials.results);
});

app.post("/api/testimonials", zValidator('json', CreateTestimonialSchema), async (c) => {
  const db = c.env.DB;
  const data = c.req.valid('json');

  const result = await db.prepare(`
    INSERT INTO testimonials (client_name, client_photo_url, testimonial_text, rating, is_featured)
    VALUES (?, ?, ?, ?, ?)
  `).bind(
    data.client_name,
    data.client_photo_url || null,
    data.testimonial_text,
    data.rating,
    data.is_featured ? 1 : 0
  ).run();

  return c.json({ id: result.meta.last_row_id, ...data });
});

// Blog routes
app.get("/api/blog", async (c) => {
  const db = c.env.DB;
  
  const posts = await db.prepare(`
    SELECT * FROM blog_posts 
    WHERE is_published = 1 
    ORDER BY created_at DESC
  `).all();

  return c.json(posts.results);
});

app.get("/api/blog/:id", async (c) => {
  const db = c.env.DB;
  const id = c.req.param('id');
  
  const post = await db.prepare(`
    SELECT * FROM blog_posts 
    WHERE id = ? AND is_published = 1
  `).bind(id).first();

  if (!post) {
    return c.notFound();
  }

  return c.json(post);
});

app.post("/api/blog", zValidator('json', CreateBlogPostSchema), async (c) => {
  const db = c.env.DB;
  const data = c.req.valid('json');

  const result = await db.prepare(`
    INSERT INTO blog_posts (title, excerpt, content, featured_image_url, is_published)
    VALUES (?, ?, ?, ?, ?)
  `).bind(
    data.title,
    data.excerpt || null,
    data.content,
    data.featured_image_url || null,
    data.is_published ? 1 : 0
  ).run();

  return c.json({ id: result.meta.last_row_id, ...data });
});

export default app;
