"use client";

import { ProductsProps } from '@/app/lib/definitions';
import React from 'react';
import { products } from '@/app/lib/datadb';
import Link from 'next/link';

/*
Normaly RSC !!!
conditionnal (if) will return error from RCC (descending component).
*/

export default function LayoutProducts({children}: {children: React.ReactNode}) {
    
    if (products.length !== 3) {
        throw new Error("No products");
    };
    
    return (
        <div>
            {children}
            <hr />
            {products.map((product: ProductsProps) => (
                <div key={product.id}>
                    <Link href={`/products/${product.id}`}>{product.name}</Link>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    )
}
