//====import styles====//
import { Container, Content, PurchaseCard } from './styles.js'

//====import components====//
import { Button } from '../Button';
import { ButtonText } from "../ButtonText";

//====import hooks and API====//
import { useAuth } from "../../hooks/auth";
import { useFavorites } from '../../hooks/favorites';
import { useCart } from '../../hooks/cart';
import { Link } from "react-router-dom";
import { api } from '../../services/api';
import { useState } from "react";

//====import icons/images====//
import { BsReceipt } from 'react-icons/bs';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import imagePlaceholder from '../../assets/image-not-found-icon.svg';

export function Card({ data, ...rest }) {
    //====load user credentials====//
    const { user } = useAuth()
    
    //====load dish image====//
    const imageURL = data.image ? `${api.defaults.baseURL}/files/${data.image}` : imagePlaceholder;
    
    //====load and store favorites====//
    const { favorites, addDishToFavorite, removeDishFromFavorite } = useFavorites()
    const isFavorite = favorites.some((dish) => dish.title === data.title)

    //====load and store cart====//
    const { handleAddDishToCart, paymentAccept } = useCart();
    
    //====set quantity initial state====//
    const [quantity, setQuantity] = useState(1);

    //====increase quantity====//
    const increase = () => {
        if (quantity > 19) {
            alert("Erro: A quantidade máxima é de 20 unidades")
            return;
        }
        setQuantity(count => count + 1);
    };
     
    //====decrease quantity====//
    const decrease = () => {
        if (quantity < 2) {
            alert("Erro: A quantidade mínima é 1 unidade")
            return;
        }
        setQuantity(count => count - 1);
    };

    return (
        <Container {...rest}>
            {
                user.isAdmin ?

                    <Content>
                        <div className="container">
                            <img src={imageURL} alt="Imagem do prato" />
                            <Link to={`/details/${data.id}`}>
                                <h3 className="product-title">{data.title}{' >'}</h3>
                            </Link>
                            <p className="description">{data.description}</p>
                            <h1 className="price">R$ {data.price}</h1>
                            <Link to={`/editDish/${data.id}`}>
                                <Button
                                    title="editar prato"
                                    icon={BsReceipt}
                                />
                            </Link>
                        </div>
                    </Content>

                :

                    <Content>
                        <button 
                            className="favButton"
                            onClick={() => isFavorite ? removeDishFromFavorite(data) : addDishToFavorite(data)}
                            >
                                {isFavorite ?
                                    <AiFillHeart />
                                :
                                    <AiOutlineHeart />
                                }
                        </button>

                        <div className="container">
                            <img src={imageURL} alt="Imagem do prato" />
                            <Link to={`/details/${data.id}`}>
                                <h3 className="product-title">{data.title}{' >'} </h3>
                            </Link>
                            <p className="description">{data.description}</p>
                            <h1 className="price">R$ {data.price}</h1>

                            <PurchaseCard>
                                <div className="counter">
                                    <ButtonText 
                                        icon={FiMinus}
                                        onClick={decrease}
                                    />
                                    <span>{quantity.toString().padStart(2, '0')}</span>
                                    <ButtonText 
                                        icon={FiPlus}
                                        onClick={increase}
                                    />
                                </div>

                                <Button 
                                    title="incluir"
                                    icon={BsReceipt}
                                    onClick={() => handleAddDishToCart(data, quantity, imageURL)}
                                    style={ { height: 56, width: 92, padding: '12px 4px' } }
                                />
                            </PurchaseCard>
                        </div>
                    </Content>
                }
        </Container>
    );
}