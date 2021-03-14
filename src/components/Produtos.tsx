import '../styles/produtos.scss'
export function Produtos(){

    return(
        <div className="produtos">
            <img className="slide" src="img/hamburguer.png"/>

            <div className="description-produto">

            <div className="name">
                <img  src="img/magicburgers.png" />
            </div>
            <div className="description">
                <p>
                    Lorem Ipsum é simplesmente uma simulação er de texto da indústria tipográfica
                    e de sere impressos, e vem sendo utilizado desde o 23 século XVI, 
                </p>

                <a href="#">Tast this burgues</a>
                
            </div>
            </div>
        </div>
    )
}