# airbnb-clone-project
# Airbnb Clone Project

## 📌 Project Overview
The **Airbnb Clone Project** is a web application that replicates the core user journey of browsing properties, viewing details, and booking stays.

### 🎯 Project Goals
- Deliver a clean, fast, and responsive booking experience.
- Practice full-stack development with modern tooling and good engineering practices.
- Document decisions, roles, and UI patterns for team collaboration.

### 🛠 Tech Stack
- **Frontend:** HTML, CSS, JavaScript, React
- **Backend:** Python (Flask/Django) or Node.js (Express)
- **Database:** PostgreSQL or MySQL
- **State & APIs:** REST (later: optional GraphQL)
- **Version Control:** Git & GitHub
- **Design:** Figma
- **Testing (later):** Jest / PyTest / Postman

---

## 🎨 UI/UX Design Planning

### ✨ Design Goals
- Simple, intuitive navigation with minimal friction.
- Consistent visual language (colors, spacing, typography).
- Mobile-first responsive layouts.
- Clear CTAs and accessible components (WCAG-friendly).

### 🧩 Key Features (MVP)
- Browse property listings (grid/card view).
- View property details: images, description, amenities, reviews.
- Simple checkout flow: dates, guests, price breakdown, confirmation.
- Basic search & filters (location, price range).
- (Later) Authentication, wishlists, host management.

### 🏠 Primary Pages (Table)
| Page | Purpose | Key Elements |
|------|---------|--------------|
| **Property Listing View** | Discover and scan multiple properties quickly. | Search bar, filters (price, location), grid of property cards, pagination/infinite scroll. |
| **Listing Detailed View** | Deep dive into a single property. | Image gallery, title/location, amenities, reviews/ratings, map snippet, price per night, date & guest selectors, Book button. |
| **Simple Checkout View** | Complete the booking with clarity and trust. | Stay summary, dates/guests, price breakdown (fees/taxes), payment method (placeholder), confirm button, success screen. |

### 💡 Why a User-Friendly Design Matters
A clear and consistent design shortens decision time, reduces misclicks/abandonment, and builds trust—critical in any booking flow.

---

## 🎨 More UI/UX Design Planning (Figma Exploration)

**Visited Figma design:** *(replace with your link or note)*

### 🎨 Color Styles
- **Primary:** `#FF385C` (Brand accent)
- **Accent/Secondary:** `#008489`
- **Text (Primary):** `#222222`
- **Text (Secondary/Muting):** `#717171`
- **Background:** `#FFFFFF`
- **Borders/Dividers:** `#E5E7EB`

> Update these to match your exact Figma tokens when finalized.

### ✍️ Typography
- **Font Family:** Circular/Inter/System-UI (fallback: Arial, Helvetica, sans-serif)
- **Font Weights:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Font Sizes (examples):**
  - Display/Hero: 32–40px
  - H1: 28–32px
  - H2: 22–24px
  - Body: 16px
  - Caption/Meta: 12–14px
  - Button/Inputs: 14–16px

### 🔑 Why Identify Design Properties Early
Locking in color, typography, and spacing tokens:
- Ensures visual consistency across pages and components.
- Speeds up dev handoff and reduces rework.
- Makes it easy to theme/update styles centrally.

---

## 👥 Project Roles and Responsibilities

- **Project Manager**
  - Owns timeline, scope, and stakeholder comms.
  - Unblocks dependencies and coordinates releases.

- **Product Owner**
  - Defines vision, backlog priorities, acceptance criteria.
  - Signs off on scope for each iteration.

- **Scrum Master**
  - Facilitates ceremonies (standups, planning, retro).
  - Removes impediments, improves team process.

- **Frontend Developers**
  - Build responsive UI, component library, routing.
  - Integrate APIs, manage state, handle accessibility.

- **Backend Developers**
  - Design APIs, data models, authentication, business logic.
  - Ensure performance, security, and reliability.

- **Designers (UI/UX)**
  - Research, user flows, wireframes, hi-fi mockups, prototypes.
  - Define design tokens and component specs.

- **QA/Testers**
  - Write test plans, perform functional & regression testing.
  - Track defects and verify fixes.

- **DevOps Engineers**
  - CI/CD pipelines, environment setup, deployment automation.
  - Observability (logs/metrics), security hardening.

---

## 🧱 UI Component Patterns

Components to implement first:
- **Navbar**
  - Logo, search/filters entry point, nav links, profile/menu.
- **Property Card**
  - Image, title/location, price per night, rating, quick actions.
- **Footer**
  - Links (About/Help/Terms/Privacy), language/currency, copyright.

*(Optional later: Search Bar, Filter Drawer, Date Picker, Rating Stars, Badge/Chip, Modal, Toasts.)*

---

## 🚀 Getting Started (Local Dev — placeholder)
```bash
# frontend
cd frontend
npm install
npm run dev

# backend (example Flask)
cd backend
python -m venv .venv && source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
flask run
