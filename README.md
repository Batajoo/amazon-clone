# Amazon Clone

A full-stack Amazon clone built using React, Redux Toolkit, React Router, Tailwind CSS, and Appwrite for authentication and backend services.

## Features
- User Authentication (Login, Register)
- Product Listing & Details Page
- Shopping Cart & Checkout
- Order History & User Dashboard
- Responsive UI with Tailwind CSS
- State Management with Redux Toolkit
- Backend powered by Appwrite

## Tech Stack
- **Frontend:** React, Redux Toolkit, React Router, Tailwind CSS
- **Backend:** Appwrite (Database, Authentication, Storage)
- **Payment Integration:** (Future Implementation)
- **Deployment:** Vercel (Frontend), Appwrite Cloud (Backend)

## Installation & Setup
### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/amazon-clone.git
cd amazon-clone
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Configure Appwrite
- Create an account on [Appwrite](https://appwrite.io/).
- Set up a project and database collections.
- Create `.env` file and add your Appwrite credentials:
```sh
REACT_APP_APPWRITE_PROJECT_ID=your_project_id
REACT_APP_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
```

### 4. Start the Development Server
```sh
npm start
```

## Folder Structure
```
📦 amazon-clone
├── 📂 src
│   ├── 📂 components  # Reusable UI components
│   ├── 📂 pages       # Main pages (Home, Product, Cart, Checkout)
│   ├── 📂 store       # Redux slices
│   ├── 📂 api         # Appwrite API functions
│   ├── App.js        # Main app component
│   ├── index.js      # Entry point
│   ├── routes.js     # React Router setup
├── .env              # Environment variables
├── package.json      # Dependencies & scripts
├── tailwind.config.js # Tailwind CSS configuration
└── README.md         # Project documentation
```

## Roadmap
- [x] Define features and set up project structure
- [x] Initialize React, install dependencies, and configure Tailwind CSS
- [x] Set up React Router and define main pages
- [x] Configure Redux Toolkit and create slices (auth, product, cart, order)
- [x] Build reusable UI components with Tailwind CSS
- [x] Setup Appwrite backend (authentication, database, API functions)
- [x] Integrate frontend with Appwrite (fetch products, authentication, cart management)
- [ ] Implement Cart and Checkout functionality
- [ ] Integrate Payment System (e.g., Stripe or PayPal)
- [ ] Debug and test UI/UX responsiveness
- [ ] Deploy frontend on Vercel and backend on Appwrite Cloud
- [ ] Implement additional features like order tracking and admin dashboard
- [ ] Start with project planning & setup (GitHub repo, feature list, UI wireframe)
- [ ] Create base project structure and configure Tailwind CSS
- [ ] Implement React Router for page navigation
- [ ] Setup Redux Toolkit for state management
- [ ] Develop UI components for Navbar, Product Cards, Cart, etc.
- [ ] Configure Appwrite backend (authentication, database, storage)
- [ ] Fetch and display product data using Appwrite
- [ ] Implement user authentication (login/register)
- [ ] Implement cart functionality using Redux state
- [ ] Develop order processing and user dashboard
- [ ] Final testing, bug fixing, and optimizations
- [ ] Deployment and production readiness

## Contribution
Feel free to fork this repository and create a pull request with improvements!

## License
This project is licensed under the MIT License.

