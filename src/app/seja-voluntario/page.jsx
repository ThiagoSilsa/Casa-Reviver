import {CarrosselFotos} from "@/components/CarrosselFotos";
import {ComoFunciona} from "@/components/ComoFunciona";
import {BotaoFormulario} from "@/components/BotaoFormulario";
import {CarrosselDepoimentos} from "@/components/CarrosselDepoimentos";

export default function SejaVoluntario() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className={`text-3xl font-bold mb-4 `}>Página Seja Voluntário</h1>
      <CarrosselFotos />
      <ComoFunciona />
      <CarrosselDepoimentos />
      <BotaoFormulario />
    </section>
  );
}
