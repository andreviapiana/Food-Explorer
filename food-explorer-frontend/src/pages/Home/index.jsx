import { Container, Content, Banner } from "./styles.js";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Carousel } from "../../components/Carousel";

import background from "../../assets/Mask group99.png"

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global'
import lightTheme from '../../styles/lightTheme';
import darkTheme from '../../styles/theme';

import { ThemeSlider} from "../../components/ThemeSlider";
import { useDarkMode } from '../../styles/useDarkMode';

export function Home() {
    const [ theme, toggleTheme ] = useDarkMode();
    const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;
    
    return(
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
                <Container>
                    <Header />
                        <Content>

                            <ThemeSlider theme={theme} toggleTheme={toggleTheme}/>
                        
                            <Banner>
                                <img src={background} alt="Imagem de ingredientes" />
                                
                                <div className="banner">
                                    <div className="title">
                                        <h1>Sabores inigualáveis</h1>
                                        <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                                    </div>
                                </div>
                            </Banner>

                            <div>   
                                <p>Pratos principais</p>

                                <Carousel />

                                <p>Sobremesas</p>

                                <Carousel />

                                <p>Bebidas</p>

                                <Carousel />
                            </div>
                        </Content>
                    <Footer />
                </Container>
        </ThemeProvider>
    );
}