import express, { Request, Response } from "express";
import {
  CreateBookRequestBody as BookRequestBody,
  CreateBookRequestBodySchema,
} from "../domain/bookModel";

import { getAllBooks, saveBook } from "../data-access/book";

const router = express.Router();

router.post(
  "/",
  async (req: Request<{}, {}, BookRequestBody>, res: Response) => {
    const book = req.body;

    const bookSchemaParsed = CreateBookRequestBodySchema.safeParse(book);
    if (!bookSchemaParsed.success) {
      res.status(400).json({
        message: "Book schema invalid",
        reason: bookSchemaParsed.error,
      });
      return;
    }

    try {
      await saveBook(book);
    } catch (error) {
      res.status(500).json({ message: "Failed to create book", reason: error });
      return;
    }

    // Example response
    res.status(200).json({
      message: "Book created successfully",
    });
  }
);

router.get("/", async (req: Request, res: Response) => {
  try {
    const allBooks = await getAllBooks();
    res.status(200).json(allBooks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve books", reason: error });
  }
});

export default router;
