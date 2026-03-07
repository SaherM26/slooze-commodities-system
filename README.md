Slooze Commodities System

A role-based commodity inventory management system built using Next.js (App Router) and React.

This project was developed as part of the Slooze Frontend Take-Home Challenge.

🚀 Features

User Authentication

Role-Based Access Control

Product Management (CRUD)

Dashboard with product analytics

Dark Mode toggle

Form validation

Responsive UI

👥 User Roles
Manager

Manager has full access to the system.

Capabilities:

View products

Add new products

Edit products

Delete products

View dashboard statistics

Storekeeper

Storekeeper has limited access.

Capabilities:

View products only

📦 Product Management

The system allows managers to:

Add new products

Update product price and stock

Delete products

View all products in a grid layout

Products are stored using localStorage for persistence.

📊 Dashboard

Manager dashboard shows:

Total number of products

Total stock available

This helps quickly monitor inventory.

🔐 Demo Login Credentials
Manager

Email: manager@slooze.com
Password: manager123

Storekeeper

Email: store@slooze.com
Password: store123

🛠 Tech Stack

Next.js 14 (App Router)

React

TypeScript

Tailwind CSS

LocalStorage

▶️ How to Run the Project

1️⃣ Clone the repository

git clone https://github.com/SaherM26/slooze-commodities-system.git

2️⃣ Navigate to project folder

cd slooze-commodities-system

3️⃣ Install dependencies

npm install

4️⃣ Run development server

npm run dev

5️⃣ Open in browser

http://localhost:3000
📁 Project Structure
app/
  login/
  dashboard/
  products/
  add-product/
  edit-product/
components/
  ProductCard.tsx
  Navbar.tsx
  AuthGuard.tsx
data/
  products.ts
types/
  products.ts
📌 Author

Saher Bhatkar

GitHub:
https://github.com/SaherM26