import { Container, Content, Logo, Search, Logout, Button } from "./styles";

import { Input } from '../Input';
import { ButtonText } from "../ButtonText";

import { FiSearch } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import receipt from '../../assets/receipt.svg';

export function Header() {
    
    function mobileMenu() {
        document.getElementById('hamburger').classList.toggle('active')
        document.getElementById('nav-menu').classList.toggle('active')
    }
    
    return (
        <Container>
            <Content>
                <Logo>
                    <div className="logo">
                        <a href="#">
                            <img src={logo} alt="" />
                        </a>
                        <h1>food explorer</h1>
                    </div>
                </Logo>

                <div className="hamburger" id="hamburger" onClick={mobileMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <div className="nav-menu" id="nav-menu">

                    <ButtonText 
                        title=" Meus favoritos "
                    />

                    <Search>
                        <Input 
                            placeholder="Busque pelas opções de pratos" 
                            icon={FiSearch} 
                            />
                    </Search>

                    <Button
                        type='button'
                    >
                        <img src={receipt} alt="receipt"/>
                        Meu pedido (0)
                    </Button>

                    <Logout>
                        <FiLogOut />
                    </Logout>
                </div>

            </Content>
        </Container>
    );
}
