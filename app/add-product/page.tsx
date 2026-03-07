"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import PageContainer from "@/components/PageContainer"
import AuthGuard from "@/components/AuthGuard"
export default function AddProduct() {

    const router = useRouter()

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const role = localStorage.getItem("role")

        if (role !== "manager") {
            router.push("/products")
            return
        }

        setLoading(false)

    }, [router])


    const handleAddProduct = () => {

        setError("")

        // Validate name
        if (!name.trim()) {
            setError("Product name is required")
            return
        }

        // Validate price
        if (isNaN(Number(price)) || Number(price) <= 0) {
            setError("Price must be greater than 0")
            return
        }

        // Validate stock
        if (isNaN(Number(stock)) || Number(stock) < 0) {
            setError("Stock cannot be negative")
            return
        }

        const storedProducts = localStorage.getItem("products")

        let products = storedProducts ? JSON.parse(storedProducts) : []

        const newProduct = {
            id: Date.now(),
            name,
            price: Number(price),
            stock: Number(stock)
        }

        products.push(newProduct)

        localStorage.setItem("products", JSON.stringify(products))

        alert("Product added successfully")

        router.push("/products")
    }


    if (loading) {
        return <p className="p-10">Loading...</p>
    }


    return (
        <AuthGuard>
            <PageContainer>
                <div className="p-10 max-w-md">

                    <h1 className="text-2xl font-semibold mb-6">
                        Add Product
                    </h1>

                    <label className="block mb-1">Product Name</label>
                    <input
                        type="text"
                        value={name}
                        placeholder="Enter product name"
                        className="border p-2 block mb-4 w-full rounded"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label className="block mb-1">Price</label>
                    <input
                        type="number"
                        value={price}
                        placeholder="Enter price"
                        className="border p-2 block mb-4 w-full rounded"
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <label className="block mb-1">Stock</label>
                    <input
                        type="number"
                        value={stock}
                        placeholder="Enter stock quantity"
                        className="border p-2 block mb-4 w-full rounded"
                        onChange={(e) => setStock(e.target.value)}
                    />

                    {error && (
                        <p className="text-red-500 mb-4">
                            {error}
                        </p>
                    )}

                    <button
                        onClick={handleAddProduct}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Add Product
                    </button>

                </div>
            </PageContainer>
        </AuthGuard>

    )
}