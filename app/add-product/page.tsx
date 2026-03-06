"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {

    const router = useRouter();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const role = localStorage.getItem("role");

        if (role !== "manager") {
            router.push("/products");
            return;
        }

        setLoading(false);

    }, [router]);

    const handleAddProduct = () => {

        if (!name || !price || !stock) {
            alert("Please fill all fields");
            return;
        }

        const storedProducts = localStorage.getItem("products");

        let products = storedProducts ? JSON.parse(storedProducts) : [];

        const newProduct = {
            id: Date.now(),
            name,
            price: Number(price),
            stock: Number(stock)
        };

        products.push(newProduct);

        localStorage.setItem("products", JSON.stringify(products));

        alert("Product Added Successfully");

        router.push("/products");

    };

    if (loading) {
        return <p className="p-10">Loading...</p>;
    }

    return (

        <div className="p-10">

            <h1 className="text-2xl font-semibold mb-6">
                Add Product
            </h1>

            <input
                value={name}
                placeholder="Product Name"
                className="border p-2 block mb-3 w-64"
                onChange={(e) => setName(e.target.value)}
            />

            <input
                value={price}
                placeholder="Price"
                className="border p-2 block mb-3 w-64"
                onChange={(e) => setPrice(e.target.value)}
            />

            <input
                value={stock}
                placeholder="Stock"
                className="border p-2 block mb-3 w-64"
                onChange={(e) => setStock(e.target.value)}
            />

            <button
                onClick={handleAddProduct}
                className="bg-green-500 text-white px-4 py-2 rounded"
            >
                Add Product
            </button>

        </div>

    );

}