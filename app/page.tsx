import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center min-h-screen">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold drop-shadow-md">Welcome</h1>
        <p className="text-lg text-slate-400 uppercase">
          to Next Auth template
        </p>
        <div>
          <Button>Sign In</Button>
        </div>
      </div>
    </main>
  );
}
