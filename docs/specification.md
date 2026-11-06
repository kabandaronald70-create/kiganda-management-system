# Kiganda Management System

## Project Title & Description

Kiganda Management System is a full-stack web application designed to bring student records, class registers, marks and report cards, and school fees tracking into one secure online platform for Highway Secondary School Kiganda.

The initial release (MVP) focuses on core management workflows: secure role-based accounts, student record CRUD, marks entry, attendance tracking, and fee balance visibility.

## Purpose & Target Audience

- **Audience:** School administrators, teachers, and parents/guardians of Highway Secondary School Kiganda.
- **Purpose:** Replace scattered paper registers and spreadsheets with accurate, accessible, real-time information to improve school efficiency and parent communication.

## User Stories

1. As an administrator, I want to log in securely so that I can manage student data and fees privately.
2. As an administrator, I want to register and update student records so that the school database is always accurate.
3. As a teacher, I want to enter marks and attendance for my classes so that report cards are generated accurately.
4. As a parent, I want to view my child's academic progress and fee balance from my phone so that I stay informed.
5. As a bursar, I want to record fee payments so that the school can track outstanding balances.

## Acceptance Criteria

### Story 1: Secure Login

- Given a registered user, when they submit valid credentials, then the system authenticates them and redirects to their role-specific dashboard (Admin, Teacher, or Parent).
- Given an unregistered user, when they try to access a dashboard, then the system redirects them to the login page.

### Story 2: Register and update student records

- Given an administrator, when they submit the student registration form, then a new student record is created with class (S1-S6), stream, and guardian details.
- Given missing required fields, when the form is submitted, then the system blocks submission and shows validation errors.

### Story 3: Enter marks and attendance

- Given a teacher, when they input marks for a specific term and subject, then the system calculates the total, average, and grade.
- Given a teacher taking attendance, when they submit the daily register, then the system logs the attendance and updates the student's absence summary.

## Technical Requirements

- **Framework:** Next.js (App Router)
- **Language:** TypeScript in strict mode
- **Styling:** Tailwind CSS
- **Data:** PostgreSQL via Supabase (data models: Students, Marks, Attendance, Fee Payments, Users)
- **Auth:** Auth.js v5 (NextAuth.js) with role-based access
- **Performance:** Server components by default; client components only where interactivity is needed

## Core API Endpoints

- `GET /api/students`
- `POST /api/students`
- `PUT /api/students/:id`
- `DELETE /api/students/:id`
- `GET /api/marks`
- `POST /api/marks`
- `GET /api/attendance`
- `POST /api/attendance`
- `GET /api/fees`
- `POST /api/fees`

## Implementation Priority

- **P0 (MVP):** Auth (login/roles), Student CRUD, Marks Entry & Report Card generation, Fee tracking overview.
- **P1:** Attendance register, printable report cards, parent portal view.
- **P2:** SMS notifications (Africa's Talking), Mobile Money payments (MTN/Airtel), Timetable management.
