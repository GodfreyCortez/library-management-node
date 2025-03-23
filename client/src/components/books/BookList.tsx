import React, { useEffect, useState } from "react";
import { Book } from "./types";
import { ApiService } from "../api/api.service";
import { BookInfo } from "./BookInfo";

export function BookList(): React.ReactElement {
	const [books, setBooks] = useState<Book[]>([]);

	useEffect(() => {
		ApiService.getAllBooks().then((booksResult) => setBooks(booksResult));
	}, []);

	return (
		<ul>
			{books.length > 0
				? books.map((book) => <BookInfo book={book} key={book.id} />)
				: "No Books Found"}
		</ul>
	);
}
