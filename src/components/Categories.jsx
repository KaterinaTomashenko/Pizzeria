import { useState } from "react";

function Categories() {
	const [activeIndexset, setActiveIndex] = useState(0);

	const onClickCategories = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className="categories">
			<ul>
				<li
					onClick={() => onClickCategories(0)}
					className={activeIndexset === 0 ? "active" : ""}
				>
					Все
				</li>
				<li
					onClick={() => onClickCategories(1)}
					className={activeIndexset === 1 ? "active" : ""}
				>
					Мясные
				</li>
				<li
					onClick={() => onClickCategories(2)}
					className={activeIndexset === 2 ? "active" : ""}
				>
					Вегетарианская
				</li>
				<li
					onClick={() => onClickCategories(3)}
					className={activeIndexset === 3 ? "active" : ""}
				>
					Гриль
				</li>
				<li
					onClick={() => onClickCategories(4)}
					className={activeIndexset === 4 ? "active" : ""}
				>
					Острые
				</li>
				<li
					onClick={() => onClickCategories(5)}
					className={activeIndexset === 5 ? "active" : ""}
				>
					Закрытые
				</li>
			</ul>
		</div>
	);
}
export default Categories;
