import AdicionarTarefas from "./componentes/AdicionarTarefas";
import Tarefas from "./componentes/tarefas";
import "./App.css";
import { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      titulo: "Estudar programação",
      descricao: "Estudar programação usando react",
      foiConcluido: false,
    },
    {
      id: 2,
      titulo: "Comer",
      descricao: "Comer algo",
      foiConcluido: true,
    },
    {
      id: 3,
      titulo: "Dormir",
      descricao: "Dormir para descansar um pouco",
      foiConcluido: false,
    },
  ]);

  function onTarefaClick(idTarefa) {
    const novaListaTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === idTarefa) {
        return { ...tarefa, foiConcluido: !tarefa.foiConcluido };
      }

      return tarefa;
    });

    setTarefas(novaListaTarefas);
  }

  function deleteTarefa(idTarefa) {
    console.log({ tarefas });

    const novaListaTarefas = tarefas.filter((tarefa) => tarefa.id !== idTarefa);

    setTarefas(novaListaTarefas);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl font-bold text-slate-50 text-center">
          Gerenciador de Tarefas
        </h1>
        <AdicionarTarefas />
        <Tarefas
          tarefas={tarefas}
          onTarefaClick={onTarefaClick}
          deleteTarefa={deleteTarefa}
        />
      </div>
    </div>
  );
}

export default App;
