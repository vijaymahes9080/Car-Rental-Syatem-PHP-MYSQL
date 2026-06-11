// Static Demo Database Simulation for GitHub Pages
const DEFAULT_CARS = [
  { car_id: 1, car_name: "Mercedes Benz", car_type: "Mercedes Benz", image: "car1.jpg", hire_cost: 20000, capacity: 5, status: "Available" },
  { car_id: 2, car_name: "Range Rover", car_type: "LandRover", image: "car2.jpg", hire_cost: 30000, capacity: 6, status: "Available" },
  { car_id: 3, car_name: "Harrier", car_type: "Toyota", image: "car3.jpg", hire_cost: 20000, capacity: 6, status: "Available" },
  { car_id: 5, car_name: "LandCruiser V8", car_type: "LandCruiser", image: "images (2).jpg", hire_cost: 20000, capacity: 5, status: "Available" },
  { car_id: 6, car_name: "Security Vehicles", car_type: "Hammar Cars", image: "sonkort2.png", hire_cost: 30000, capacity: 8, status: "Available" },
  { car_id: 7, car_name: "Wedding Limousine", car_type: "Wedding Limousine", image: "images (3).jpg", hire_cost: 50000, capacity: 10, status: "Available" }
];

// Initialize DB in LocalStorage
function initDB() {
  if (!localStorage.getItem("cars_catalog")) {
    localStorage.setItem("cars_catalog", JSON.stringify(DEFAULT_CARS));
  }
  if (!localStorage.getItem("cars_bookings")) {
    localStorage.setItem("cars_bookings", JSON.stringify([
      { client_id: 1, fname: "Felix Kiamba", email: "kiambafelix@yahoo.com", phone: "705053484", location: "Nairobi", gender: "Male", car_id: 1, status: "Approved", mpesa: "GTD45H7H6" },
      { client_id: 2, fname: "Concepter Bogita", email: "concybogita@gmail.com", phone: "707403614", location: "Kisii", gender: "Female", car_id: 2, status: "Approved", mpesa: "DJFL870FDK9" }
    ]));
  }
  if (!localStorage.getItem("cars_messages")) {
    localStorage.setItem("cars_messages", JSON.stringify([
      { msg_id: 1, email: "visitor@test.com", message: "Amazing cars and super fast booking system!", status: "Unread", time: new Date().toLocaleString() }
    ]));
  }
}

// User Sessions helper
const Session = {
  get: () => JSON.parse(localStorage.getItem("cars_session")) || null,
  set: (user) => localStorage.setItem("cars_session", JSON.stringify(user)),
  clear: () => localStorage.removeItem("cars_session")
};

// Start
initDB();

// Render navigation dynamically based on login status
function renderNavigation() {
  const session = Session.get();
  const navElement = document.getElementById("navigation-menu");
  if (!navElement) return;

  if (session) {
    if (session.isAdmin) {
      navElement.innerHTML = `
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="admin.html">Admin Panel</a></li>
        </ul>
        <a href="#" class="login_btn" onclick="logoutUser()">Logout</a>
      `;
    } else {
      navElement.innerHTML = `
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="status.html">View Status</a></li>
          <li><a href="message_admin.html">Message Admin</a></li>
        </ul>
        <a href="#" class="login_btn" onclick="logoutUser()">Logout</a>
      `;
    }
  } else {
    navElement.innerHTML = `
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="index.html#rent">Rent Cars</a></li>
      </ul>
      <a href="login.html?type=client" class="login_btn">Client Login</a>
      <a href="login.html?type=admin" class="login_btn" style="margin-left:10px; border-color:#aac8e4; color:#aac8e4;">Admin Login</a>
    `;
  }
}

function logoutUser() {
  Session.clear();
  window.location.href = "index.html";
}

// Document Ready
document.addEventListener("DOMContentLoaded", () => {
  renderNavigation();
  
  // Setup Hamburger menu
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  if (burger && nav) {
    burger.addEventListener("click", (e) => {
      e.preventDefault();
      nav.classList.toggle("active");
    });
  }
});
