"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/products";
import { products } from "@/data/products";

export default function Products() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        try {

            const stored = localStorage.getItem("products");

            if (!stored || stored === "undefined") {

                localStorage.setItem("products", JSON.stringify(products));
                setProducts(products);
                return;

            }

            const parsed = JSON.parse(stored);

            if (Array.isArray(parsed)) {
                setProducts(parsed);
            } else {
                throw new Error("Invalid data");
            }

        } catch (error) {

            console.log("Resetting corrupted storage");

            localStorage.setItem("products", JSON.stringify(products));
            setProducts(products);

        }

    }, []);

    return (

        <div className="p-10">

            <h1 className="text-2xl font-semibold mb-6">
                Products
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {products && products.length === 0 && (
                    <p>No products found</p>
                )}

                {products && products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}

            </div>

        </div>

    );
}