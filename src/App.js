import React from "react";
import './App.css';
import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ListaAluno from "./components/repeticao/ListaAluno";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Famila from "./components/basicos/Famila";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import TabelaProdutos from "./components/repeticao/TabelasProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#08 - Par ou Ímpar" color="#DB7093">
                <ParOuImpar numero={21}/>
                <ParOuImpar numero={12}/>
                <ParOuImpar numero={16}/>
                <ParOuImpar numero={11}/>
            </Card>

            <Card titulo="#07 - Produtos" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAluno></ListaAluno>
            </Card>

            <Card titulo="#05 - Componentes com filho" color="#D8BFD8">
                <Famila sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Ana"/>
                    <FamiliaMembro nome="Gustavo"/>
                </Famila>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#080">
                <Aleatorio min={1} max={60}/>
            </Card>

            <Card titulo="#03 - Fragmento" color="#0000CD">
                <Fragmento></Fragmento>
            </Card>

            <Card titulo="#02 - Com parametro" color="#FFD700">
                <ComParametro titulo="Segundo Componente"
                              subtitulo="Muito legal"/>
            </Card>

            <Card titulo="#01 - Primeiro componente" color="#A020F0">
                <Primeiro></Primeiro>
            </Card>

        </div>


    </div>
