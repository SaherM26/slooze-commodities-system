"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {

    const [theme, setTheme] = useState("light");

    useEffect(() => {

        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            setTheme(savedTheme);
            document.body.className = savedTheme;
        }

    }, []);

    const toggleTheme = () => {

        const newTheme = theme === "light" ? "dark" : "light";

        setTheme(newTheme);

        localStorage.setItem("theme", newTheme);

        document.body.className = newTheme;

    };

    return (

        <button
            onClick={toggleTheme}
            className="border px-3 py-1 rounded"
        >

            {theme === "light" ? "Dark Mode" : "Light Mode"}

        </button>

    );

}