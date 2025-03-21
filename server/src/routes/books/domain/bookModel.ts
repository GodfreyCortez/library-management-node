import z from "zod";

/**
 * Models for expected request and response
 * objects for the /books endpoint
 */
export const CreateBookRequestBodySchema = z.object({
  title: z.string().nonempty(),
  author: z.array(z.string()).nonempty(),
  genre: z.array(z.string()).optional(),
  firstPublishYear: z.string().optional(),
  rating: z.number().optional(),
});

export type CreateBookRequestBody = z.infer<typeof CreateBookRequestBodySchema>;
