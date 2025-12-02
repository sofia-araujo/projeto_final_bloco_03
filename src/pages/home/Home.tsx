function Home() {
  return (
    <>
      <div className="bg-cyan-100 flex justify-center min-h-[90vh] items-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 text-black px-6 gap-6 
        md:flex-row">

          {/* Coluna de texto */}
          <div className="flex flex-col gap-4 items-center justify-center py-10 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold">
              Seja bem vindo!
            </h2>

            <p className="text-lg md:text-xl text-slate-600 font-semibold">
              Aqui você encontra Medicamentos e Cosméticos!
            </p>

            <div className="bg-indigo-800 text-white px-8 py-4 rounded-lg font-bold cursor-pointer hover:bg-cyan-700 transition">
              Cadastrar Produto
            </div>
          </div>

          {/* Coluna da imagem */}
          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/gwm5ha4ws/Farmcia-GOAL/hero?updatedAt=1764681438035"
              alt="Imagem da Página Home"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl m-6"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
