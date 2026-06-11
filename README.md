# 🚗 Premium Car Rental Management System

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/vijaymahes9080/Car-Rental-Syatem-PHP-MYSQL)

[![PHP Version](https://img.shields.io/badge/PHP-7.4%20%7C%208.x-blue.svg?style=for-the-badge&logo=php)](https://www.php.net/)
[![MySQL Database](https://img.shields.io/badge/MySQL-8.0-orange.svg?style=for-the-badge&logo=mysql)](https://www.mysql.com/)
[![Web Standards](https://img.shields.io/badge/HTML5%20%26%20CSS3-Modern%20UI-green.svg?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/HTML)

A comprehensive, database-driven web application for managing car rentals. This platform allows customers to view, register, book, and track status for luxury vehicle rentals, while providing administrators with a powerful control panel to manage the vehicle fleet, process reservations, and communicate with clients.

---

## 🎨 Visual Preview

![Car Rental System Banner](img/readme_banner.png)

---

## ✨ Key Features

### 👤 Customer Experience
* **Interactive Fleet Browsing**: Modern, responsive catalog showing available cars, specifications, and daily hire costs.
* **Streamlined Booking & Payment**: Simple booking wizard integrated with M-Pesa payment confirmation tracking.
* **Real-time Status Tracking**: Customers can check if their booking request has been **Approved**, **Pending**, or **Rejected**.
* **Direct Communication**: Built-in messaging portal to send inquiries directly to the system administrators.

### 🛡️ Admin Dashboard
* **Centralized Dashboard**: Quick summary of incoming requests and active client messages.
* **Dynamic Fleet Management**: Add, update, or remove vehicles from the active catalog (including image uploads, pricing, and availability status).
* **Hire Requests Processor**: Review customer bookings and approve/reject rentals instantly.
* **Message Center**: View and respond to customer queries to maintain high service standards.

---

## 📂 Database Schema Overview

The database (`cars.sql`) contains the following key tables:

| Table Name | Description | Key Fields |
| :--- | :--- | :--- |
| **`admin`** | Stores admin account credentials for authentication. | `admin_id`, `uname`, `pass` |
| **`cars`** | Catalog of rental vehicles, specifications, status, and pricing. | `car_id`, `car_name`, `car_type`, `image`, `hire_cost`, `capacity`, `status` |
| **`client`** | Customer profiles, contact info, linked bookings, and payments. | `client_id`, `fname`, `email`, `phone`, `car_id`, `status`, `mpesa` |
| **`message`** | Client inquiries sent to the administration portal. | `msg_id`, `message`, `status`, `time` |

---

## 🚀 Getting Started

### 📋 Prerequisites
* **Web Server**: Apache server (XAMPP, WAMP, or Laragon recommended).
* **Database**: MySQL Server.
* **PHP**: Version 7.x or 8.x.

### 🛠️ Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/vijaymahes9080/Car-Rental-Syatem-PHP-MYSQL.git
   ```

2. **Configure the Database**
   * Start your local MySQL server.
   * Open **phpMyAdmin** (`http://localhost/phpmyadmin`).
   * Create a new database named `cars`.
   * Import the [cars.sql](db/cars.sql) file located in the `db/` folder.

3. **Establish Database Connection**
   * Edit the database configuration settings in [config.php](includes/config.php):
     ```php
     $host = "localhost";
     $user = "root";     // Your MySQL username
     $pass = "";         // Your MySQL password
     $db = "cars";       // Database name
     ```

4. **Deploy & Access**
   * Move the project folder to your server's root directory (e.g., `htdocs/` for XAMPP).
   * Open your browser and navigate to:
     * **Client Frontend**: `http://localhost/Car-Rental-Syatem-PHP-MYSQL/`
     * **Admin Panel**: `http://localhost/Car-Rental-Syatem-PHP-MYSQL/admin/`

---

## 🔑 Default Credentials

To access the admin dashboard:
* **Username**: `admin`
* **Password**: `admin`

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository, make your modifications, and open a pull request.
