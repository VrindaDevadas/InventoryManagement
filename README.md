# StockFlow - Inventory Management Dashboard

<p align="center">
  <a href="https://inventorymngt.vercel.app/" > StockFlow </a>
</p>

<p align="center">
  A modern, responsive web application for inventory management, built with React.js and styled with Tailwind CSS.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#installation"><strong>Installation</strong></a> ·
  <a href="#folder-structure"><strong>Folder Structure</strong></a> ·
  <a href="#workflow-assumptions"><strong>Workflow Assumptions</strong></a>
</p>

---

StockFlow provides a clean and efficient interface for tracking inventory. It includes essential features for managing stock levels, categories, and item locations, all presented in a visually appealing and intuitive dashboard.

<!-- 
## 🚀 Live Demo
[Link to your live demo] 
-->

## ✨ Features

-   **At-a-Glance Dashboard**: Key metrics like total items, total quantity, category count, and low-stock alerts are displayed prominently.
-   **Comprehensive Item List**: View all inventory items in a clean, responsive table.
-   **CRUD Operations**: Easily **C**reate, **R**ead, **U**pdate, and **D**elete inventory items through an intuitive UI.
-   **Dynamic Search and Filter**: Instantly find items by searching for a name or filtering by category.
-   **Conditional UI**: Low-stock items are automatically highlighted in the dashboard and table for immediate attention.
-   **Responsive Design**: A seamless experience across desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

-   **Frontend**: React.js
-   **Styling**: Tailwind CSS
-   **State Management**: React Context API
-   **Icons**: React Icons
-   **Deployment**: Vercel

## 📦 Installation

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/stockflow-app.git
    cd stockflow-app
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Run the development server:**
    ```sh
    npm start
    ```
    The application will be available at `http://localhost:3000`.

---

## 🏗️ Folder Structure

The project follows a modular structure to ensure the code is organized, scalable, and easy to maintain.

```/stockflow-app
|
|-- /public # Static assets and index.html template
|-- /src
| |-- /components # Reusable UI components (Dashboard, Header, etc.)
| |-- /contexts # React Context for global state management
| |-- /data # Mock data for development
| |-- App.js # Root component that assembles the application
| |-- index.css # Global styles and Tailwind CSS directives
| -- index.js # Entry point of the React application |
|-- package.json # Project dependencies and scripts
|-- tailwind.config.js # Tailwind CSS theme and configuration
|-- postcss.config.js # Configuration for PostCSS (used by Tailwind)
```


## 📝 Workflow Assumptions

This project was built with a clear set of assumptions to serve as a solid foundation.

1.  **Data Source (In-Memory)**: The application currently uses a local mock data array (`/src/data/mockData.js`). This was chosen for rapid prototyping. The inventory state will reset on every page refresh.

2.  **State Management (React Context)**: Global state is managed using React's Context API. This approach is ideal for avoiding "prop drilling" in small to medium-sized applications without the overhead of a larger library.

3.  **Component Architecture (Modularity)**: The UI is broken down into small, single-purpose components (`StatCard`, `InventoryList`, etc.) to promote reusability and simplify maintenance.

4.  **Styling (Utility-First)**: The project uses **Tailwind CSS** for styling, with a custom theme defined in `tailwind.config.js`. This utility-first approach accelerates development and simplifies the creation of responsive designs.


## 🚀 Future Expansion

This application is designed for easy expansion. Here are a few ways it could be enhanced:

-   **Backend Integration**: Replace the mock data with a real API by refactoring `InventoryContext` to make asynchronous calls to a backend service (e.g., Node.js/Express) connected to a database (e.g., PostgreSQL, MongoDB).
-   **User Authentication**: Implement a login/signup system to support multiple users, with role-based access control (e.g., admin, manager, staff).
-   **Advanced Features**: Introduce features like barcode scanning, low-stock notifications, inventory history tracking, and data visualization with reporting dashboards.
-   **Robust State Management**: For more complex state interactions, migrate from Context API to a more powerful solution like **Redux Toolkit** or **Zustand**.
