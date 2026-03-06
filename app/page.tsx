"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

    const router = useRouter();

    useEffect(() => {

        const role = localStorage.getItem("role");

        if (role) {
            router.push("/products");
        } else {
            router.push("/login");
        }

    }, []);

    return <p className="p-10">Loading...</p>;
}