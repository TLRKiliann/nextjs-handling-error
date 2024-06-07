"use client";

import React from 'react';
import { products } from '@/app/lib/datadb';
import { ProductsProps } from '@/app/lib/definitions';

/*
Normaly RSC !!!
conditionnal (if) will return error from RCC (descending component).
*/

export default function LayoutProductId({children, params}: {
    children: React.ReactNode, 
    params: {productId: string}
}) {
    //await new Promise((resolve) => setTimeout(resolve, 200));
    if (parseInt(params.productId) !== Number(params.productId)) {
        throw new Error("This product is not a valid number");
    };

    return (
        <div>
            {children}
            <hr />
            <h1>Product id (layout.tsx): {parseInt(params.productId)}</h1>
            {products.map((product: ProductsProps) => (
                product.id === parseInt(params.productId) ? (
                    <p key={product.id}>{product.name}</p>
                ) : null
            ))}
        </div>
    );
};