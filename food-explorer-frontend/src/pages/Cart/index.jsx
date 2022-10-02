import { Container, Content } from "./styles.js";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { OrderCard } from "../../components/OrderCard";
import { PaymentCard } from "../../components/PaymentCard";


export function Cart() {
  return(
    <Container>
      <Header />
        <Content>

            <div className="content">
              
              <div className="order-wrapper">
                <h2>Meu pedido</h2>
                <div className="details">
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                </div>

                <div className="total">
                  <p>Total: R$103,88</p>
                </div>
              </div>

              <div className="payment-wrapper">
                <h2>Pagamento</h2>

                  <div>
                    <PaymentCard />
                  </div>
              </div>
            </div>
        </Content>
      <Footer />
    </Container>
  )
}