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

export function PaymentCard2(props) {

    const [game, setGame] = useState('start')

    const handleClick = (gameState) => {
        setGame(gameState)
    }


    // ==== Credit Card Inputs Config ==== //
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
    
    return(
        <Container>

            <div className="buttons">
            
                <button onClick={() => props.handleClick('playing')} className="pix" id="pix"><img src={logoPix} alt="Logo Pix" />PIX</button>
                
                <button className="credit" id="credit" ><img src={cardImg} alt="Logo Cartão de Crédito" />Crédito</button>

            </div>
            
            <Content>

            {(() => {
                switch (game) {
                case 'start':
                    return <div><p>Ae caraio</p></div>
                case 'playing':
                    return <div><p>Ae caraio2</p></div>
                case 'won':
                    return <Won handleClick={handleClick} />
                case 'lost':
                    return <Lost handleClick={handleClick} />
                default:
                    return null
                }
            })()}

                

                <div className="creditCard hide" id="creditCard">

                    <div className="inputs">
                        <p>Número do Cartão</p>
                        <Input
                            placeholder="0000 0000 0000 0000"
                            type="number"
                            id="num"
                            name="num"
                            value={num}
                            onChange={handleNumChange}
                            style={ { border: "1px solid white", borderRadius: 5 } }
                        />
                    </div>

                    <div className="validTo">
                        <div>
                            <p>Validade</p>
                            <Input
                                placeholder="04/25"
                                type="text"
                                maxLength="5"
                                style={ { border: "1px solid white", borderRadius: 5 } }
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
                                style={ { border: "1px solid white", borderRadius: 5 } }
                            />
                        </div>
                    </div>

                    <Button
                            title='Finalizar pagamento'
                            icon={BsReceipt}
                            style={ { height: 56 } }
                    /> 
                </div>

                <div className="approved hide" id="approved">
                    <img src={checkCircle} alt="Imagem de pagamento aprovado" />
                    <p>Pagamento aprovado</p>
                </div>

                

                <div className="qrCode hide" id="qrCode">
                    <div className="qr">
                        <img src={qrCode} alt="Imagem do QRCode" />
                    </div>

                    <Button
                        title='Confirmar pagamento'
                        icon={BsReceipt}
                        style={ { height: 56 } }
                    /> 
                </div>

                <div className="clock hide" id="clock">
                    <div className="clk">
                        <img src={clock} alt="Imagem do QRCode" />
                    </div>
                    <p>Aguardando pagamento</p>
                </div>

                <div className="delivered hide" id="delivered">
                    <img src={knife} alt="Imagem de uma faca e um garfo" />
                    <p>Pedido entregue!</p>
                </div>
            
            </Content>

        </Container>
    )
}