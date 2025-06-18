import Image from "next/image";
import styles from "@/styles/SobreNos.module.css"

export default function NossaHistoria() {
  return (
      <section className="container md:flex gap-2 ">
        <div className={`md:w-[50%] ${styles.historia}`} >
          <h1 className="">Nossa História</h1>
          <p className="pb-2.5">
            A Casa Reviver é um projeto social fundado em 06 de junho de 2006
            por Vinicius Silva de Souza, bacharel em Teologia, e Karina da
            Silva, assistente social, no Morro do Estado — a maior favela de
            Niterói. Surgiu após a perda do irmão de Vinicius, vítima da
            violência local, como uma iniciativa cristã de apoio à comunidade.
            Com o tempo, o projeto cresceu e se tornou um trabalho de
            desenvolvimento comunitário baseado em princípios cristãos. Suas
            ações contam com o apoio da comunidade, voluntários, universidades,
            ONGs, igrejas e instituições públicas.
          </p>
        </div>
        <div className={`md:w-[50%] ${styles.historiaImagem}`}>
          <Image
            width={1280}
            height={941}
            src="/images/historia.jpg"
            alt="CasaReviver"
          />
        </div>
    </section>
  );
}
