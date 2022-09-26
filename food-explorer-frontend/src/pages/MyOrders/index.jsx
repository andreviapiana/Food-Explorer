import { Container, Content, Table } from "./styles.js";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function MyOrders() {
  
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <h1>Pedidos</h1>

          <Table>

            <div class="table">
              <table>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Código</th>
                    <th>Detalhamento</th>
                    <th>Data e hora</th>
                  </tr>
                </thead>
                <tbody class="order">
                  <tr>
                    <td><span class="pending">🔴</span> Pendente</td>
                    <td>00000004</td>
                    <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                    <td>20/05 às 18h00</td>
                  </tr>
                  <tr>
                    <td><span class="preparing">🟡</span> Preparando</td>
                    <td>00000004</td>
                    <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                    <td>20/05 às 18h00</td>
                  </tr>
                  <tr>
                    <td><span class="delivered">🟢</span> Entregue</td>
                    <td>00000004</td>
                    <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                    <td>20/05 às 18h00</td>
                  </tr>
                  <tr>
                    <td><span class="delivered">🟢</span> Entregue</td>
                    <td>00000004</td>
                    <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                    <td>20/05 às 18h00</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </Table>
        </Content>
      </main>
      <Footer />
    </Container>
  )
}