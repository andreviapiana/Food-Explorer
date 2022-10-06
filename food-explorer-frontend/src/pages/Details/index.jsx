import { Container, Content } from "./styles.js";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Ingredients } from "../../components/Ingredients";
import { PurchaseCard } from "../../components/PurchaseCard";
import { RiArrowLeftSLine } from 'react-icons/ri';
import Ravanello from '../../assets/Ravanello.png';

export function Details() {
  
  return(
    <Container>
      <Header />
        <Content>

          <ButtonText 
            title="Voltar" 
            icon={RiArrowLeftSLine} 
            style={ { fontWeight: 500 } }
          />

          <div className="content">

            <div className="dish">
              <img src={Ravanello} alt="Logo" />
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
  )
}