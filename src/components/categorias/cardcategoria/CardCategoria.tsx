import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria"
import { PencilIcon, TrashIcon } from "@phosphor-icons/react";

interface CardCategoriaProps {
    categoria: Categoria
  }

function CardCategorias({categoria}: Readonly<CardCategoriaProps>) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between w-3/5'>
            <header className='py-2 px-6 bg-indigo-800  text-white font-bold text-2xl'>Categoria</header>
            <p className='p-8 text-3xl bg-white h-full'>{categoria.nome}</p>
            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full text-slate-100 bg-indigo-800 hover:bg-teal-700 
                        flex items-center justify-center py-2 '>
                    <PencilIcon
                    size={24}
                    className="mr-1 hover:fill-teal-800"
                    />
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`}
                    className='text-slate-100 bg-indigo-800 w-full 
                        flex items-center justify-center'>
                  <TrashIcon
                    size={24}
                    className="mr-1 hover:fill-red-700"/>
                </Link>
            </div>
        </div>
    );
}

export default CardCategorias;