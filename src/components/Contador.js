import { useState } from "react";

const Contador = () => {
    const [qtdCliques, setQtdCliques] = useState(0)

    const adicionar = () => {
        setQtdCliques(qtdCliques + 1);
    }
    
    const subtrair = () => {
        setQtdCliques(qtdCliques - 1);
    }


    return (
        <div>
        <button onClick={adicionar}>Incrementar</button>
        <h1>{qtdCliques}</h1>
        <button onClick={subtrair}>Decrementar</button>
        </div>
    )

}

export default Contador