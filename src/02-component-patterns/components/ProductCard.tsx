import { createContext, ReactElement, useContext } from "react";
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { ProductCardProps, ProductContextProps } from "../interfaces/interfaces";


export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({children, product}: ProductCardProps) => {
    
  const {counter, increaseBy} = useProduct();

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={styles.productCard}>
        {/* <img className={styles.productImg} src="./coffee-mug.png" alt="Coffee Mug" /> */}

        {children}

        {/* <ProductImage img={product.img} />      

        <ProductTitle title={product.title} />

        <ProductButtons 
        increaseBy={increaseBy} 
        counter={counter} /> */}
        
      </div>
    </Provider>
  )
}

//Le estoy añadiendo esta nueva propiedad
// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;