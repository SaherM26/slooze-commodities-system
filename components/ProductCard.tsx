"use client";

import Link from "next/link";
import { Product } from "@/types/product";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {

    const handleDelete = () => {

        const confirmDelete = confirm("Are you sure you want to delete this product?");

        if (!confirmDelete) {
            return;
        }

        const storedProducts = localStorage.getItem("products");

        if (!storedProducts) return;

        const products = JSON.parse(storedProducts);

        const updatedProducts = products.filter(
            (p: Product) => p.id !== product.id
        );

        localStorage.setItem("products", JSON.stringify(updatedProducts));

        window.location.reload();
    };

    return (

        <div className="border rounded p-4 shadow hover:shadow-lg transition">

            <h2 className="text-lg font-semibold mb-2">
                {product.name}
            </h2>

            <p className="text-gray-600">
                Price: ₹{product.price}
            </p>

            <p className="text-gray-600 mb-4">
                Stock: {product.stock}
            </p>

            <div className="flex gap-3">

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