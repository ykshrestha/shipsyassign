# AI Documentation: Prompts and Changes

This document captures key AI-driven prompts during development and the corresponding changes made in the code.

## Prompt 1: Backend Credential Verification

**Prompt:** "How to verify credentials from backend for login?"  
**Changes:** Implemented an axios POST request from frontend to backend `/auth/login` API endpoint with proper error handling and navigation on success.

## Prompt 2: Product List with Pagination and Filtering

**Prompt:** "Implement product pagination, filtering, sorting."  
**Changes:** Backend pagination with query params added, frontend state added to manage page, limit, search, sort criteria, and UI controls created.

## Prompt 3: UI/UX Improvements with Bootstrap

**Prompt:** "Provide better Bootstrap-based UI components for React frontend."  
**Changes:** Refactored Login, Register, ProductList and ProductForm components to use Bootstrap styles for responsive and polished UI.

## Prompt 4: Handling Page Reloads on Netlify

**Prompt:** "Why does refreshing deep routes on Netlify break the page?"  
**Changes:** Added `_redirects` file with fallback rule for SPA routing.

## Prompt 5: Backend MongoDB Deployment Issues

**Prompt:** "500 Internal Server Error on deployed backend but works locally."  
**Changes:** Resolved environment variable issues, added database name in MongoDB Atlas URI, set IP whitelist to allow all (`0.0.0.0/0`), verified deployment logs.

## Prompt 6: Logout Functionality

**Prompt:** "Add logout that simply redirects to login without session management."  
**Changes:** Added Header component with Logout button clearing local storage and navigating to login.

---
