Slooze Commodities System

A role-based commodity inventory management system built using Next.js (App Router) and React.This project was developed as part of the Slooze Frontend Take-Home Challenge.

🚀 Features

1. User Authentication
2. Role-Based Access Control
3. Product Management (CRUD)
4. Dashboard with product analytics
5. Dark Mode toggle
6. Form validation
7. Responsive UI

👥 User Roles
A. Manager
Manager has full access to the system.

Capabilities:
View products
Add new products
Edit products
Delete products
View dashboard statistics

B. Storekeeper
Storekeeper has limited access.

Capabilities:
View products only

📦 Product Management
The system allows managers to:
1. Add new products
2. Update product price and stock
3. Delete products
4. View all products in a grid layout
5. Products are stored using localStorage for persistence.

📊 Dashboard

Manager dashboard shows:
1. Total number of products
2. Total stock available
1. This helps quickly monitor inventory.

🔐 Demo Login Credentials

A. Manager
Email: manager@slooze.com
Password: manager123

B. Storekeeper
Email: store@slooze.com
Password: store123

🛠 Tech Stack
1. Next.js 14 (App Router)
2. React
3. TypeScript
4. Tailwind CSS
5. LocalStorage

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