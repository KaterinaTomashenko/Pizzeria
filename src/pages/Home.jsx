import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";

const Home = ({ searchValue }) => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const [categoryId, setSelecsetCategoryId] = useState(0);
	const [currentPage, setcurrentPage] = useState(1);

	const [sortType, setActivsetsortTypeeIndex] = useState({
		name: "популярности",
		sortProperty: "rating ",
	});

	useEffect(() => {
		setIsLoading(true);
		// debugger;
		const sortBy = sortType.sortProperty.replace("-", "");
		const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
		const category = categoryId > 0 ? `category=${categoryId}` : "";
		const search = searchValue ? `&search=${searchValue}` : "";

		fetch(
			`https://641b6fcf9b82ded29d52291b.mockapi.io/items?
			page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
		)
			.then((res) => res.json())
			.then((arr) => setItems(arr));
		setIsLoading(false);
		window.scrollTo(0, 0);
	}, [categoryId, sortType, searchValue, currentPage]);

	const pizzas = items
		/* .filter((obj) => {
			if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
				return true;
			} else {
				return false;
			}
		}) */
		.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
	const skeletons = [...new Array(6)].map((_, index) => (
		<Skeleton key={index} />
	));
	return (
		<>
			<div className="content__top">
				<Categories
					value={categoryId}
					onChangeCategory={(id) => setSelecsetCategoryId(id)}
				/>
				<Sort
					value={sortType}
					onChangeSort={(id) => setActivsetsortTypeeIndex(id)}
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">{isLoading ? skeletons : pizzas}</div>
			<Pagination
				onChangePage={(number) => {
					setcurrentPage(number);
				}}
			/>
		</>
	);
};

export default Home;
