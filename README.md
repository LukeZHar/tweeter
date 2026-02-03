# Tweeter - Full Stack Social Media Application

A modern, feature-rich social media platform built with a powerful tech stack. Connect with users, share posts, and engage in real-time conversations with a sleek, responsive interface.

## Description

Tweeter is a full-stack social media application that allows users to create accounts, post content, follow other users, like posts, and receive real-time notifications. The application features a modern UI with real-time updates, image uploads, and a smooth user experience designed with Tailwind CSS and built with React on the frontend.

## 🔗 Links

- **Live App:** [Coming Soon]
- **GitHub:** [https://github.com/LukeZHar/tweeter](https://github.com/LukeZHar/tweeter)
- **YouTube:** [Coming Soon]
- **Portfolio Projects:** [https://lzh-portf.vercel.app/projects](https://lzh-portf.vercel.app/projects)

## 🛠️ Technologies Used

### Frontend

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, PostCSS
- **UI Components:** Shadcn/ui, DaisyUI
- **State Management:** Zustand
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **Real-time:** Socket.IO Client
- **Notifications:** react-hot-toast
- **Icons:** lucide-react
- **Linting:** ESLint

### Backend

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT, bcryptjs
- **Real-time Communication:** Socket.IO
- **File Uploads:** Cloudinary, Express FileUpload
- **Scheduled Tasks:** Node-cron
- **Rate Limiting:** Built-in rate limiting
- **Utilities:** cookie-parser, dotenv, cors, nodemon

### Dev Tools & Design

- **Version Control:** Git, GitHub
- **Code Editor:** VS Code
- **Design:** Figma, Canva
- **UI/UX:** Responsive Design, Wireframing

## 📋 Features

- ✅ User Authentication & Authorization
- ✅ Create, Read, Update, Delete Posts
- ✅ Real-time Notifications
- ✅ Follow/Unfollow Users
- ✅ Like Posts
- ✅ User Profile Management
- ✅ Image Upload Support
- ✅ Responsive Design
- ✅ Real-time Socket.IO Updates
- ✅ Secure Password Hashing

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB
- npm or yarn

### Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/LukeZHar/tweeter.git
cd tweeter
```

2. Install dependencies and build:

```bash
npm run build
```

3. Setup environment variables:
   - Create `.env` file in the root directory
   - Add your MongoDB connection string, JWT secret, and other required variables

4. Development mode:

```bash
npm run dev
```

5. Production mode:

```bash
npm start
```

## 📦 Project Structure

```
tweeter/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── db/
│   ├── lib/
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── package.json
```

## 📄 License

This project is open source and available under the MIT License.
