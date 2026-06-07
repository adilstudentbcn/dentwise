import UserSync from "@/components/UserSync";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

export default async function OnboardingPage() {
  const user = await currentUser();

  // If they aren't even logged in, send them to sign in
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      {/* This component will trigger the API call to create the user in your DB */}
      <UserSync /> 
      
      <h1 className="text-3xl font-bold mb-4">Setting up your profile...</h1>
      <p className="text-muted-foreground mb-6">
        Please wait a moment while we finish setting up your account.
      </p>
      
      {/* Add a button to continue to the dashboard once synced */}
      <a href="/dashboard" className="text-primary font-medium underline">
        Click here if you aren't redirected automatically
      </a>
    </div>
  );
}