

import { MenuBar } from './components/MenuBar';
import { Produtos } from './components/Produtos';
import { Pedidos } from './components/Pedidos';
import { AddProdutos } from './components/AddPedidos';

import './styles/global.scss';



export function App() {
   
    return (
        <div className="container">
            <header >
                <MenuBar />
            </header>
           <div className="flex flex-item-1" >
            <section>
                <div>
                    <Produtos />
                </div>
                <div>
                <AddProdutos />
                </div>

            </section>
            <aside>
                <Pedidos />
            </aside>
            </div>
        </div>


    )
}


/**
 *  Component ******************
 *  import 
 * 
 * 
 * 
 * 
 * 
 * Propriedade *****************
 *  null coalescing operator
 * 
 * 
 * 
 * 
 * 
 * Estado **********************
 * Fragment <> </>
 * toda vez que usar uma função do React que tem o inicio como "use",
 * é um hook ou gancho
 * 
 * 
 * 
 * Imutabilidade ***************
 * 
 *  usuario  = ['Erick', Paul, Andrade ]
 * 
 *  novoUsurario = [...usuario, Kleniving]
 * 
 *  sempre criar um novo espaço na memoria, programação funcional
 * 
 */