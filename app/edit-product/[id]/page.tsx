"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import PageContainer from "@/components/PageContainer"
export default function EditProduct() {

    const router = useRouter()
    const params = useParams()
    const id = Number(params.id)

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

        const storedProducts = localStorage.getItem("products")

        let products = storedProducts ? JSON.parse(storedProducts) : []

        const product = products.find((p: any) => p.id === id)

        if (product) {
            setName(product.name)
            setPrice(product.price.toString())
            setStock(product.stock.toString())
        }

        setLoading(false)

    }, [id, router])


    const handleUpdate = () => {

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

        products = products.map((p: any) =>
            p.id === id
                ? { ...p, name, price: Number(price), stock: Number(stock) }
                : p
        )

        localStorage.setItem("products", JSON.stringify(products))

        alert("Product updated successfully")

        router.push("/products")
    }


    if (loading) {
        return <p className="p-10">Loading...</p>
    }


    return (
        <PageContainer>
            <div className="p-10 max-w-md">

                <h1 className="text-2xl font-semibold mb-6">
                    Edit Product
                </h1>

                <label className="block mb-1">Product Name</label>
                <input
                    type="text"
                    value={name}
                    className="border p-2 block mb-4 w-full rounded"
                    onChange={(e) => setName(e.target.value)}
                />

                <label className="block mb-1">Price</label>
                <input
                    type="number"
                    value={price}
                    className="border p-2 block mb-4 w-full rounded"
                    onChange={(e) => setPrice(e.target.value)}
                />

                <label className="block mb-1">Stock</label>
                <input
                    type="number"
                    value={stock}
                    className="border p-2 block mb-4 w-full rounded"
                    onChange={(e) => setStock(e.target.value)}
                />

                {error && (
                    <p className="text-red-500 mb-4">
                        {error}
                    </p>
                )}

                <button
                    onClick={handleUpdate}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Update Product
                </button>

            </div>
        </PageContainer>
    )

}