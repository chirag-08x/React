import React from "react";

const Menu = ({ items }) => {
  return (
    <section className="section-center">
      {items.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <article key={id} className="single-item">
            <img src={img} alt={title} />
            <div className="item-info">
              <div className="name-price">
                <h3 className="food-name">{title}</h3>
                <h3 className="price">${Math.floor(price)}</h3>
              </div>
              <div className="description">
                <p className="desc">{desc}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Menu;
