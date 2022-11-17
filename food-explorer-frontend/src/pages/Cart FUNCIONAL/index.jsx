import { Container, Content } from "./styles.js";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { OrderCard } from "../../components/OrderCard";
import { PaymentCard } from "../../components/PaymentCard";

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global'
import lightTheme from '../../styles/lightTheme';
import darkTheme from '../../styles/theme';

import { ThemeSlider} from "../../components/ThemeSlider";
import { useDarkMode } from '../../styles/useDarkMode';

import { useCart } from '../../hooks/cart';

export function Cart() {
    const [ theme, toggleTheme ] = useDarkMode();
    const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;

    const { cart, total, paymentAccept, setPaymentAccept, handleResetCart} = useCart();

    async function handleFinishPayment(cart) {
        setPaymentAccept(true);
        setLoading(true);
    
        const newCart = handleCreatedCart(cart)
        await api.post("/carts", newCart)
        setLoading(false);
      }
    

    return(
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
                <Container>
                    <Header />
                        <Content>

                            <ThemeSlider theme={theme} toggleTheme={toggleTheme}/>

                            <div className="content">
                            
                                <div className="order-wrapper">
                                    <h2>Meu pedido</h2>
                                    <div className="details">
                                        {
                                            cart && 
                                                cart.map(item => (
                                                    <OrderCard 
                                                        key={String(item.id)} 
                                                        data={item}
                                                    />
                                                ))
                                        }
                                    </div>

                                    <div className="total">
                                    <p>Total: R$<span>{total}</span></p>
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
    </ThemeProvider>
  );
}