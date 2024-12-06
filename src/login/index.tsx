"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import { useRouter } from "next/navigation"; // Import useRouter dari next/navigation

export default function LoginPage() {
  const [email, setEmail] = useState(""); // Untuk menyimpan NIP
  const [password, setPassword] = useState(""); // Untuk menyimpan password
  const [error, setError] = useState(""); // Untuk menyimpan pesan error
  const [isClient, setIsClient] = useState(false); // State untuk memeriksa apakah di sisi klien
  const router = useRouter(); // Inisialisasi useRouter dari next/navigation

  // Menunggu sampai komponen di-mount di sisi klien
  useEffect(() => {
    setIsClient(true); // Mengatur isClient menjadi true setelah komponen di-mount
  }, []);

  // Fungsi login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password }),
      });

      if (response.ok) {
        // SweetAlert untuk login berhasil
        Swal.fire({
          icon: "success",
          title: "Access Granted",
          text: "Welcome to BIDS.",
          timer: 2000,
          showConfirmButton: false,
        });

        // Redirect ke dashboard setelah 2 detik, hanya jika di sisi klien
        if (isClient) {
          setTimeout(() => {
           // console.log("Redirecting to /dashboard");
            router.push("/dashboard");
          }, 2000);
        }
      } else {
        const data = await response.json();
        setError(data.message || "Invalid login credentials");
        // SweetAlert untuk login gagal
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: data.message || "Invalid login credentials",
        });
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">BIDS 1.0.18</h2>
        <p className="login-subtitle">Please login to your account</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="nip" className="input-label">
              NIP
            </label>
            <input
              type="text"
              id="nip" // Sesuaikan id dengan label
              className="input-field"
              placeholder="Enter your NIP"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="signup-link">
          Don't have an account?{" "}
          <a href="#" className="signup-link-text">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
