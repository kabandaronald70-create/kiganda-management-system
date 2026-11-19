import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const students = await prisma.student.findMany({
      include: { guardian: true },
    });
    return NextResponse.json(students);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch students' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      class: studentClass,
      stream,
      guardianId,
    } = body;

    if (!firstName || !lastName || !studentClass || !stream) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const student = await prisma.student.create({
      data: {
        firstName,
        lastName,
        class: studentClass,
        stream,
        guardianId: Number(guardianId),
      },
    });

    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create student' },
      { status: 500 }
    );
  }
}
