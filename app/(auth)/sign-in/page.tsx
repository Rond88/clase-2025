import React from "react";
import { Metadata } from "next";
import { APP_NAME } from "@/lib/constantes";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CredentialsSignInForm from "@/components/auth/credentials-sign-in-form";

export const metadata: Metadata = {
  title: `Sign In`,
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const { callbackUrl = "/profile" } = await searchParams;
  console.log("Callback URL:", callbackUrl);
  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Link href={"/"} className="flex-center">
            <Image
              src="/images/logo.svg"
              alt={APP_NAME}
              width={50}
              height={50}
            />
          </Link>
          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CredentialsSignInForm callbackUrl={callbackUrl} />
        </CardContent>
      </Card>
    </div>
  );
}
