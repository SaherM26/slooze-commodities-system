"use client";

import Link from "next/link";
import { Product } from "@/types/products";

export default function ProductCard({ product }: { product: Product }) {

    const handleDelete = () => {

        const stored = localStorage.getItem("products");

        if (!stored) return;

        const products = JSON.parse(stored);

        const updated = products.filter((p: Product) => p.id !== product.id);

        localStorage.setItem("products", JSON.stringify(updated));

        window.location.reload();

    };

    return (

        <div className="border p-4 rounded shadow">

            <h2 className="text-lg font-semibold">
                {product.name}
            </h2>

            <p>Price: ₹{product.price}</p>
            <p>Stock: {product.stock}</p>

            <div className="flex gap-3 mt-4">

                <Link
                    href={`/edit-product/${product.id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                    Edit
                </Link>

                <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                >
                    Delete
                </button>

            </div>

        </div>

    );
}