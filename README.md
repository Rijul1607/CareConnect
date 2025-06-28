

# 🏥 CareConnect

**CareConnect** is a modern telehealth platform designed to simplify access to home-based and remote healthcare. Patients can connect with certified nurses and doctors, book appointments, and conduct secure **video consultations** via Vonage. Authentication and user management are powered by **Clerk**, with built-in pricing and subscription handling.

🔗 [Live Site](https://care-connect-xi-two.vercel.app/)

---

## 🌟 Features

* 🔐 **Clerk-based Auth** – Secure and scalable authentication & user management
* 📅 Appointment booking with real-time doctor/nurse availability
* 📹 **Vonage-powered Video Calling** – Seamless virtual consultations
* 💳 **Pricing & Subscription Plans** via Clerk
* 🧑‍⚕️ Separate dashboards for doctors and patients
* 📈 Scalable, mobile-friendly UI built with Next.js

---

## 🛠️ Tech Stack

| Category       | Technology                    |
| -------------- | ----------------------------- |
| Frontend       | Next.js, React, Tailwind CSS  |
| Backend        | Next.js API Routes            |
| Database       | PostgreSQL (via Prisma ORM)   |
| Authentication | Clerk                         |
| Payments       | Clerk  |
| Video Calling  | Vonage (OpenTok API)          |
| Hosting        | Vercel                        |
| DB Hosting     | Neon.tech                     |

---

## 🚀 Getting Started

### Prerequisites

* Node.js v16+
* PostgreSQL (local or Neon)
* Clerk & Vonage API keys

### Clone & Install

```bash
git clone https://github.com/Rijul1607/CareConnect.git
cd CareConnect
npm install
```

### Create `.env` file

```env
DATABASE_URL=your_postgresql_url
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
VONAGE_API_KEY=your_vonage_api_key
VONAGE_API_SECRET=your_vonage_api_secret
VONAGE_SESSION_ID=auto_or_dynamic_session_id
NEXT_PUBLIC_CLERK_FRONTEND_API=your_frontend_clerk
```

### Run Database & App

```bash
npx prisma migrate dev
npm run dev
```

Visit `http://localhost:3000`

---

## 🗂️ Project Structure
```
CareConnect/
│
├── .next/                 # Next.js build output (auto-generated)
├── actions/               # Server-side action functions
├── app/                   # App router structure (routes, layouts, pages)
├── components/            # Reusable UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries, API clients, helpers
├── node_modules/          # Dependencies
├── prisma/                # Prisma schema and migration files
├── public/                # Static assets
│
├── .env                   # Environment variables
├── .gitignore             # Git ignore rules
├── components.json        # Optional ShadCN component registry
├── eslint.config.mjs      # ESLint config
├── jsconfig.json          # JS path aliases config
├── middleware.js          # Middleware logic (auth, redirects)
├── next.config.mjs        # Next.js config
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Exact version lock for npm
├── postcss.config.mjs     # PostCSS config for Tailwind
├── README.md              # Project documentation
```

---

## 📹 Video Call Functionality

* Built using Vonage OpenTok APIs
* Doctors and patients join secure rooms via appointment links
* Supports camera/mic toggle, dynamic room creation, and appointment-based video sessions
* Future scope: chat, screen sharing, multi-party support

---

## 💳 Pricing & Subscription

* Clerk-integrated pricing tiers
* Patients see different features or limits based on their plan
* Add-on Stripe support (if required) for advanced billing

---


