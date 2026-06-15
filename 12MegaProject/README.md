# 🚀 MegaBlog

A modern full-stack blogging platform built with React and Appwrite, designed with a production-grade architecture and scalable code organization.

MegaBlog allows users to create, edit, publish, and manage blog posts with rich text formatting and featured images. The application implements authentication, protected routes, centralized state management, and a responsive UI to provide a seamless blogging experience.

---

## ✨ Features

### 🔐 Authentication & Authorization

* User Signup and Login
* Secure session management using Appwrite Authentication
* Protected routes for authenticated users
* Logout functionality

### 📝 Blog Management

* Create blog posts
* Edit existing posts
* Delete posts
* View all published posts
* Dedicated post details page
* Featured image upload support

### 🎨 Rich Text Editor

* Custom editor powered by TinyMCE
* Rich text formatting
* Headings and paragraph styling
* Lists and content organization
* Professional content creation experience

### ⚡ State Management

* Global state management with Redux Toolkit
* Authentication state persistence
* Predictable state updates

### 📱 Responsive UI

* Modern UI built with Tailwind CSS
* Mobile-friendly design
* Reusable and modular components

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router DOM
* Redux Toolkit
* React Hook Form
* Tailwind CSS
* HTML React Parser

### Backend & Services

* Appwrite

  * Authentication
  * Database
  * File Storage

### Editor

* TinyMCE Rich Text Editor

### Build Tool

* Vite

---

## 📂 Project Structure

```text
src
│
├── appwrite
│   ├── auth.js
│   └── config.js
│
├── components
│   ├── container
│   ├── footer
│   ├── header
│   ├── postform
│   ├── AuthLayout.jsx
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Login.jsx
│   ├── Logo.jsx
│   ├── Postcard.jsx
│   ├── RTE.jsx
│   ├── Select.jsx
│   └── Signup.jsx
│
├── conf
│   └── conf.js
│
├── pages
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── AddPost.jsx
│   ├── EditPost.jsx
│   ├── AllPosts.jsx
│   └── Post.jsx
│
├── store
│   ├── authSlice.js
│   └── store.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🎯 Key Concepts Implemented

* Component-Based Architecture
* Reusable UI Components
* Protected Routes
* Authentication Workflows
* Form Handling & Validation
* Redux State Management
* Rich Text Content Management
* File Upload Handling
* Backend Integration with Appwrite
* Scalable Folder Structure
* Responsive Design

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/megablog.git
cd megablog
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
VITE_APPWRITE_BUCKET_ID=
```

### Run the Development Server

```bash
npm run dev
```

---

## 🔮 Future Improvements

* User Profiles
* Categories & Tags
* Search Functionality
* Comment System
* Like & Bookmark Features
* Dark Mode
* Markdown Support
* Pagination & Filtering
* Role-Based Access Control

---

## 📚 Learning Outcomes

This project helped me gain practical experience with:

* React Ecosystem
* Redux Toolkit
* React Router
* Appwrite Backend Services
* Authentication Systems
* Rich Text Editors
* Form Validation
* State Management Patterns
* Production-Level Folder Structure
* Modern Frontend Development Workflow

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork this repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Shivendra Singh**
If you found this project helpful, consider giving it a ⭐ on GitHub.
