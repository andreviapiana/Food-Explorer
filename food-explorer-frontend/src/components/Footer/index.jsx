import { Container, Logo } from "./styles";
import logo_gray from '../../assets/logo_gray.svg'

export function Footer() {
    return (
        <Container>
            <main>
                <Logo>
                    <div className="logo">    
                        <img src={logo_gray} alt="" />
                        <h1>food explorer</h1>
                    </div>
                </Logo>

                <p>
                    © 2022 - Todos os direitos reservados.
                </p>

            </main>

        </Container>
    );
}
