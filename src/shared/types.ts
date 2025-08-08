import z from "zod";

export const PortfolioProjectSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().nullable(),
  is_featured: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const PortfolioImageSchema = z.object({
  id: z.number(),
  project_id: z.number(),
  image_url: z.string(),
  caption: z.string().nullable(),
  sort_order: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const TestimonialSchema = z.object({
  id: z.number(),
  client_name: z.string(),
  client_photo_url: z.string().nullable(),
  testimonial_text: z.string(),
  rating: z.number(),
  is_featured: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const BlogPostSchema = z.object({
  id: z.number(),
  title: z.string(),
  excerpt: z.string().nullable(),
  content: z.string(),
  featured_image_url: z.string().nullable(),
  is_published: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const CreatePortfolioProjectSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  is_featured: z.boolean().default(false),
});

export const CreatePortfolioImageSchema = z.object({
  project_id: z.number(),
  image_url: z.string(),
  caption: z.string().optional(),
  sort_order: z.number().default(0),
});

export const CreateTestimonialSchema = z.object({
  client_name: z.string(),
  client_photo_url: z.string().optional(),
  testimonial_text: z.string(),
  rating: z.number().min(1).max(5).default(5),
  is_featured: z.boolean().default(true),
});

export const CreateBlogPostSchema = z.object({
  title: z.string(),
  excerpt: z.string().optional(),
  content: z.string(),
  featured_image_url: z.string().optional(),
  is_published: z.boolean().default(true),
});

export type PortfolioProject = z.infer<typeof PortfolioProjectSchema>;
export type PortfolioImage = z.infer<typeof PortfolioImageSchema>;
export type Testimonial = z.infer<typeof TestimonialSchema>;
export type BlogPost = z.infer<typeof BlogPostSchema>;
export type CreatePortfolioProject = z.infer<typeof CreatePortfolioProjectSchema>;
export type CreatePortfolioImage = z.infer<typeof CreatePortfolioImageSchema>;
export type CreateTestimonial = z.infer<typeof CreateTestimonialSchema>;
export type CreateBlogPost = z.infer<typeof CreateBlogPostSchema>;
