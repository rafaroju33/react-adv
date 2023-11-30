import { useContext, CSSProperties, useCallback } from 'react';
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface Props{
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({className, style}: Props) => {
  
    //TODO: maxCount
    const {increaseBy, counter, maxCount} = useContext(ProductContext);
    console.log({maxCount});
    const isMaxReacher = useCallback(
      () => !!maxCount && counter === maxCount,
      [counter, maxCount],
    )
    
    //TODO: isMaxReacher =useCallback, dependencies [counter, maxCount]
    //TRUE si el counter === macCount
    //False si no lo es

    return (
      <div 
        className={`${styles.buttonsContainer} ${className}`}
        style={style}
      >
          <button 
            className={styles.buttonMinus}
            onClick={() => increaseBy(-1)}
          >-</button>
          <div className={styles.countLabel}>{counter}</div>
          <div>
            <button
              className={`${styles.buttonAdd} ${isMaxReacher() && styles.disabled}`}
              onClick={() => increaseBy(1)}
            >+</button>
          </div>
        </div>
    )
  }