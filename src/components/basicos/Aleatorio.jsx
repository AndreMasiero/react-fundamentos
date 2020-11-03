import React from "react";

export default props => {
    const {min, max} = props;
    const aleatorio = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);

    return <div>
        <h2>valor Aleatório</h2>
        <p><strong>Valor mínimo </strong>{min}</p>
        <p><strong>Valor máximo </strong>{max}</p>
        <p><strong>Valor escolhido </strong>{aleatorio}</p>
    </div>;
}
