export type Author = {
  author: string;
};

export type Genre = {
  genre: string;
};

export type Book = {
  id: string;
  title: string;
  publishingYear: string;
  rating: number;
  authors?: Author[];
  genres?: Genre[];
};
