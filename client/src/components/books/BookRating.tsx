import { useState } from "react";

type StarProps = {
	starId: number;
	highlighted: boolean;
	handleHover: () => void;
	handleClick: () => void;
	handleLeave: () => void;
};

export function Star({
	highlighted,
	starId,
	handleClick,
	handleHover,
	handleLeave,
}: StarProps) {
	return (
		<span
			data-star-id={starId}
			className="star-rating"
			onClick={handleClick}
			onMouseOver={handleHover}
			onMouseLeave={handleLeave}
		>
			{highlighted ? "\u2605" : "\u2606"}
		</span>
	);
}

export function StarRating(): React.ReactElement {
	const [rating, setRating] = useState(0);
	const [selection, setSelection] = useState(0);

	const stars = [1, 2, 3, 4, 5];

	const handleHover = (hoveredStar: number) => {
		setSelection(hoveredStar);
	};

	const handleLeave = () => {
		setSelection(0);
	};

	const handleClick = (hoveredStar: number) => {
		setRating(hoveredStar);
	};

	return (
		<div>
			{stars.map((star) => (
				/**
				 * The selection should take precedence over the
				 * rating, because you should be able to highlight whichever
				 * stars and below depending on where the mouse is
				 */
				<Star
					starId={star}
					highlighted={(selection || rating) >= star}
					key={`star-${star}`}
					handleHover={() => handleHover(star)}
					handleLeave={() => handleLeave()}
					handleClick={() => handleClick(star)}
				/>
			))}
		</div>
	);
}
