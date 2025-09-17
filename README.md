# 🥜 Abila Peanut Butter Website

A modern e-commerce-style website for **Abila Peanut Butter**, built with React, TypeScript, and Tailwind CSS.  
The site allows users to learn about Abila, browse products, place quick orders, and contact the business directly.

---

## 🚀 Features

- **Beautiful landing page** with hero section, product highlights, and calls-to-action.
- **Product catalog**: Smooth peanut butter jars (400g & 800g), with "coming soon" placeholders for future products.
- **Quick order modal** with:
  - Product selection & quantity control.
  - Automatic price calculation.
  - Dynamic shipping fee rules (free in Eldoret for orders ≥ KSh 600).
  - Customer details form and payment method selection.
- **Contact page** with business hours and WhatsApp quick chat.
- **Policies pages**: Privacy, Shipping, Returns, and Terms of Service.
- **Responsive design**: Works across mobile, tablet, and desktop.
- **SEO & Social Media ready** with Open Graph & Twitter card metadata.
- **Cart & Toast notifications** for order feedback.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)  
- **Icons**: [lucide-react](https://lucide.dev/)
- **State & Data**: React Hooks + [TanStack Query](https://tanstack.com/query)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Notifications**: shadcn Toaster & Sonner
- **Package Manager**: npm

---

## 📦 Project Structure
src/
│── assets/ # Images & static assets
│── components/ # Reusable UI components (Hero, Footer, Layout, etc.)
│── pages/ # Individual pages (Home, Products, Contact, Policies, etc.)
│── hooks/ # Custom hooks (e.g., toast hook)
│── App.tsx # Main app routing & providers
│── main.tsx # Entry point
public/ # Favicon, social images, static files
Orders & Contact

Currently, order details are:

Shown in the console (for development).

Displayed as a success toast.
➡️ Can be extended to send to email or WhatsApp API.

Contact Options:

📍 Location: Pioneer, Kisumu Road, Eldoret

📞 Phone: +254 700 298161

📧 Email: ochiengsteven2003@gmail.com

💬 WhatsApp: Chat Now
