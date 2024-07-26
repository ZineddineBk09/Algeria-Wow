import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
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

      // @ts-ignore
      async authorize(credentials) {
        console.log("credentials", credentials);

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // @ts-ignore
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

      // @ts-ignore
      async jwt(token, user) {
        if (user) {
          token.id = user.id;
          token.name = user.name;
          token.email = user.email;
        }
        return token;
      },

      // @ts-ignore
      async session(session, user) {
        return session;
      },
    }),
  ],
} satisfies AuthOptions;

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
