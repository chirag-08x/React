const Categories = ({ setmeal, items }) => {
  const filterMenu = (category) => {
    if (category === "all") {
      setmeal(items);
    } else {
      const newMeals = items.filter((item) => item.category === category);
      setmeal(newMeals);
    }
  };

  return (
    <article className="btn-container">
      <button className="btn" onClick={() => filterMenu("all")}>
        all
      </button>
      <button className="btn" onClick={() => filterMenu("breakfast")}>
        breakfast
      </button>
      <button className="btn" onClick={() => filterMenu("lunch")}>
        lunch
      </button>
      <button className="btn" onClick={() => filterMenu("shakes")}>
        shakes
      </button>
    </article>
  );
};

export default Categories;
