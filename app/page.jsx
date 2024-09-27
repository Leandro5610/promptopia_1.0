import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Descubra e Compartilhe
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> prompts alimentados por IA</span>
    </h1>
    <p className='desc text-center'>
    Promptopia é uma ferramenta de prompt de IA de 
    código aberto para o mundo moderno descobrir, 
    criar e compartilhar prompts criativos
    </p>

    <Feed />
  </section>
);

export default Home;
