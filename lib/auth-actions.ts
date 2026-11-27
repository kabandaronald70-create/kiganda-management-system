'use server';

import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function registerUser(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const role = formData.get('role') as string;

  if (!email || !password || !role) {
    throw new Error('Missing fields');
  }

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role,
      },
    });
  } catch (error) {
    console.error('Registration failed:', error);
    throw new Error('Could not create user');
  }

  redirect('/login');
}

export async function archiveStudent(id: number) {
  try {
    await prisma.student.update({
      where: { id },
      data: { isArchived: true },
    });
  } catch (error) {
    console.error('Failed to archive student:', error);
    throw new Error('Failed to archive student');
  }

  revalidatePath('/dashboard');
}
