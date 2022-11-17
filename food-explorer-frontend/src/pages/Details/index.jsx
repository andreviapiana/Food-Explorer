import { Container, Content, Ingredient, PurchaseCard } from "./styles.js";

import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Ingredients } from "../../components/Ingredients";
import { RiArrowLeftSLine } from 'react-icons/ri';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global'
import lightTheme from '../../styles/lightTheme';
import darkTheme from '../../styles/theme';

import { ThemeSlider} from "../../components/ThemeSlider";
import { useDarkMode } from '../../styles/useDarkMode';

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { Button } from "../../components/Button";
import { useCart } from '../../hooks/cart';
import { useAuth } from "../../hooks/auth";
import { FiMinus, FiPlus } from 'react-icons/fi';
import { BsReceipt } from 'react-icons/bs';

export function Details() {
    const { user } = useAuth()
    const [ theme, toggleTheme ] = useDarkMode();
    const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;

    const [data, setData] = useState(null);
    const params = useParams();

    const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;

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
    
    useEffect(() => {
        async function fetchDishDetail() {
          const response = await api.get(`/dishes/${params.id}`);
          setData(response.data);
        }
    
        fetchDishDetail();
      }, []);
    
    return(
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
                <Container>
                    <Header />
                    {
                        data &&

                        <Content>

                            <ThemeSlider theme={theme} toggleTheme={toggleTheme}/>
                            
                            <Link to="/">
                                <ButtonText
                                    title="Voltar" 
                                    icon={RiArrowLeftSLine} 
                                />
                            </Link>
                    
                            <div className="content">
                    
                                <div className="dish">
                                <img src={imageURL} alt="Logo" />
                                <div className="description">
                    
                                    <h1>{data.title}</h1>
                    
                                    <h3>{data.description}</h3>

                                    <Ingredient>
                                        {
                                            data.ingredients.map(ingredient => (
                                                <Ingredients
                                                    key={String(ingredient.id)}
                                                    ingredient={ingredient.name}
                                                />
                                            ))
                                        }
                                    </Ingredient>
                                                        
                                    <div className="price">
                                        <h4>R$ {data.price}</h4>
                                    
                                        <div className="purchaseCard">
                                            {
                                                user.isAdmin ?

                                                <PurchaseCard>
                                                    {
                                                        data &&
                                                            <Link to={`/editdish/${data.id}`}>
                                                                <Button 
                                                                    title="editar prato"
                                                                    icon={BsReceipt}
                                                                />
                                                            </Link>
                                                    }
                                                </PurchaseCard>
                                                
                                            :

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
                                            }
                                        </div>
                                    </div>
                    
                                </div>
                                </div>
                            </div>
                
                        </Content>
                    }
                    
                    <Footer />
                </Container>
        </ThemeProvider>
    );
}