import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import {prisma} from "@/db/prisma";
import { fa } from "zod/v4/locales";
 // If your Prisma file is located elsewhere, you can change the path
//import { PrismaClient } from "@/generated/prisma/client";



export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: { 
    enabled: true,
    minPasswordLength: 1,
  },
  user:{
    additionalFields:{
      phone: {
        type: "string",
        required: false,
        input: true,
      },
      role:{
        type: "string",
        required: false,
        input: false,
        defaultValue: "USER",
      }
    }
  }
});