import NextAuth from "next-auth";
// https://authjs.dev/reference/core/providers/microsoft-entra-id
import Entra from "next-auth/providers/microsoft-entra-id";

export const { auth, handlers } = NextAuth({
  providers: [
    Entra({
      clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
      clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
      tenantId: process.env.AUTH_MICROSOFT_ENTRA_ID_TENANT_ID,
    }),
  ],

  pages: {
    signIn: "/login",
  },
});
