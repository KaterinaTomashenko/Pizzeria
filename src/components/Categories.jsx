import { useState } from "react";

function Categories() {
	const [activeIndexset, setActiveIndex] = useState(0);

	const onClickCategories = (index) => {
		setActiveIndex(index);
	};

	const categories = [
		"Все",
		"Мясные",
		"Вегетарианская",
		"Гриль",
		"Острые",
		"Закрытые",
	];

	return (
		<div className="categories">
			<ul>
				{categories.map((valur, index) => (
					<li
						onClick={() => onClickCategories(index)}
						className={activeIndexset === index ? "active" : ""}
					>
						{valur}
					</li>
				))}
			</ul>
		</div>
	);
}
export default Categories;
