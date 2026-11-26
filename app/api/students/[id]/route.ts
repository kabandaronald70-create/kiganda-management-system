import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);
  if (Number.isNaN(id))
    return NextResponse.json({ error: 'Invalid id format' }, { status: 400 });

  try {
    const student = await prisma.student.findUnique({
      where: { id },
      include: { guardian: true, marks: true, attendance: true, fees: true },
    });
    if (!student)
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    return NextResponse.json(student);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch student' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);
  if (Number.isNaN(id))
    return NextResponse.json({ error: 'Invalid id format' }, { status: 400 });

  try {
    const body = await request.json();
    const student = await prisma.student.update({ where: { id }, data: body });
    return NextResponse.json(student);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update student' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);
  if (Number.isNaN(id))
    return NextResponse.json({ error: 'Invalid id format' }, { status: 400 });

  try {
    // Soft delete: update instead of actual delete
    await prisma.student.update({
      where: { id },
      data: { isArchived: true },
    });
    return NextResponse.json({ message: 'Student archived successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to archive student' },
      { status: 500 }
    );
  }
}
