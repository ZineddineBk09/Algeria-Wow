import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth"; // Import as a type
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_ID ?? "",
      clientSecret: process.env.FACEBOOK_SECRET ?? "",
    }),

    CredentialsProvider({
      id: "credentials",
      name: "credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      // @ts-expect-error: Should not be used
      async authorize(credentials: Record<"email" | "password", string>) {
        console.log("credentials", credentials);

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = {
          id: 1,
          name: "John Doe",
          email: "admin@site.com",
          password: "password",
        };

        if (
          user.email === credentials?.email &&
          user.password === credentials?.password
        ) {
          return user;
        }
        return null;
      },

      async jwt(
        token: {
          id: number;
          name: string;
          email: string;
        },
        user: { id?: number; name?: string; email?: string },
      ) {
        if (user) {
          token.id = user.id!;
          token.name = user.name!;
          token.email = user.email!;
        }
        return token;
      },

      // @ts-expect-error: Should not be called
      async session(session, _user) {
        return session;
      },
    }),
  ],
};

// Explicitly declare the handler as NextAuthHandler
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
