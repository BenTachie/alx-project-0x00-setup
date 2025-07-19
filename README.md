# 🏠 ALX Project: Next.js Airbnb Clone – Foundational Setup

This project is a **Next.js-based application** designed to help you learn and apply the **fundamentals of modern front-end development** using **React, TypeScript, Tailwind CSS, and ESLint**. It mimics key features of Airbnb’s UI (like property cards, pills, buttons, and pages), focusing on clean architecture, reusable components, and best development practices.

---

## 📚 Learning Objectives

By completing this project, you will:

- ✅ Understand how to scaffold and structure a **Next.js project with TypeScript**
- ✅ Implement **basic routing** using the **Pages Router** (not App Router)
- ✅ Create **reusable, dynamic React components** with props and interfaces
- ✅ Manage **static assets** and apply **utility-first styling** with Tailwind CSS
- ✅ Learn how to compose UIs using modular components like `Card`, `Pill`, and `Button`
- ✅ Gain experience using **TypeScript interfaces** for strong type safety
- ✅ Configure and use **ESLint** for maintaining code quality and consistency
- ✅ Implement **responsive layouts** following design system principles

---

## 🛠️ Tech Stack

| Tool             | Purpose                                  |
|------------------|------------------------------------------|
| [Next.js v13+]   | React Framework for hybrid static & SSR  |
| [TypeScript]     | Strongly typed JavaScript                |
| [Tailwind CSS]   | Utility-first styling framework          |
| [ESLint]         | Code linting and formatting              |
| [Node.js v16+]   | JavaScript runtime                       |
| [VS Code]        | Recommended IDE for development          |

---

## 📁 Project Structure

```
alx-project-0x00-setup/
├── components/
│   ├── Button.tsx       # Dynamic button component
│   ├── Card.tsx         # Card UI with embedded Pill components
│   └── Pill.tsx         # Pill badges with dynamic titles
├── interfaces/
│   └── index.ts         # TypeScript interfaces for props
├── pages/
│   ├── index.tsx        # Entry point (home)
│   ├── landing.tsx      # Landing page using components
│   └── about.tsx        # Basic About page
├── public/              # Static assets
├── styles/              # Global styles (Tailwind CSS)
├── tsconfig.json        # TypeScript configuration
└── .eslintrc.js         # ESLint configuration
```

## 🚦 Key Features & Implemented Tasks
✅ Basic Routing

-Created pages/landing.tsx and pages/about.tsx

-Implemented simple navigation using Next.js Pages Router

✅ Reusable Components

-Built a Card component with Tailwind styling

-Created a Pill component with a title prop for reusability

-Developed a flexible Button component with title and styles props

-Demonstrated reusability by rendering multiple component instances dynamically

## 🧪 How to Run the Project Locally
```
1. Clone the Repository
git clone https://github.com/<your-username>/alx-project-0x00-setup.git
cd alx-project-0x00-setup

2. Install Dependencies
npm install

4. Run the Development Server
npm run dev -- -p 3000

6. Open in Browser
Visit http://localhost:3000/landing
Visit http://localhost:3000/about
```
## 🧹 Code Quality & Conventions

✅ Strict TypeScript typing using React.FC and interfaces

✅ Reusable components with props for flexibility

✅ Utility-first styling via Tailwind CSS

✅ ESLint enforced consistent syntax, spacing, and practices

✅ Clean and maintainable modular architecture

## 🎯 Best Practices Followed

-Structure	Clear separation of components, interfaces, and pages

-Reusability	Components are designed for multiple use cases with props

-Consistency	Tailwind for consistent styling, spacing, and layout

-Type Safety: All components are typed using TypeScript interfaces

-Linting	ESLint configured for a cleaner, error-free codebase

-Performance: Leveraging Next.js optimisations and code-splitting

## 🚀 Next Steps / Future Enhancements
-Integrate Next.js App Router in future modules

-Add dynamic data loading and property listings

-Integrate Next.js Image optimisation

-Connect backend APIs or use mock data for listings

-Implement navigation bar, footer, and search filters

## 🙌 Acknowledgements
This project is part of the ALX Software Engineering curriculum and is designed to reinforce core web development concepts using modern tooling.

## 📄 License
This project is licensed under the MIT License. Feel free to fork, use, and modify for learning purposes.

## ✨ Author
Benedict Tachie
Aspiring Full-Stack Developer | Data Scientist | Digital Transformation Enthusiast
GitHub: @BenTachie

“Code modularly. Style consistently. Reuse ruthlessly.”

