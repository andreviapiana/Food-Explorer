import { Container, Content } from "./styles";
import { useState } from 'react';

import { Input } from "../Input";
import { Button } from "../Button";

import { BsReceipt } from 'react-icons/bs';
import logoPix from '../../assets/pix.svg';
import cardImg from '../../assets/CreditCard.svg';
import qrCode from '../../assets/qrcode.svg';
import clock from '../../assets/clock.svg';
import checkCircle from '../../assets/CheckCircle.svg';
import knife from '../../assets/knife.svg';
import cart from '../../assets/cart.svg';

import { useCart } from '../../hooks/cart';
import { useAuth } from "../../hooks/auth";

export function PaymentCard() { 
    const { handleResetCart} = useCart();
    const { user } = useAuth()

    // CREDITCARD //
    const [num, setNum] = useState('');
    const [cvc, setCvc] = useState('');

    const handleNumChange = event => {
        const limit = 16;
        setNum(event.target.value.slice(0, limit));
    };

    const handleCvcChange = event => {
        const limit = 3;
        setCvc(event.target.value.slice(0, limit));
    };

    //BUTTONS//
    const [isPixVisible, setIsPixVisible] = useState(false);
    const [isCreditVisible, setIsCreditVisible] = useState(false);
    const [isCartVisible, setIsCartVisible] = useState(true);
    const [pixActive, setPixActive] = useState(false);
    const [creditActive, setCreditActive] = useState(false);
    const [isClockActive, setIsClockActive] = useState(false);
    const [isApprovedActive, setIsApprovedActive] = useState(false);

    const handlePix = () => {
        setIsPixVisible(true);
        setIsCreditVisible(false);
        setIsCartVisible(false);
        setPixActive(true);
        setCreditActive(false);
    };
    
    const handleCredit = () => {
        setIsCreditVisible(true);
        setIsPixVisible(false);
        setIsCartVisible(false);
        setCreditActive(true);
        setPixActive(false);
    };

    const [disabledButton, setDisabledButton] = useState(false);
    const btn = document.getElementById('finishPaymentButton');
    const disableButton = () => {
        setDisabledButton(true);

        setIsCreditVisible(false);
        setIsPixVisible(false);
        
        setIsClockActive(true);
        setIsApprovedActive(false);
        setTimeout(() => {    
            // 👇️ Elementos que vão ser alterados
            setIsClockActive(false);
            setIsApprovedActive(true);
    
            // 👇️ Delay para a alteração
        }, 5000);
    }

    return(
        <Container>

            <div className="buttons">
            
                <button className={pixActive === true ? 'active' : ''} id="pix" disabled={disabledButton} onClick={handlePix}><img src={logoPix} alt="Logo Pix"/>PIX</button>
                
                <button className={creditActive === true ? 'active' : ''} id="credit" disabled={disabledButton} onClick={handleCredit}><img src={cardImg} alt="Logo Cartão de Crédito" />Crédito</button>

            </div>
            
            <Content>

                {isCartVisible &&
                    <div className="cart" id="cart">
                        <img src={cart} alt="Imagem do carrinho de compras" />
                        <p>Selecione uma forma de pagamento acima!</p>
                    </div>
                }

                {isPixVisible &&
                    <div className="paymentPix" id="paymentPix">
                        <div className="qr">
                            <img src={qrCode} alt="Imagem do QRCode" />
                        </div>

                        <Button
                            title='Finalizar pagamento'
                            id="finishPaymentButton"
                            icon={BsReceipt}
                            style={ { height: 56 } }
                            className="finishPaymentButton"
                            onClick={()=>{disableButton(); handleResetCart(user.id)}}
                        /> 
                    </div>
                }

                {isCreditVisible &&
                    <div className="paymentCredit" id="paymentCredit">

                        <div className="inputs">
                            <p>Número do Cartão</p>
                            <Input
                                placeholder="0000 0000 0000 0000"
                                type="number"
                                id="num"
                                name="num"
                                value={num}
                                onChange={handleNumChange}
                            />
                        </div>

                        <div className="validTo">
                            <div>
                                <p>Validade</p>
                                <Input
                                    placeholder="04/25"
                                    type="text"
                                    maxLength="5"
                                />
                            </div>

                            <div>
                                <p>CVC</p>
                                <Input
                                    placeholder="***"
                                    type="number"
                                    id="cvc"
                                    name="cvc"
                                    value={cvc}
                                    onChange={handleCvcChange}
                                />
                            </div>
                        </div>

                        <Button
                                title='Finalizar pagamento'
                                icon={BsReceipt}
                                style={ { height: 56 } }
                                className="finishPaymentButton"
                                onClick={disableButton}
                        /> 
                    </div>
                }

                {isClockActive &&
                    <div className="clock" id="clock">
                        <div className="clk">
                            <img src={clock} alt="Imagem do QRCode" />
                        </div>
                        <p>Aguarde: Estamos processando o seu pagamento</p>
                    </div>
                }

                {isApprovedActive &&
                    <div className="approved" id="approved">
                        <img src={checkCircle} alt="Imagem de pagamento aprovado" />
                        <p>Oba! Pagamento aprovado! Em breve faremos a entrega!</p>
                    </div>
                }

                <div className="delivered hide" id="delivered">
                    <img src={knife} alt="Imagem de uma faca e um garfo" />
                    <p>O pedido foi entregue!</p>
                </div>
            
            </Content>

        </Container>
    )
}