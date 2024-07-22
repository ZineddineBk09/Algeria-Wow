import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  session: { strategy: "jwt" },
  pages: {
    signIn: "/",
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      // @ts-ignore
      async authorize(credentials) {
        const { email, password } = credentials;

        console.log("credentials", credentials);

        if (!email || !password) {
          return null;
        }

        // @ts-ignore
        const user = {
          id: 1,
          name: "John Doe",
          email: "admin@site.com",
          password: "password",
        };

        if (user.email === email && user.password === password) {
          return user;
        }
        return null;
      },
    }),
  ],
});
