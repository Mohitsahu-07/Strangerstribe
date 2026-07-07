import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center pt-40 pb-16 bg-gray-50 min-h-[calc(100vh-140px)]">
      <div className="w-full max-w-md flex justify-center p-4">
        <SignUp />
      </div>
    </div>
  );
}
