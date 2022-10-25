import { Container, Content } from "./styles.js";

import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Ingredients } from "../../components/Ingredients";
import { PurchaseCard } from "../../components/PurchaseCard";
import { RiArrowLeftSLine } from 'react-icons/ri';
import ravanello from '../../assets/Ravanello.png';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global'
import lightTheme from '../../styles/lightTheme';
import darkTheme from '../../styles/theme';

import { ThemeSlider} from "../../components/ThemeSlider";
import { useDarkMode } from '../../styles/useDarkMode';

export function Details() {
    const [ theme, toggleTheme ] = useDarkMode();
    const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;

    return(
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
                <Container>
                    <Header />
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
                                <img src={ravanello} alt="Logo" />
                                <div className="description">
                    
                                    <h1>Salada Ravanello</h1>
                    
                                    <h3>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</h3>
                    
                                    <Ingredients />
                    
                                    <div className="price">
                                    <h4>R$25,97</h4>
                                    
                                    <PurchaseCard />
                                    </div>
                    
                                </div>
                                </div>
                            </div>
                
                        </Content>
                    <Footer />
                </Container>
        </ThemeProvider>
    );
}