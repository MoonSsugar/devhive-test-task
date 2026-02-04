import * as z from 'zod';

export const editUserSchema = z.object({
  name: z.string().min(2, "Name must have at least 2 characters"),
  email: z.email("Invalid email"),
  city: z.string("City must be a string")
});

export type EditUser = z.infer<typeof editUserSchema>;