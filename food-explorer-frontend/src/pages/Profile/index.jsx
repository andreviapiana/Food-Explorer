import { Container, Content, Form, Avatar, Infos, Logo } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { FiUser, FiMail, FiLock, FiCamera, FiShoppingBag, FiHeart } from 'react-icons/fi';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import logo from '../../assets/logo.svg';

export function Profile() {

    return (
        <Container>
            <Header />
                <Content>
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
    );
}