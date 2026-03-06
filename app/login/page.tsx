"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {

        if (email === "manager@slooze.com" && password === "manager123") {

            localStorage.setItem("role", "manager");
            router.push("/dashboard");
            return;

        }

        if (email === "store@slooze.com" && password === "store123") {

            localStorage.setItem("role", "storekeeper");
            router.push("/products");
            return;

        }

        setError("Invalid email or password");

    };

    return (

        <div className="flex justify-center items-center h-screen">

            <div className="border p-6 rounded w-80">

                <h1 className="text-xl mb-4">Login</h1>

                <input
                    type="email"
                    placeholder="Enter email"
                    className="border p-2 w-full mb-3"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter password"
                    className="border p-2 w-full mb-3"
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && (
                    <p className="text-red-500 text-sm mb-2">
                        {error}
                    </p>
                )}

                <button
                    onClick={handleLogin}
                    className="bg-blue-500 text-white p-2 w-full"
                >
                    Login
                </button>

            </div>

        </div>

    )

}