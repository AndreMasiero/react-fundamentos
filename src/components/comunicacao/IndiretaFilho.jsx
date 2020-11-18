import React from "react";

export default props => {
    const callBack = props.quandoClicar;

    return (
        <div>
            <div>
                <div>Filho</div>
                <button onClick={_ => callBack('André', 37, true)}>
                    Fornecer Informações
                </button>
            </div>
        </div>
    )
}