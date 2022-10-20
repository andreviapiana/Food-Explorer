import { Container, Form, Logo } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global'
import darkTheme from '../../styles/theme';

export function SignIn() {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
                <Container>
                    
                    <Logo>
                        <div className="logo">
                            <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
                            </svg>
                            <h1>food explorer</h1>
                        </div>
                    </Logo>
                    
                    <Form>
                        <h2>Faça login</h2>

                        <div className="inputs">
                            <p>Email</p>
                            <Input
                                placeholder="Exemplo: exemplo@exemplo.com.br"
                                type="text"
                                style={ { border: "1px solid white", borderRadius: 5 } }
                            />
                        </div>
                        
                        <div className="inputs">
                            <p>Senha</p>
                            <Input
                                placeholder="No mínimo 6 caracteres"
                                type="password"
                                style={ { border: "1px solid white", borderRadius: 5 } }
                            />
                        </div>

                        <Button title="Entrar" />

                        <a href="#">
                            Criar conta
                        </a>
                    </Form>
                </Container>
        </ThemeProvider>
    );
}
