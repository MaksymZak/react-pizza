import { useState } from "react";

import CategoriesList from "../../components/categoriesList/CategoriesList";
import Sort from "../../components/sort/Sort";
import PizzaList from "../../components/pizzaList/PizzaList";

import styles from "./Home.module.scss";

const Home = () => {
  const [categoriesActive, setCategoriesActive] = useState(0);
  const [selected, setSelected] = useState(0);

  return (
    <section className="section">
      <div className="container">
        <div className={styles.navigation_block}>
          <CategoriesList
            value={categoriesActive}
            setCategories={setCategoriesActive}
          />
          <Sort value={selected} setSelected={setSelected} />
        </div>
        <div className="pizza-block">
          <PizzaList />
        </div>
      </div>
    </section>
  );
};

export default Home;
