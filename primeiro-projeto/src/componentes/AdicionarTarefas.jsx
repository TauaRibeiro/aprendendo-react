import { useState } from "react";
import Input from "./Input";

function AdicionarTarefas({ adicionarTarefa }) {
  const [inputTitulo, setInputTitulo] = useState(""); 
  const [inputDescricao, setInputDescricao] = useState(""); 
  
  return (
    <div>
      <div className="bg-slate-200 rounded-md shadow flex flex-col space-y-4 p-6">
        <Input 
        value={inputTitulo} 
        onChange={(event) => setInputTitulo(event.target.value)}
        placeholder="Digite o titulo da tarefa"
        type="text"/>
        
        <Input 
        value={inputDescricao} 
        onChange={(event) => setInputDescricao(event.target.value)}
        placeholder="Digite a descrição da tarefa"
        type="text"/>
        
        <button 
        onClick={() => {
          if(inputTitulo.trim() === "" && inputDescricao.trim() === ""){
            return alert("Por favor prencha todos os campos necessário!");
          }
          adicionarTarefa(inputTitulo, inputDescricao);
          
          setInputDescricao("");
          setInputTitulo("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default AdicionarTarefas;
