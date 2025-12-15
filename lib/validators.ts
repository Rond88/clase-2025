import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency=z.string().refine((value) => /^d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))));

export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  slug: z.string().min(3, "Slug must be at least 3 characters long"),
  category: z.string().min(3, "Category must be at least 3 characters long"),
  brand: z.string().min(2, "Brand must be at least 2 characters long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
  stock: z.coerce.number(),
  images: z.array(z.string().min(1, "Include at least one image URL")),
  isFeatured: z.boolean(),
  banner: z.string().nullable,
  price: currency,
});
