import React from "react";

/* Esse tipo de componente está caindo em desuso visto que não 
dá para usar hooks nessas classes*/

class Test extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            messagem: "Testando"
        }
    }

    render(){
        return(
            <h1>{this.state.messagem}</h1>
        );
    }
}

export default Test;