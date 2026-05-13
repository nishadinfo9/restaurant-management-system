import SignInForm from "@/components/forms/SignInForm";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-muted/30 flex items-center justify-center px-4">
      <section className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>

          <p className="text-sm text-muted-foreground mt-2">
            Sign in to manage your restaurant.
          </p>
        </div>

        <SignInForm />
      </section>
    </main>
  );
}
