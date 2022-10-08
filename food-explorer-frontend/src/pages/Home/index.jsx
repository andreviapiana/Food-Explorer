import { Container, Content, Banner } from "./styles.js";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import background from "../../assets/Mask group.png"
import { Card } from "../../components/Card/index.jsx";
import { Carousel } from "../../components/Carousel/index.jsx";

export function Home() {
  
    return(
        <Container>
            <Header />
                <Content>
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
    )
}