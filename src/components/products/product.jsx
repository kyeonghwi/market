import { Link } from "react-router-dom";
import styles from "./product.module.css";
import { useState } from "react";

export const Product = ({ product, convertPrice }) => {

  function importLocalImage(imageName) {
    return require(`../../../public/images/${imageName}`);
  }
  
  return (
    <div className={styles.product}>
      <Link to={`/product/${product.id}`}>
        <div className={styles.product_image}>
          <img src={importLocalImage(product.imagePath)} alt="product" />
        </div>
      </Link>
      <div className={styles.store}>
        <span>{product.provider}</span>
      </div>

      <div className={styles.product_name}>
        <span>{product.name}</span>
      </div>

      <div className={styles.product_price}>
        <span className={styles.price}>{convertPrice(product.price)}</span>
        <span className={styles.unit}>원</span>
      </div>
    </div>
  );
};
