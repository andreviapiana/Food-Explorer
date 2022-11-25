// Styling Imports
import { Container, Form, Logo } from "./styles";

// Theme Import
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global'
import darkTheme from '../../styles/theme';

// Components Imports
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

// Strategic Imports (API and others)
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const { signIn, loading } = useAuth();
    
    function handleSignIn() {
        signIn({ email, password });
    }

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
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        
                        <div className="inputs">
                            <p>Senha</p>
                            <Input
                                placeholder="No mínimo 6 caracteres"
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <Button 
                            title={loading ? "Entrando" : "Entrar"}
                            onClick={handleSignIn} 
                            disabled={loading}
                        />

                        <Link to="/register">
                            Criar conta
                        </Link>

                    </Form>
                </Container>
        </ThemeProvider>
    );
}
