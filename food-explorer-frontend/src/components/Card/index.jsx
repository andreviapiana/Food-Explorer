import { Container } from './styles.js'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { PurchaseCard } from "../../components/PurchaseCard";

import Ravanello from '../../assets/Ravanello.png';

export function Card() {

    return (
        <Container>
            <button className="btn-fav ">
                <AiOutlineHeart />
            </button>
                <div className="container">
                    <img src={Ravanello} alt="" />
                    <h1 className="product-title">Salada Ravanello</h1>
                    <p className="description">Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
                    <h1 className="price-title">R$ 49,97</h1>
                    <PurchaseCard />
                </div>
        </Container>
    )
}