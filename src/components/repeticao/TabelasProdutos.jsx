import React from "react";
import './TabelaProdutos.css';
import produtos from '../../data/produto';

export default props => {
    return (
        <div className="TabelaProdutos">
            <table  border="1">
                <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
                </thead>
                <tbody>
                {
                    produtos.map((produto, i) => {
                        return (
                            <tr className={i % 2 === 0 ? 'Par' : ''} key={produto.id}>
                                <td></td>
                                <td style={{textAlign: 'left'}}>{produto.id}</td>
                                <td style={{textAlign: 'left'}}>{produto.nome}</td>
                                <td style={{textAlign: 'right'}}>R$ {produto.preco}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}