import { Container, Content } from './styles.js'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { PurchaseCard } from "../../components/PurchaseCard";

import ravanello from '../../assets/Ravanello.png';

import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

export function Card() {
    const { user } = useAuth()

    return (
        <Container>
            {
                user.isAdmin ?

                    <Content>
                        <div className="container">
                            <img src={ravanello} alt="Imagem do prato" />
                            <Link to="/details/1">
                                <h3 className="product-title">Salada Ravanello {'>'} </h3>
                            </Link>
                            <p className="description">Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
                            <h1 className="price">R$ 49,97</h1>
                            <PurchaseCard />
                        </div>
                    </Content>

                :

                    <Content>
                        <button className="favButton">
                            <AiOutlineHeart />
                        </button>

                        <div className="container">
                            <img src={ravanello} alt="Imagem do prato" />
                            <Link to="/details/1">
                                <h3 className="product-title">Salada Ravanello {'>'} </h3>
                            </Link>
                            <p className="description">Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
                            <h1 className="price">R$ 49,97</h1>
                            <PurchaseCard />
                        </div>
                    </Content>
                }
        </Container>
    );
}