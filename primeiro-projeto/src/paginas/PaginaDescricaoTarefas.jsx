import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Titulo from "../componentes/Titulo";


function PaginaDescricaoTarefas(){
    const navegacao = useNavigate();
    const [parametrosPesquisa] = useSearchParams();
    const titulo = parametrosPesquisa.get("titulo");
    const descricao = parametrosPesquisa.get("descricao");


    return (
        <div className="h-screen w-screen bg-slate-500 p-6">
            <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 mb-6">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative">
                    <button 
                    onClick={() => navegacao(-1)}
                    className="absolute left-0 top-0 bottom-0 text-slate-100">
                        <ChevronLeftIcon />
                    </button>

                    <Titulo>Detalhes da tarefa</Titulo>
                </div>
                
                <div className="bg-slate-200 p-4 rounded-md">
                    <h2 className="text-xl text-slate-600 font-bold">{titulo}</h2>
                    <p className="text-slate-600">{descricao}</p>

                </div>
            </div>
            </div>
        </div>

        
    );
}

export default PaginaDescricaoTarefas;
