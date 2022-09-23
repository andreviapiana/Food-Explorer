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

      <main>
        <Content>

          <ButtonText 
            title="Voltar" 
            icon={RiArrowLeftSLine} 
            style={ { fontWeight: 500 } }
          />

          <div>
            <img src={Ravanello} alt="Logo" />
            <div>

              <h1>Salada Ravanello</h1>

              <h3>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</h3>

              <Ingredients />
              
              <PurchaseCard />

            </div>
          </div>

        </Content>
      </main>
      <Footer />
    </Container>
  )
}