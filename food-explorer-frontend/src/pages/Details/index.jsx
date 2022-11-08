import { Container, Content, Ingredient } from "./styles.js";

import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Ingredients } from "../../components/Ingredients";
import { PurchaseCard } from "../../components/PurchaseCard";
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

export function Details() {
    const [ theme, toggleTheme ] = useDarkMode();
    const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;

    const [data, setData] = useState(null);
    const params = useParams();

    const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;
    
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
                                    
                                        <PurchaseCard />
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