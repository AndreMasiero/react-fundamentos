import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome='André' idade='37' nerd={true}/>
            <DiretaFilho nome='Severino' idade='17' nerd={false}/>
        </div>
    )

}