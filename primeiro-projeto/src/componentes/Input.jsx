function Input(props){
    return (
        <div>
            <input 
            className="bg-white border w-md border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            {...props} />
        </div>
    );
}

export default Input;