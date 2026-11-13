# Kiganda Management System - Architecture & Design

## 1. Component Architecture & Routes

**MVP Routes:**

- `/` (Landing Page / Login)
- `/dashboard` (Admin Overview)
- `/students` (Admin: Student List)
- `/students/[id]` (Admin: Student Detail)
- `/marks` (Teacher: Marks Entry)
- `/attendance` (Teacher: Attendance Entry)
- `/fees` (Bursar: Fee Tracking & Payments)

**Reusable Components:**

- `Header.tsx` (Navigation and logout)
- `Sidebar.tsx` (Role-based navigation)
- `StatCard.tsx` (Dashboard summaries)
- `DataTable.tsx` (For student lists and fee records)
- `StudentForm.tsx` (Add/Edit student)

## 2. Data Model

**Core Entities:**

1. **User:** id, email, password_hash, role (admin, teacher, parent, bursar).
2. **Student:** id, first_name, last_name, class (S1-S6), stream, guardian_id (Foreign Key).
3. **Mark:** id, student_id, subject, term, academic_year, score, grade.
4. **Attendance:** id, student_id, date, status (present/absent).
5. **FeePayment:** id, student_id, amount, date, receipt_number (Unique), idempotency_key.
6. **FeeAssessment:** id, class, term, amount_due.

**Relationships:**

- One User (Parent) has Many Students (One-to-Many).
- One Student has Many Marks, Attendances, and FeePayments (One-to-Many).
- One FeeAssessment applies to a whole Class (One-to-Many).

## 3. Design Theme & Branding

- **Framework:** Tailwind CSS
- **Color Palette:**
  - Primary: `bg-blue-600` (Trust, Education)
  - Background: `bg-gray-50`
  - Text: `text-slate-800`
  - Accents: `bg-emerald-500` (for success/fees paid)
- **Typography:** `Inter` via `next/font/google`
- **Layout:** Clean, data-heavy, with a fixed left sidebar and a top header. Mobile responsive (sidebar collapses to a hamburger menu).
