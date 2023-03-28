function Categories({ value, onChangeCategory }) {
/* 	const [activeIndexset, setActiveIndex] = useState(0);

	const onClickCategories = (index) => {
		setActiveIndex(index);
	}; */

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
				{categories.map((categoryName, index) => (
					<li
						key={index}
						onClick={() => onChangeCategory(index)}
						className={value === index ? "active" : ""}
					>
						{categoryName}
					</li>
				))}
			</ul>
		</div>
	);
}
export default Categories;
