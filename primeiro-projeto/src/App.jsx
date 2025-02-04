import AdicionarTarefas from "./componentes/AdicionarTarefas";
import Tarefas from "./componentes/Tarefas";
import "./App.css";
import { useEffect, useState } from "react";
import Titulo from "./componentes/Titulo";
import Teste from "./componentes/Teste"

function App() {
  const [tarefas, setTarefas] = useState(JSON.parse(localStorage.getItem("tarefas")));

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas) || []);
  }, [tarefas]);

  //Só é executado uma vez, e é quando acesso a página pela primeira vez
  useEffect(() => {
    async function pegarTarefas(){
      // chamar api
      const resposta = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET"
        });
      // pegar os dados
      const dados = await resposta.json();
      
      console.log(dados);

      setTarefas(dados);
    }
    
    //Se quiser pode utilizar uma api para pegar as tarefas
    //pegarTarefas();
  }, []);

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
    const novaListaTarefas = tarefas.filter((tarefa) => tarefa.id !== idTarefa);

    setTarefas(novaListaTarefas);
  }

  function adicionarTarefa(novoTitulo, novaDescricao){
    const novoId = (tarefas.length !== 0) ? tarefas[tarefas.length-1].id + 1:1;

    const novaTarefa = {
      id: novoId,
      titulo: novoTitulo,
      descricao: novaDescricao,
      foiConcluido: false
    }

    setTarefas([...tarefas, novaTarefa]);
  } 
  
  
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        {/* <Teste /> */}
        <Titulo>Gerenciador de Tarefas</Titulo>
        <AdicionarTarefas 
        adicionarTarefa={adicionarTarefa}
        />
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
