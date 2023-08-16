import React from "react";
import { Card } from "antd";
import styles from "./ProductList.module.css";

const { Meta } = Card;

const ProductList: React.FC = () => {
  const data = [1, 2, 3, 4, 6, 7, 8, 10, 11, 12];

  return (
    <div className={styles.root}>
      {data.map((i) => (
        <ProductCard key={i} />
      ))}
    </div>
  );
};

const ProductCard: React.FC = (props) => {
  const title = (
    <div className={styles.title}>
      <div style={{ color: "#9da852" }}>
        <span>S</span>3560
      </div>
      <div style={{ color: "#C9D382" }}>23 600</div>
    </div>
  );

  return (
    <Card
      hoverable
      size="small"
      cover={
        <div className={styles.container}>
          <picture>
            <img alt="example" src="https://loremflickr.com/400/240/arch" />
          </picture>
        </div>
      }
    >
      <Meta title={title} description="www.instagram.com" />
    </Card>
  );
};

export default ProductList;
