import { Container } from './styles.js'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { PurchaseCard } from "../../components/PurchaseCard";

import ravanello from '../../assets/Ravanello.png';

export function Card() {

    return (
        <Container>
            <button className="favButton">
                <AiOutlineHeart />
            </button>

            <div className="container">
                <img src={ravanello} alt="Imagem do prato" />
                <a href="#"><h3 className="product-title">Salada Ravanello {'>'} </h3></a>
                <p className="description">Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
                <h1 className="price">R$ 49,97</h1>
                <PurchaseCard />
            </div>
        </Container>
    );
}