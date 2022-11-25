// Styling Imports
import { Container, Content, Ingredient, PurchaseCard } from "./styles.js";

// Theme Swap Imports
import { ThemeProvider } from 'styled-components';
import { ThemeSlider} from "../../components/ThemeSlider";
import { useDarkMode } from '../../styles/useDarkMode';
import GlobalStyles from '../../styles/global'
import lightTheme from '../../styles/lightTheme';
import darkTheme from '../../styles/theme';

// Components Imports
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Ingredients } from "../../components/Ingredients";
import { Button } from "../../components/Button";

// Strategic Imports (API and others)
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useCart } from '../../hooks/cart';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Image Imports
import { RiArrowLeftSLine } from 'react-icons/ri';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { BsReceipt } from 'react-icons/bs';

export function Details() {
    const [ theme, toggleTheme ] = useDarkMode();
    const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;

    const { user } = useAuth()

    const navigate = useNavigate();
    
    function handleBack() {
        navigate(-1);
    }

    const [data, setData] = useState(null);
    const params = useParams();

    const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;

    // Load and store cart
    const { handleAddDishToCart } = useCart();
    
    // Set quantity initial state
    const [quantity, setQuantity] = useState(1);

    // Increase Quantity
    const increase = () => {
        if (quantity > 19) {
            alert("Erro: A quantidade máxima é de 20 unidades")
            return;
        }
        setQuantity(count => count + 1);
    };
     
    // Decrease Quantity
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
                            
                            <Link>
                                <ButtonText
                                    title="Voltar" 
                                    icon={RiArrowLeftSLine} 
                                    onClick={handleBack}
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