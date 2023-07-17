import { prisma } from '@libs/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { compare } from 'bcrypt';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/login',
    error: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter your password',
        },
      },
      async authorize(credentials) {
        // Handle authentication
        try {
        } catch (error) {}

        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error('Invalid credentials');
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isPasswordValid) {
          throw new Error('Invalid credentials');
        }

        return {
          id: user.id + '',
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
