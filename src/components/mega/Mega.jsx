import React, {useState} from "react";
import './Mega.css'

export default (props) => {

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio;
    }

    function gerarNumero(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                console.log([...nums, novoNumero]);
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2);

        return numeros;
    }

    const [qtde, setQtde] = useState(props.qtde || 6);
    const numerosIniciais = Array(qtde).fill(0);
    const [numeros, setNumeros] = useState(numerosIniciais);

    let i = 1;

    return (
        <div className="Mega">
            <h2>Mega</h2>
            {numeros.map(numero => {
               return(<h3 key={i++}>{numero}</h3>)
            })}
            <div>
                <label>Qtde de números</label>
                <input type="number"
                       min="6"
                       max="15"
                       value={qtde}
                       onChange={e => setQtde(+e.target.value)}/>
            </div>
            <button onClick={_ => setNumeros(gerarNumero(qtde))}
            >Gerar números
            </button>
        </div>
    )

}