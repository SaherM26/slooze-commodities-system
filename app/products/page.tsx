"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import { products } from "@/data/products";
import PageContainer from "@/components/PageContainer"
import AuthGuard from "@/components/AuthGuard";
export default function Products() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        try {

            const storedProducts = localStorage.getItem("products");

            if (!storedProducts || storedProducts === "undefined") {

                localStorage.setItem("products", JSON.stringify(products));
                setProducts(products);

            } else {

                const parsed = JSON.parse(storedProducts);

                if (Array.isArray(parsed)) {
                    setProducts(parsed);
                } else {
                    throw new Error("Invalid products data");
                }

            }

        } catch (error) {

            console.log("Fixing corrupted product storage");

            localStorage.setItem("products", JSON.stringify(products));
            setProducts(products);

        }

        setLoading(false);

    }, []);

    if (loading) {
        return <p className="p-10">Loading products...</p>;
    }

    return (
        <AuthGuard>
            <PageContainer>

                <h1 className="text-2xl font-semibold mb-6">
                    Products
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {products.length === 0 ? (

                        <div className="text-gray-500">
                            No products available.
                        </div>

                    ) : (

                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))

                    )}

                </div>
            </PageContainer>
        </AuthGuard>


    )
}