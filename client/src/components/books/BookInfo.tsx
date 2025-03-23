import React from "react";
import { Book } from "./types";
import { StarRating } from "./BookRating";

type BookInfoProps = {
	book?: Book;
};

export function BookInfo({ book }: BookInfoProps): React.ReactElement {
	if (!book) {
		return <></>;
	}

	return (
		<li className="book-item-container">
			{[
				book.title,
				book.authors?.map((authorObj) => authorObj.author).join(" "),
			].join(", ")}
			<StarRating />
		</li>
	);
}
