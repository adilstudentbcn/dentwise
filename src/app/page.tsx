import {  SignUpButton, SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";


export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="p-8">
      <h1>Home page</h1>

      {!userId ? (
        // This is shown if the user is NOT logged in
        <SignUpButton mode="modal">
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Sign Up
          </button>
        </SignUpButton>
      ) : (
        // This is shown if the user IS logged in
        <div>
          <p>Welcome back, user!</p>
          <SignOutButton>
            <button className="border p-2 rounded">Logout</button>
          </SignOutButton>
        </div>
      )}
    </div>
  );
}