import React, {useState} from "react";

export default (props) => {
    const [valor, setValor] = useState("Inicial");

    function quandoMudar(e) {
        setValor(e.target.value);
    }

    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={quandoMudar}/>
                <input value={valor} readOnly/>
                <input value={undefined}/>
                <input value={valor} onChange={v => setValor(v.target.value)}/>
            </div>
        </div>
    )
}