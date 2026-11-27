# Highway SMS Management System - Authentication Strategy

## Selected Auth Strategy

We have selected **Auth.js v5 (NextAuth.js)** using the **Credentials Provider** (Email and Password). This allows us to have full control over the user database and role management without relying on third-party OAuth providers.

## Baseline Login/Logout Behavior

- **Login:** Users log in via `/login`. Passwords are securely hashed and compared using `bcryptjs`. Upon successful login, a signed JWT session is created.
- **Logout:** Users can log out via the `SignOutButton` in the header. This clears the session cookie and redirects to the home page.
- **Session State:** The UI dynamically updates based on the session state (e.g., showing "Dashboard" and "Sign Out" when logged in, and "Sign In" when logged out).

## Role-Based Access Control (RBAC)

The system supports four roles: `admin`, `teacher`, `parent`, and `bursar`.

- **Middleware Protection:** The `middleware.ts` file protects all `/dashboard` routes. Unauthenticated users are redirected to `/login`.
- **Server Action Protection:** Every mutation (Create, Update, Delete) checks the user's session before interacting with the database.

## Security Measures

- **Password Hashing:** All passwords are hashed using bcrypt before being stored in the PostgreSQL database.
- **Edge vs. Node Runtime:** We separate `auth.config.ts` (safe for Edge middleware) from `auth.ts` (uses Node.js APIs like bcrypt and Prisma).
