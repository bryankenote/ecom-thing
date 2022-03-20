import { useContext, useState } from 'react';
import { LocalizationContext } from '../../../localization';
import style from './style.module.css';

interface IPager {
	totalPages: number;
	onPageChange: (pageNumber: number) => void;
}

function Pager({ totalPages, onPageChange }: IPager) {
	const strings = useContext(LocalizationContext);

	const [pageNumber, setPageNumber] = useState<number>(1);

	const pageNumbers = [];

	const handlePageChange = (pageNumber: number) => {
		setPageNumber(pageNumber);
		onPageChange(pageNumber);
	};

	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<div className={style.pagination}>
			<button
				disabled={pageNumber === 1}
				onClick={() => handlePageChange(Math.max(pageNumber - 1, 1))}
				className={style.prevNext}
			>
				{strings.previous}
			</button>
			{pageNumbers.map((number) => (
				<button
					disabled={pageNumber === number}
					onClick={() => handlePageChange(number)}
					key={number}
					className={style.pageNumbers}
				>
					{number}
				</button>
			))}
			<button
				disabled={pageNumber === totalPages}
				onClick={() =>
					handlePageChange(Math.min(pageNumber + 1, totalPages))
				}
				className={style.prevNext}
			>
				{strings.next}
			</button>
		</div>
	);
}

export default Pager;
