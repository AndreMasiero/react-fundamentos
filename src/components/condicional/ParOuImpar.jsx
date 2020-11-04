import React from "react";

export default props => {
    const isPar = props.numero % 2 === 0;

    return (
        <div>
            {
                isPar ? <span>{props.numero} -> Par</span> : <span>{props.numero} -> Ímpar</span>
            }
        </div>
    )
}