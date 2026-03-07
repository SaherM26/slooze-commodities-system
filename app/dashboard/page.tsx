"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import PageContainer from "@/components/PageContainer"
import AuthGuard from "@/components/AuthGuard";
export default function Dashboard() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        const stored = localStorage.getItem("products");

        if (stored) {
            setProducts(JSON.parse(stored));
        }

    }, []);

    const totalProducts = products.length;

    const totalStock = products.reduce(
        (sum, p) => sum + p.stock,
        0
    );

    return (
        <AuthGuard>
            <PageContainer>
                <div className="p-10">

                    <h1 className="text-3xl font-bold mb-8">
                        Dashboard
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="bg-white shadow rounded p-6">

                            <h2 className="text-gray-500 text-sm">
                                Total Products
                            </h2>

                            <p className="text-3xl font-bold mt-2">
                                {totalProducts}
                            </p>

                        </div>


                        <div className="bg-white shadow rounded p-6">

                            <h2 className="text-gray-500 text-sm">
                                Total Stock
                            </h2>

                            <p className="text-3xl font-bold mt-2">
                                {totalStock}
                            </p>

                        </div>

                    </div>
                </div>
            </PageContainer>
        </AuthGuard>
    );
}