function Titulo(props){
    return (
        <div>
            <h1 className="text-3xl font-bold text-slate-50 text-center">
                {props.children}
            </h1>
        </div>
    );
}

export default Titulo;