"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/products";

export default function Dashboard() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        const stored = localStorage.getItem("products");

        if (stored) {
            setProducts(JSON.parse(stored));
        }

    }, []);

    const totalProducts = products.length;

    const totalStock = products.reduce(
        (sum, p) => sum + p.stock,
        0
    );

    return (

        <div className="p-10">

            <h1 className="text-3xl font-bold mb-8">
                Dashboard
            </h1>

            <div className="grid grid-cols-2 gap-6">

                <div className="border p-6 rounded shadow">
                    <h2 className="text-lg">Total Products</h2>
                    <p className="text-2xl font-bold">
                        {totalProducts}
                    </p>
                </div>

                <div className="border p-6 rounded shadow">
                    <h2 className="text-lg">Total Stock</h2>
                    <p className="text-2xl font-bold">
                        {totalStock}
                    </p>
                </div>

            </div>

        </div>

    );
}