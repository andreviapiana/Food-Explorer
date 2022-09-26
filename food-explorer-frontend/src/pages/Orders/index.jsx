import { Container, Content, Table } from "./styles.js";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Orders() {
  
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <h1>Pedidos</h1>

          <Table>

            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Código</th>
                    <th>Detalhamento</th>
                    <th>Data e hora</th>
                  </tr>
                </thead>
                <tbody className="order">
                  <tr>
                    <td>
                        <select>
                            <option value="pending">🔴 Pendente</option>
                            <option value="preparing">🟡 Preparando</option>
                            <option value="delivered">🟢 Entregue</option>
                        </select> 
                    </td>
                    <td >00000004</td>
                    <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                    <td>20/05 às 18h00</td>
                  </tr>
                  <tr>
                    <td>
                        <select>
                            <option value="pending">🔴 Pendente</option>
                            <option value="preparing">🟡 Preparando</option>
                            <option value="delivered">🟢 Entregue</option>
                        </select> 
                    </td>
                    <td>00000004</td>
                    <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                    <td>20/05 às 18h00</td>
                  </tr>
                  <tr>
                    <td>
                        <select>
                            <option value="pending">🔴 Pendente</option>
                            <option value="preparing">🟡 Preparando</option>
                            <option value="delivered">🟢 Entregue</option>
                        </select> 
                    </td>
                    <td>00000004</td>
                    <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                    <td>20/05 às 18h00</td>
                  </tr>
                  <tr>
                    <td>
                        <select>
                            <option value="pending">🔴 Pendente</option>
                            <option value="preparing">🟡 Preparando</option>
                            <option value="delivered">🟢 Entregue</option>
                        </select> 
                    </td>
                    <td>00000004</td>
                    <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                    <td>20/05 às 18h00</td>
                  </tr>
                  <tr>
                    <td>
                        <select>
                            <option value="pending">🔴 Pendente</option>
                            <option value="preparing">🟡 Preparando</option>
                            <option value="delivered">🟢 Entregue</option>
                        </select> 
                    </td>
                    <td>00000004</td>
                    <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                    <td>20/05 às 18h00</td>
                  </tr>
                  <tr>
                    <td>
                        <select>
                            <option value="pending">🔴 Pendente</option>
                            <option value="preparing">🟡 Preparando</option>
                            <option value="delivered">🟢 Entregue</option>
                        </select> 
                    </td>
                    <td>00000004</td>
                    <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                    <td>20/05 às 18h00</td>
                  </tr>
                  <tr>
                    <td>
                        <select>
                            <option value="pending">🔴 Pendente</option>
                            <option value="preparing">🟡 Preparando</option>
                            <option value="delivered">🟢 Entregue</option>
                        </select> 
                    </td>
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