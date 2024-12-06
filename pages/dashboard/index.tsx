"use client"; // Menandakan bahwa ini adalah komponen client

import React from "react";

export default function Dashboard() {
  return (
    <div className="dashboard-container bg-primary min-vh-100">
      <div className="container py-5">
        <h1 className="text-4xl text-center mb-4 text-white">Dashboard</h1>
        <div className="row g-4">
          {/* Menu CEA */}
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card p-4 shadow-lg">
              <h3 className="card-title text-xl font-semibold">CEA</h3>
              <p className="card-text">Manage and track CEA requests</p>
            </div>
          </div>

          {/* Menu AP DIGITAL */}
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card p-4 shadow-lg">
              <h3 className="card-title text-xl font-semibold">AP DIGITAL</h3>
              <p className="card-text">Track and manage AP digital requests</p>
            </div>
          </div>

          {/* Menu ERS */}
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card p-4 shadow-lg">
              <h3 className="card-title text-xl font-semibold">ERS</h3>
              <p className="card-text">Manage ERS requests and reports</p>
            </div>
          </div>

          {/* Menu BUDGET INFORMATION */}
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card p-4 shadow-lg">
              <h3 className="card-title text-xl font-semibold">BUDGET INFORMATION</h3>
              <p className="card-text">View and manage budget details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
