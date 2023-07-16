import { prisma } from '@libs/prisma';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    const hashedPassword = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error: any) {
    console.error('Error:', error);

    // Handle Prisma client known errors
    if (error.code === 'P2002') {
      // Unique constraint violation
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 400 }
      );
    }
    // Handle other Prisma client errors
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
