# Secure API Dashboard & Contact Form

A full‑stack web application that provides:

- **User Authentication**: Register & log in with JWT‑based security.  
- **Dashboard**: View real‑time stats on total users and messages.  
- **Contact Form**: Submit messages that get stored in MongoDB and emailed to you.  
- **Modern Frontend**: Next.js 13 + Tailwind CSS + Headless UI for a responsive, accessible UI.  
- **Backend API**: Node.js + Express + MongoDB + Nodemailer (Gmail SMTP)  

---

## Table of Contents
 
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Prerequisites](#prerequisites)  
- [Getting Started](#getting-started)  
  - [1. Clone the Repo](#1-clone-the-repo)  
  - [2. Setup the Backend](#2-setup-the-backend)  
  - [3. Setup the Frontend](#3-setup-the-frontend)  
- [Environment Variables](#environment-variables)  
- [Running the App](#running-the-app)  
- [API Endpoints](#api-endpoints)  
- [License](#license)  

---

## Features

- **Registration & Login**  
- **Protected Routes** for dashboard & contact form  
- **JWT Authentication** with secure `httpOnly` tokens  
- **MongoDB** for persisting users & messages  
- **Nodemailer + Gmail App Password** for email notifications  
- **Tailwind CSS** styling, with dark mode support  
- **Responsive Navbar** using Headless UI & Heroicons  

---

## Tech Stack

- **Frontend**: Next.js 13, React, Tailwind CSS, Headless UI, Heroicons  
- **Backend**: Node.js, Express.js, MongoDB (Atlas), Mongoose  
- **Auth & Security**: JSON Web Tokens (JWT)  
- **Email**: Nodemailer (SMTP)  

---

## Prerequisites

- Node.js v14+  
- npm or yarn  
- A MongoDB Atlas cluster (or local MongoDB)  
- A Gmail account with **2‑Step Verification** & an **App Password** (if using Gmail SMTP)

---

## Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/AhmedShaikh-developer/secure-contact-form-dashboard.git
cd secure-contact-form-dashboard


