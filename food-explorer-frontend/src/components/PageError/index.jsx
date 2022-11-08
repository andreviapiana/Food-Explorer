// Import de estilização
import { Container } from './styles'

// Import de componentes
import { ButtonText } from '../ButtonText'

// Imports estratégicos
import { useNavigate } from 'react-router-dom'
import imageError401 from '../../assets/401 Error Unauthorized.svg'

import { RiArrowLeftSLine } from 'react-icons/ri';
import { Link } from "react-router-dom";


export function PageError(){
    const navigate = useNavigate()

    function handleGoBack(){
        navigate("/")
    }

    return(
        <Container>
            <header>
                <Link to="/">
                    <ButtonText title="Voltar" icon={RiArrowLeftSLine} onClick={handleGoBack}/>
                </Link>
            </header>

            <div className="content">
                <img src={imageError401} alt="Imagem de erro 401: Acesso não autorizado" />

                <div>
                    <h2>Error 401</h2>
                    <span>Oops!</span>
                    <h3>Você não possuí autorização para acessar esta página!</h3>
                </div>
            </div>
        </Container>
    )
}