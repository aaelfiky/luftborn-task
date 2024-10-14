// src/components/Card/Card.tsx
import React, { useState } from 'react';
import styles from './Card.module.scss';
import { Product } from '../../types/Product';
import Dots from '../../assets/images/Combined Shape.svg';

interface CardProps {
    product: Product;
    colorBackground?: string;
}

const Card: React.FC<CardProps> = ({ product, colorBackground }) => {
    return (
        <div className={styles['card-container']}>
            <div className={styles['product-category']}>
                <span> {product.category} </span>
                <div className={styles['dots-container']}>
                    <img alt="dots" src={Dots} />
                </div>
            </div>
            <div className={styles['product-details-container']}>
                <div className={styles['product-details-subcontainer']}>
                    <div className={styles['product-price']}>
                        <span> {product.price}$ </span>
                    </div>

                    <div className={styles['product-details']}>
                        <span> {product.title} </span>
                    </div>
                </div>
                <span className={styles['in-store']}> InStore 120 </span>
            </div>

            <div className={styles['card-extension']} style={{
                backgroundColor: colorBackground ?? "#FF8B64"
            }}>

            </div>
        </div>
    );
};

export default Card;