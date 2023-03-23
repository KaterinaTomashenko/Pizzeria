import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

import { useEffect, useState } from "react";

const Home = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setisLoading] = useState(true);

	useEffect(() => {
		fetch("https://641b6fcf9b82ded29d52291b.mockapi.io/items")
			.then((res) => res.json())
			.then((arr) => setItems(arr));
		setisLoading(false);
	}, []);
	return (
		<>
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{/* {items.map((obj) => (
							<PizzaBlock key={obj.id} {...obj} />
						))} */}
				{isLoading
					? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
					: items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
			</div>
		</>
	);
};

export default Home;
