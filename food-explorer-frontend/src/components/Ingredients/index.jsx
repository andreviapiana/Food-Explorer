import { Container } from "./styles";

import alface from '../../assets/alface.png';
import tomate from '../../assets/tomate.png';
import rabanete from '../../assets/rabanete.png';
import pao from '../../assets/pao.png';

export function Ingredients() {
  
    return(
        <Container>
            <div className="ingredients">
                <div>
                  <img src={alface} alt="Logo" />
                  <p>Alface</p>
                </div>
                <div>
                  <img src={tomate} alt="Logo" />
                  <p>Tomate</p>
                </div>
                <div>
                  <img src={rabanete} alt="Logo" />
                  <p>Rabanete</p>
                </div>
                <div>
                  <img src={pao} alt="Logo" />
                  <p>Pão</p>
                </div>
              </div>
        </Container>
    );
}