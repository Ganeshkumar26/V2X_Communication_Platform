# V2X Communication Platform

A comprehensive educational platform for secure cloud-vehicle communication frameworks covering V2V and V2I interactions with JWT authentication and backend integration.

## Features

- **Authentication System**: User registration, login, and JWT-based authentication
- **Protected Dashboard**: Personalized user dashboard with real-time V2X statistics
- **Backend API**: Express.js server with secure endpoints
- Interactive overview of connected mobility concepts
- Detailed V2V (Vehicle-to-Vehicle) communication section
- V2I (Vehicle-to-Infrastructure) communication explanations
- Security framework with authentication and encryption details
- Cloud integration architecture
- Real-world applications and use cases
- Modern responsive design

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Two terminal windows (one for frontend, one for backend)

## Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Running the Project (Development)

You need to run both the frontend and backend servers:

### 1. Start the Backend Server

In the first terminal:

```bash
node server/index.js
```

The backend will run on `http://localhost:5000`

### 2. Start the Frontend Development Server

In a second terminal:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Authentication Features

- **User Registration**: Create new accounts with email and password
- **User Login**: Secure login with JWT token generation
- **Protected Routes**: Dashboard and user-specific content require authentication
- **User Profile**: View and manage user account information
- **Secure Logout**: Proper token cleanup and session management

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)
- `POST /api/auth/logout` - User logout (protected)

### V2X Data
- `GET /api/v2x/dashboard` - Dashboard statistics (protected)
- `GET /api/v2x/vehicles` - Connected vehicles data (protected)

### Health Check
- `GET /api/health` - Server health status

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
server/
└── index.js                 # Express.js backend server
src/
├── contexts/
│   └── AuthContext.tsx      # Authentication context and hooks
├── components/
│   ├── Auth/                # Authentication components
│   │   ├── AuthModal.tsx
│   │   ├── LoginForm.tsx
│   │   └── RegisterForm.tsx
├── components/
│   ├── Header.tsx
│   ├── Overview.tsx
│   ├── V2VCommunication.tsx
│   ├── V2ICommunication.tsx
│   ├── SecurityFramework.tsx
│   ├── CloudIntegration.tsx
│   ├── Applications.tsx
│   ├── Dashboard.tsx        # Protected user dashboard
│   ├── UserProfile.tsx      # User profile dropdown
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
- Vite (build tool)
- Axios (HTTP client)
- Express.js (backend server)
- JWT (JSON Web Tokens)
- bcryptjs (password hashing)
- CORS (Cross-Origin Resource Sharing)

## Environment Variables

Create a `.env` file in the root directory:

```
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=5000
NODE_ENV=development
```

## Security Features

- **Password Hashing**: Passwords are hashed using bcryptjs
- **JWT Authentication**: Secure token-based authentication
- **Protected Routes**: API endpoints require valid JWT tokens
- **CORS Configuration**: Proper cross-origin request handling
- **Input Validation**: Server-side validation for all inputs

## License

This project is for educational purposes.