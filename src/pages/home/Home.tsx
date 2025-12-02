function Home() {
  return (
    <>
      <div className="bg-cyan-100 flex justify-center min-h-[90vh] items-center">
      <div className="container grid grid-cols-2 text-black">
        <div className="flex flex-col gap-4 items-center justify-center py-10">
          <h2 className="text-5xl font-bold">
            Seja bem vindo!</h2>
          <p className="text-xl text-slate-600 font-semibold">
            Aqui você encontra Medicamentos e Cosméticos!</p>
          <div className=""> 
            Cadastrar Produto
          </div>
        </div>
        
      </div>
      <div className="flex justify-center">
        <img src="https://ik.imagekit.io/gwm5ha4ws/Farmcia-GOAL/hero?updatedAt=1764681438035" alt="Imagem da Página Home"
				className="w-2/3   m-12" />
      </div>
    </div>
    </>
    
  )
}

export default Home