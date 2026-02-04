# User Management Dashboard (Next.js 15 + React Flow)

A high-performance user management interface built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

This project demonstrates modern frontend architecture, clean separation of concerns, and performance-focused UI patterns.
---

## 🚀 How to Run

### 1. Install dependencies

```bash
npm install
# or
pnpm install

npm run dev
```
Open:

```bash
http://localhost:3000
```

## 🏗️ Architecture Decisions

### 1. Server Components & Data Fetching

- The initial data fetch happens in `app/page.tsx` (Server Component).
- Improves **First Contentful Paint (FCP)** and SEO.
- Data is passed down as props to avoid client-side fetch waterfalls.

---

### 2. Custom Hook (`useUsers`)

- All business logic (filtering, searching, updating state) is extracted into a custom hook.
- UI components remain presentational, while the hook handles complexity.
- Improves maintainability and testability.

---

### 3. Performance Optimizations

- **useMemo:** Prevents expensive recalculations during filtering.
- **React Hook Form:** Minimizes re-renders compared to controlled inputs.
- **Debounce:** Reduces filtering frequency for search input.

---

### 4. Forms & Validation

- **Zod:** Strict schema validation (email format, required fields).
- **React Hook Form:** High-performance form handling with uncontrolled inputs.

---

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Hooks (`useState`, `useMemo`)
- **Forms:** React Hook Form + Zod

---

## 🔮 Future Improvements

- **Virtualization:** Use `react-window` for large datasets (1000+ items).
- **API Integration:** Replace local state with real `PUT/PATCH` backend requests.
- **Accessibility:** Improve ARIA labels and keyboard navigation.

---

## 📌 Notes

This project is built as a portfolio-ready example of:

- Modern React architecture  
- Clean code practices  
- Performance optimization  
- Scalable UI patterns  
