
import { useState } from 'react'
import '../styles/addproduto.scss'

export function AddProdutos(){
    let [ img, setImg] = useState('https://www.brasilagro.com.br/uploads/conteudo/conteudo/2019/10/SDhLR/hamburguer-vegetariano-mac-FcrAXX_400x400.jpg')
    return(
        <div className="add-produto">
            <div className="produto-descricao">
                <img src={img} />
                <div>
                    <h2>Magic Burges</h2>
                    <p>without meat</p>
                </div>

            </div>
            <div className="pre-carrinho">
                <div className="quantidade">
                    7
                </div>
                <div className="maismenos">

                        <button> - </button>

                 <button> + </button>
                </div>

                    <a className="add-carrinho">
                        <i className="fa fa-cart-plus" aria-hidden="true"></i>
                    </a>

            </div>
            
       
        </div>
    )
}