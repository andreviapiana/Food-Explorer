import { Container, Content, Form, Avatar, Infos, Logo } from './styles';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Link } from "react-router-dom";

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';

import { FiUser, FiMail, FiLock, FiCamera, FiShoppingBag, FiHeart, FiPlus } from 'react-icons/fi';

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

    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }

        const userUpdated = Object.assign(user, updated);

        await updateProfile({ user: userUpdated, avatarFile });
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

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
                                            src={avatar} 
                                            alt="Foto do usuário" 
                                        />

                                        <label htmlFor="avatar">
                                            <FiCamera />

                                            <input
                                                id="avatar"
                                                type="file"
                                                accept="image/*"
                                                onChange={handleChangeAvatar}
                                            />

                                        </label>
                                    </Avatar>

                                    <div className='inputs'>
                                        <label>
                                            <FiUser size={20}/>
                                            <input 
                                                type="text" 
                                                placeholder="Nome"
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                            />
                                        </label>

                                        <label>
                                            <FiMail size={20}/>
                                            <input 
                                                type="text" 
                                                placeholder="E-mail"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                        </label>

                                        <label>
                                            <FiLock size={20}/>
                                            <input 
                                                type="password" 
                                                placeholder="Senha atual"
                                                onChange={e => setPasswordOld(e.target.value)}
                                            />
                                        </label>

                                        <label>
                                            <FiLock size={20}/>
                                            <input 
                                                type="password" 
                                                placeholder="Nova senha"
                                                onChange={e => setPasswordNew(e.target.value)}
                                            />
                                        </label>
                                    </div>

                                    <Button 
                                        title="Salvar"
                                        onClick={handleUpdate} 
                                    />
                                </Form>

                                {
                                    user.isAdmin ?

                                        <Infos>
                                            <Logo>
                                                <div className="logo">
                                                        <img src={logo} alt="" />
                                                </div>
                                            </Logo>
                                            
                                            <p>Olá <span>{name}</span>, acesse a opção desejada:</p>

                                            <Link to="/orders">
                                                <Button
                                                    title="Ver pedidos"
                                                    icon={FiShoppingBag}
                                                />
                                            </Link>

                                            <Link to="/createdish">
                                                <Button 
                                                    title="Criar novo Prato"
                                                    icon={FiPlus}
                                                />
                                            </Link>
                                        </Infos>

                                    :

                                        <Infos>
                                            <Logo>
                                                <div className="logo">
                                                        <img src={logo} alt="" />
                                                </div>
                                            </Logo>
                                            
                                            <p>Olá <span>{name}</span>, acesse a opção desejada:</p>

                                            <Link to="/myorders">
                                                <Button
                                                    title="Meus pedidos"
                                                    icon={FiShoppingBag}
                                                />
                                            </Link>

                                            <Button
                                                title="Contato"
                                                icon={FiMail}
                                                onClick={() => window.location = 'mailto:contato@foodexplorer.com'}
                                            />
                                        </Infos>
                                }
                            </div>
                        </Content>
                    <Footer />
                </Container>
        </ThemeProvider>
    );
}