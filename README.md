# 🚀 Better Auth Starter with Drizzle, Neon, and Shadcn

An **authentication-ready** Next.js starter kit powered by:

- **[Better Auth](https://better-auth.com/)** for secure, modern authentication
- **[Drizzle ORM](https://orm.drizzle.team/)** for type-safe database queries & migrations
- **[Neon](https://neon.tech/)** for scalable serverless PostgreSQL
- **[Shadcn/UI](https://ui.shadcn.com/)** for beautiful and customizable UI components
- **Tailwind CSS** for styling

## 🌐 Live Demo
Check out the live version here:  
👉 **[better-auth-neondb.vercel.app](https://better-auth-neondb-1ns4rmvjx-natan-muletas-projects.vercel.app)**

---

## 📸 Screenshots

![Dashboard Screenshot](https://github.com/user-attachments/assets/503068fe-711b-4a3f-a7c8-c9b0dd9c9f4e)
![Login Page](https://github.com/user-attachments/assets/756b0948-fa17-4a40-ab60-bd44eb1785d7)
![Sign Up Page](https://github.com/user-attachments/assets/aebf0f9d-e613-4050-b96b-43dddb6f0db6)

---

## ⚡ Features
- 🔑 **Authentication** (Sign up, Sign in, Sign out)  
- 🛡 **Better Auth** integration for a secure auth flow  
- 📦 **Drizzle ORM** for migrations & database queries  
- 🗄 **Neon Postgres** (serverless DB hosting)  
- 🎨 **Shadcn/UI** components + Tailwind CSS  
- 📱 Fully responsive design  
- 🌑 Dark mode ready

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **Better Auth** | Authentication library |
| **Drizzle ORM** | Type-safe database migrations & queries |
| **Neon** | Serverless PostgreSQL database |
| **Shadcn/UI** | Styled, accessible UI components |
| **Tailwind CSS** | Utility-first CSS framework |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2️⃣ Install Dependencies

npm install
# or
yarn install
# or
pnpm install

3️⃣ Set Up Environment Variables

Create a .env file in the root and add:

DATABASE_URL="your_neon_database_url"

4️⃣ Push Database Schema

npx drizzle-kit push

5️⃣ Run the Development Server

npm run dev
# or
yarn dev
# or
pnpm dev

Then open http://localhost:3000 in your browser.
📂 Project Structure

├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
├── db/               # Drizzle ORM schema & migrations
├── public/           # Static assets
├── drizzle.config.ts # Drizzle ORM config
└── .env              # Environment variables

📦 Deployment

Deployed with Vercel — just push to your main branch and it will auto-deploy.

Deploy on Vercel →
🤝 Contributing

Contributions are welcome!
Fork the repo, make your changes, and submit a PR.
📜 License

This project is licensed under the MIT License.
✨ Author

Natan Muleta
💼 Software Engineering Student | Full Stack Developer
