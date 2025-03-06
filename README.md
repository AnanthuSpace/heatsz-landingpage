# Heatz Ecommerce - Landing Page

## Overview

This project is a replication of the **Heatz Ecommerce** homepage based on the provided Figma design. The implementation focuses on **responsive design, component-based architecture, and efficient code** using **React.js** and **TailwindCSS**.

## Live Preview

🔗 [Heatz Ecommerce Landing Page](https://heatsz.vercel.app/)

## Features

- **Fully Responsive**: Optimized for both mobile and desktop views.
- **TailwindCSS**: Styled using TailwindCSS for consistency and flexibility.
- **Component-Based Architecture**: Ensures reusability and maintainability.
- **Interactive Elements**: Hover effects and animations for better user experience.

## Tech Stack

- **React.js** (Functional Components + Hooks)
- **TailwindCSS** (Utility-First Styling)
- **Vite** (Fast development environment)
- **Mock Data** (Static JSON for product listings and content)

## Installation & Setup

### Prerequisites
Ensure you have **Node.js** and **npm/yarn** installed.

### Steps to Run Locally
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/AnanthuSpace/heatsz-landingpage.git
   cd heatsz-landingpage
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

3. **Run the Development Server**:
   ```sh
   npm run dev
   ```
   or
   ```sh
   yarn dev
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:5173/` to view the project.

## Folder Structure

```
heatsz-landingpage/
│── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page components
│   ├── assets/             # Images, icons, and other static assets
│   ├── data/               # Mock JSON data
│   ├── styles/             # Global styles and Tailwind configurations
│   ├── App.tsx             # Main application entry point
│── public/                 # Static files
│── package.json            # Dependencies and scripts
│── tailwind.config.js       # TailwindCSS configuration
│── vite.config.ts           # Vite configuration
│── README.md               # Project documentation
```

## Deployment

This project is deployed using **Vercel**.

- **Live Link**: [Heatz Ecommerce](https://heatsz.vercel.app/)
- **Deployment Command**:
  ```sh
  vercel
  ```

## Assumptions & Notes

- **No Backend**: The data is static and served from mock JSON files.
- **Mobile-First Approach**: The design prioritizes responsiveness.
- **Styling**: Used TailwindCSS with custom utility classes.

## License

This project is open-source and available under the **MIT License**.

---

If you have any issues or suggestions, feel free to contribute or raise an issue!  
