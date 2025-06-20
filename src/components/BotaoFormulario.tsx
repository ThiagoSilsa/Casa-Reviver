import Link from "next/link";

export function BotaoFormulario() {
  return (
    <div className="text-center my-8">
      <Link
        href="https://forms.gle/seu-formulario-aqui"
        target="_blank"
        className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
      >
        Quero Ser Voluntário
      </Link>
    </div>
  );
}
