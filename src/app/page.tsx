import { Button } from "@/components/ui/button";
import styles from "@/styles/Methods.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section
        className={`flex min-h-screen flex-col items-center justify-center bg-gray-100 ${styles.fadeIn}`}
      >
        <div className="flex flex-col items-">
          <h1 className={`text-3xl font-bold mb-4 pt-20`}>
            Sonho de um menino que se tornou realidade
          </h1>
          <Link href={"/sobre"}>
            <Button className="hover:cursor-pointer">Conheça a Casa Reviver</Button>
          </Link>
        </div>

      </section>
    </>
  );
}
