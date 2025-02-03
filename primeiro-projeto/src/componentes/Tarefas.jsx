import {ChevronRightIcon, TrashIcon} from 'lucide-react';
import {useNavigate} from 'react-router-dom';
import Botao from "./botao";

function Tarefas({tarefas, onTarefaClick, deleteTarefa}) {
    const navegacao = useNavigate();
    
    function verDetales(tarefa){
        const query = new URLSearchParams();
        query.set("titulo", tarefa.titulo);
        query.set("descricao", tarefa.descricao);
        navegacao(`/descricao?${query.toString()}`);
    }
    return (
    <div>
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tarefas.map((tarefa) =>(
                <li key={tarefa.id} className="flex gap-2">
                    <button 
                    onClick={()=> onTarefaClick(tarefa.id)}
                    className={`w-full space-y-4 p-2 bg-slate-400 text-white rounded-md text-left ${tarefa.foiConcluido && 'line-through'}`}>
                        {tarefa.titulo}
                    </button>
                    <Botao
                    onClick={()=>{verDetales(tarefa)}}>
                        <ChevronRightIcon />
                    </Botao>

                    <Botao
                    onClick={()=> deleteTarefa(tarefa.id)}>
                        <TrashIcon />
                    </Botao>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default Tarefas;
