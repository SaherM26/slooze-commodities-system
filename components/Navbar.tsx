"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {

    const router = useRouter()
    const [role, setRole] = useState<string | null>(null)

    useEffect(() => {

        const storedRole = localStorage.getItem("role")

        setRole(storedRole)

    }, [])

    const handleLogout = () => {

        localStorage.removeItem("role")
        router.push("/login")

    }

    return (

        <div className="flex justify-between items-center bg-gray-800 text-white px-6 py-4">

            <h1 className="text-lg font-semibold">
                Slooze Dashboard
            </h1>

            <div className="flex items-center gap-5">

                <Link href="/products">Products</Link>

                {role === "manager" && (
                    <Link href="/dashboard">Dashboard</Link>
                )}

                {role === "manager" && (
                    <Link href="/add-product">Add Product</Link>
                )}

                <ThemeToggle />

                <button
                    onClick={handleLogout}
                    className="bg-red-500 px-3 py-1 rounded"
                >
                    Logout
                </button>

            </div>

        </div>

    )

}