import { Container } from "./styles";
import { useState } from "react";

import { ButtonText } from "../ButtonText";

import { FiMinus, FiPlus } from 'react-icons/fi';
import { BsReceipt } from 'react-icons/bs';
import { Button } from "../Button";

export function PurchaseCard() {
    const [counter, setCounter] = useState(1);

    //increase counter
    const increase = () => {
    setCounter(count => count + 1);
    };
 
    //decrease counter
    const decrease = () => {
        if (counter < 2) {
            alert("Erro: A quantidade mínima é 1 unidade")
            return;
        }
    setCounter(count => count - 1);
    };
  
    return(
        <Container>
                
                <div className="counter">
                    <ButtonText 
                        icon={FiMinus}
                        onClick={decrease}
                    />
                    <span>{counter.toString().padStart(2, '0')}</span>
                    <ButtonText 
                        icon={FiPlus}
                        onClick={increase}
                    />
                </div>

                <Button 
                    title="incluir"
                    icon={BsReceipt}
                    style={ { height: 56, width: 92, padding: '12px 4px' } }
                />
                

        </Container>
    )
}