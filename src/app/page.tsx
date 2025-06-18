import { Button } from "@/components/ui/button";
import styles from "@/styles/Home.module.css"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className={`text-3xl font-bold mb-4 ${styles.fadeIn}`}>Bem-vindo à Casa Reviver</h1>
      <Button>Doar agora</Button>
    </main>
  );
}
