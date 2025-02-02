import {ChevronRightIcon, DeleteIcon, TrashIcon} from 'lucide-react';

function Tarefas(props) {
    return (
    <div>
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {props.tarefas.map((tarefa) =>(
                <li key={tarefa.id} className="flex gap-2">
                    <button 
                    onClick={()=> props.onTarefaClick(tarefa.id)}
                    className={`w-full space-y-4 p-2 bg-slate-400 text-white rounded-md text-left ${tarefa.foiConcluido && 'line-through'}`}>
                        {tarefa.titulo}
                    </button>
                    <button className="bg-slate-400 p-2 rounded-md text-white"><ChevronRightIcon /></button>
                    <button 
                    onClick={()=> props.deleteTarefa(tarefa.id)}
                    className="bg-slate-400 p-2 rounded-md text-white"><TrashIcon /></button>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default Tarefas;
