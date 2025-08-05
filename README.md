# 📦 Excel Upload & URL Sender API

This Node.js + Express API allows you to upload an Excel (`.xlsx`) file containing a list of file URLs. It extracts the URLs and sends them as `POST` requests to a target API endpoint with authentication.

---

## 🚀 Features

- Upload `.xlsx` files containing URLs
- Parses Excel using `xlsx`
- Sends each URL to an external API (`/api/content/send`)
- Supports dynamic `type` parameter per upload
- Built with modular controllers and services

---

## 📁 Project Structure

