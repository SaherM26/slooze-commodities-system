"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {

    const [role, setRole] = useState("");
    const router = useRouter();

    useEffect(() => {

        const userRole = localStorage.getItem("role");

        if (userRole) {
            setRole(userRole);
        }

    }, []);

    const handleLogout = () => {

        localStorage.removeItem("role");

        router.push("/login");

    };

    return (

        <div className="flex justify-between items-center p-4 border-b">

            <h1 className="text-xl font-bold">
                Slooze Commodities
            </h1>

            <ThemeToggle />


            <div className="flex gap-4">

                <Link href="/products">
                    Products
                </Link>

                {role === "manager" && (
                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                )}

                {role === "manager" && (
                    <Link href="/add-product">
                        Add Product
                    </Link>
                )}

                <button onClick={handleLogout}>
                    Logout
                </button>

            </div>

        </div>

    );

}