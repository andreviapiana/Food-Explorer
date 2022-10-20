import { Container, Content, Form, Avatar, Infos, Logo } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { FiUser, FiMail, FiLock, FiCamera, FiShoppingBag, FiHeart } from 'react-icons/fi';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import logo from '../../assets/logo.svg';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global'
import lightTheme from '../../styles/lightTheme';
import darkTheme from '../../styles/theme';

import { ThemeSlider} from "../../components/ThemeSlider";
import { useDarkMode } from '../../styles/useDarkMode';

export function Profile() {
    const [ theme, toggleTheme ] = useDarkMode();
    const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
                <Container>
                    <Header />
                        <Content>
                            
                            <ThemeSlider theme={theme} toggleTheme={toggleTheme}/>

                            <div className='card'>
                                <Form>
                                    <Avatar>
                                        <img 
                                            src={avatarPlaceholder} 
                                            alt="Foto do usuário" 
                                        />

                                        <label htmlFor="avatar">
                                            <FiCamera />

                                            <input
                                                id="avatar"
                                                type="file"
                                                accept="image/*"
                                            />

                                        </label>
                                    </Avatar>

                                    <Input 
                                        placeholder="Nome"
                                        type="text"
                                        icon={FiUser}
                                    />

                                    <Input 
                                        placeholder="E-mail"
                                        type="text"
                                        icon={FiMail}
                                    />

                                    <Input 
                                        placeholder="Senha atual"
                                        type="password"
                                        icon={FiLock}
                                    />

                                    <Input 
                                        placeholder="Nova senha"
                                        type="password"
                                        icon={FiLock}
                                    />

                                    <Button title="Salvar" />
                                </Form>

                                <Infos>
                                    <Logo>
                                        <div className="logo">
                                                <img src={logo} alt="" />
                                        </div>
                                    </Logo>
                                    
                                    <p>Olá <span>André</span>, acesse a opção desejada:</p>

                                    <Button 
                                        title="Meus pedidos"
                                        icon={FiShoppingBag}
                                    />

                                    <Button 
                                        title="Meus Favoritos"
                                        icon={FiHeart}
                                    />

                                    <Button 
                                        title="Contato"
                                        icon={FiMail}
                                        onClick={() => window.location = 'mailto:contato@foodexplorer.com'}
                                    />
                                </Infos>
                            </div>
                        </Content>
                    <Footer />
                </Container>
        </ThemeProvider>
    );
}