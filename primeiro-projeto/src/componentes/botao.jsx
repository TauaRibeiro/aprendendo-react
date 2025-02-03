function Botao(props){
    return (
        <div>
            <button 
            {...props}
            className={`w-full space-y-4 p-2 bg-slate-400 text-white rounded-md text-left`}>
                {props.children}
            </button>
        </div>
    );
}

export default Botao;