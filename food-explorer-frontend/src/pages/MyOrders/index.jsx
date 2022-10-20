import { Container, Content, Table } from "./styles.js";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global'
import lightTheme from '../../styles/lightTheme';
import darkTheme from '../../styles/theme';

import { ThemeSlider} from "../../components/ThemeSlider";
import { useDarkMode } from '../../styles/useDarkMode';

export function MyOrders() {
    const [ theme, toggleTheme ] = useDarkMode();
    const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;

    return(
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
                <Container>
                    <Header />
                        <Content>

                            <ThemeSlider theme={theme} toggleTheme={toggleTheme}/>
                            
                            <h1>Pedidos</h1>

                            <Table>
                    
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
                                        <td><span className="pending">🔴</span> Pendente</td>
                                        <td>00000004</td>
                                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                                        <td>20/05 às 18h00</td>
                                    </tr>
                                    <tr>
                                        <td><span className="preparing">🟡</span> Preparando</td>
                                        <td>00000004</td>
                                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                                        <td>20/05 às 18h00</td>
                                    </tr>
                                    <tr>
                                        <td><span className="delivered">🟢</span> Entregue</td>
                                        <td>00000004</td>
                                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                                        <td>20/05 às 18h00</td>
                                    </tr>
                                    <tr>
                                        <td><span className="delivered">🟢</span> Entregue</td>
                                        <td>00000004</td>
                                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                                        <td>20/05 às 18h00</td>
                                    </tr>
                                    <tr>
                                        <td><span className="delivered">🟢</span> Entregue</td>
                                        <td>00000004</td>
                                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                                        <td>20/05 às 18h00</td>
                                    </tr>
                                    <tr>
                                        <td><span className="delivered">🟢</span> Entregue</td>
                                        <td>00000004</td>
                                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                                        <td>20/05 às 18h00</td>
                                    </tr>
                                    <tr>
                                        <td><span className="delivered">🟢</span> Entregue</td>
                                        <td>00000004</td>
                                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                                        <td>20/05 às 18h00</td>
                                    </tr>
                                    <tr>
                                        <td><span className="delivered">🟢</span> Entregue</td>
                                        <td>00000004</td>
                                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                                        <td>20/05 às 18h00</td>
                                    </tr>
                                    <tr>
                                        <td><span className="delivered">🟢</span> Entregue</td>
                                        <td>00000004</td>
                                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                                        <td>20/05 às 18h00</td>
                                    </tr>
                                    <tr>
                                        <td><span className="delivered">🟢</span> Entregue</td>
                                        <td>00000004</td>
                                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                                        <td>20/05 às 18h00</td>
                                    </tr>
                                    <tr>
                                        <td><span className="delivered">🟢</span> Entregue</td>
                                        <td>00000004</td>
                                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                                        <td>20/05 às 18h00</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Table>
                        </Content>
                    <Footer />
                </Container>
        </ThemeProvider>
    );
}