import { Author, Book, Genre } from "../../../libraries";
import { CreateBookRequestBody } from "../domain/bookModel";

export const saveBook = async (book: CreateBookRequestBody) => {
  const includeModels: (typeof Author | typeof Genre)[] = [Author];

  if (book.genre?.length) {
    includeModels.push(Genre);
  }

  await Book.create(
    {
      title: book.title,
      Authors: book.author.map((authorName) => {
        return {
          author: authorName,
        };
      }),
      Genres: book.genre?.length
        ? book.genre.map((genreName) => {
            return {
              genre: genreName,
            };
          })
        : undefined,
      publishingYear: book.firstPublishYear,
      rating: book.rating,
    },
    {
      include: includeModels,
    }
  );
};

export const getAllBooks = async (): Promise<any[]> => {
  const books = await Book.findAll({
    attributes: ["id", "title", "publishingYear", "rating"],
    include: [
      {
        model: Author,
        attributes: ["author"],
        through: {
          attributes: [],
        },
      },
      {
        model: Genre,
        attributes: ["genre"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  // Transform the result to rename keys
  return books.map((book) => {
    const bookData = book.toJSON<Book>(); // Convert Sequelize instance to plain object
    const mappedBook = {
      id: bookData.id,
      title: bookData.title,
      publishingYear: bookData.publishingYear,
      rating: bookData.rating,
      authors: bookData.Authors, // Rename "Authors" to "authors"
      genres: bookData.Genres, // Rename "Genres" to "genres"
    };

    return mappedBook;
  });
};
