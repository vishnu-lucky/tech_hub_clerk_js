import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import './App.css'; 

export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton className="sign-in-button" />
      </SignedOut>
      <SignedIn>
        <UserButton className="user-button" />
      </SignedIn>
    </header>
  );
}
