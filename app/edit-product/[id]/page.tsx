"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditProduct() {

    const router = useRouter();
    const params = useParams();
    const id = Number(params.id);

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

        const storedProducts = localStorage.getItem("products");

        let productsList = storedProducts ? JSON.parse(storedProducts) : [];

        const product = productsList.find((p: any) => p.id === id);

        if (product) {
            setName(product.name);
            setPrice(product.price.toString());
            setStock(product.stock.toString());
        }

        setLoading(false);

    }, [id, router]);

    const handleUpdate = () => {

        const storedProducts = localStorage.getItem("products");

        let productsList = storedProducts ? JSON.parse(storedProducts) : [];

        productsList = productsList.map((p: any) =>
            p.id === id
                ? { ...p, name, price: Number(price), stock: Number(stock) }
                : p
        );

        localStorage.setItem("products", JSON.stringify(productsList));

        alert("Product Updated Successfully");

        router.push("/products");
    };

    if (loading) {
        return <p className="p-10">Loading...</p>;
    }

    return (

        <div className="p-10">

            <h1 className="text-2xl mb-6">
                Edit Product
            </h1>

            <input
                value={name}
                placeholder="Product Name"
                className="border p-2 block mb-3"
                onChange={(e) => setName(e.target.value)}
            />

            <input
                value={price}
                placeholder="Price"
                className="border p-2 block mb-3"
                onChange={(e) => setPrice(e.target.value)}
            />

            <input
                value={stock}
                placeholder="Stock"
                className="border p-2 block mb-3"
                onChange={(e) => setStock(e.target.value)}
            />

            <button
                onClick={handleUpdate}
                className="bg-blue-500 text-white p-2 rounded"
            >
                Update Product
            </button>

        </div>

    );

}