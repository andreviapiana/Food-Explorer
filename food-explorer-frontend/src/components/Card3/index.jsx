import { Container, Content, PurchaseCard } from './styles.js'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

import imagePlaceholder from '../../assets/image-not-found-icon.svg';

import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

import { api } from '../../services/api';

import { Button } from '../Button';
import { ButtonText } from "../ButtonText";
import { BsReceipt } from 'react-icons/bs';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useState } from "react";

export function Card3({ data, ...rest }) {
    const { user } = useAuth()
    const [counter, setCounter] = useState(1);

    const imageURL = data.image ? `${api.defaults.baseURL}/files/${data.image}` : imagePlaceholder;

    //====increase counter====//
    const increase = () => {
        setCounter(count => count + 1);
        };
     
    //====decrease counter====//
    const decrease = () => {
        if (counter < 2) {
            alert("Erro: A quantidade mínima é 1 unidade")
            return;
        }
    setCounter(count => count - 1);
    };

    //====Favorites Button with LocalStorage ====//
    const [storageItem, setStorageItem] = useState(() => JSON.parse(localStorage.getItem("favorites") || "[]"))

    const isFavorited = storageItem.includes(data.id)

    const handleToggleFavorite = () => {
        if (!isFavorited) {
            const newStorageItem = [...storageItem, data.id]
            setStorageItem(newStorageItem);
            localStorage.setItem("favorites", JSON.stringify(newStorageItem))
        } else {
            const newStorageItem = storageItem.filter((savedId) => savedId !== data.id)
            setStorageItem(newStorageItem);
            localStorage.setItem("favorites", JSON.stringify(newStorageItem))
        }
    }

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
                            onClick={handleToggleFavorite}
                            >
                                {isFavorited ?
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
                                    <span>{counter.toString().padStart(2, '0')}</span>
                                    <ButtonText 
                                        icon={FiPlus}
                                        onClick={increase}
                                    />
                                </div>

                                <Button 
                                    title="incluir"
                                    icon={BsReceipt}
                                    style={ { height: 56, width: 92, padding: '12px 4px' } }
                                />
                            </PurchaseCard>
                        </div>
                    </Content>
                }
        </Container>
    );
}