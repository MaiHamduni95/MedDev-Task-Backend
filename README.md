# MedDev-Task-Backend

This is the backend for the **Digital Health Treatment Tracker** take-home assignment. It is built using **Node.js** and **Express**, and handles creation, listing, and deletion of patient treatment records.

## 🚀 Features

- Add a treatment record (with duplicate validation)
- View all treatments
- Delete a treatment by ID
- Prevents duplicate treatment type for the same patient on the same day

## 📦 Project Structure

.
├── data/ # JSON file storage for treatment records
├── node_modules/ # Dependencies
├── routes/ # Express routes (treatment logic)
├── utils/ # Read/write helper functions for JSON
├── server.js # Entry point
├── package.json # Project metadata and dependencies

