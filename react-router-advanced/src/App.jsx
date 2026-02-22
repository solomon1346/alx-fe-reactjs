// App.jsx
import { BrowserRouter, Routes, Route, Link, Navigate, useParams, Outlet } from "react-router-dom";

// --- Simulated Authentication ---
const fakeAuth = {
  isAuthenticated: false,
  login(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // simulate async login
  },
  logout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // simulate async logout
  }
};

// --- Protected Route Component ---
function ProtectedRoute({ children }) {
  if (!fakeAuth.isAuthenticated) {
    return <Navigate to="/" />; // Redirect if not logged in
  }
  return children;
}

// --- Pages / Components ---
function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Nested route content renders here */}
    </div>
  );
}

function ProfileDetails() {
  return <h3>Profile Details Section</h3>;
}

function ProfileSettings() {
  return <h3>Profile Settings Section</h3>;
}

function UserProfile() {
  const { id } = useParams(); // Dynamic route param
  return <h2>User Profile for ID: {id}</h2>;
}

// --- Main App ---
function App() {
  return (
    <BrowserRouter>
      <div style={{ marginBottom: "20px" }}>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/profile">Profile</Link> |{" "}
          <Link to="/user/101">User 101</Link> |{" "}
          <button onClick={() => fakeAuth.login(() => window.location.reload())}>
            Login
          </button>{" "}
          <button onClick={() => fakeAuth.logout(() => window.location.reload())}>
            Logout
          </button>
        </nav>
        <div>Status: {fakeAuth.isAuthenticated ? "Logged In" : "Logged Out"}</div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected Profile with Nested Routes */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic User Route */}
        <Route path="/user/:id" element={<UserProfile />} />

        {/* Fallback Route */}
        <Route path="*" element={<h2>404: Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;