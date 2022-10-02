import { Container } from "./styles";

import { ButtonText } from "../ButtonText";
import dishImage from "../../assets/Mask group-3.png";

export function OrderCard() { 
    return(
        <Container>
            <div className="card">

                <img src={dishImage} alt="Imagem do Prato" />
                
                <div>
                    <p><strong>1x </strong>Torradas de Parma <span>R$25,97</span></p>
                    <ButtonText 
                        title="Excluir"
                    />
                </div>
                
            </div>
        </Container>
    )
}