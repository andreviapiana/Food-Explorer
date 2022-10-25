import { Container, Content, Logo, Search, Logout, Button, Profile } from "./styles";

import { Link } from "react-router-dom";

import { FiSearch, FiLogOut, FiUser } from 'react-icons/fi';
import { BsReceipt } from 'react-icons/bs';

import logo from '../../assets/logo.svg';

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
                        <Link to="/">
                            <img src={logo} alt="" />
                            <h1>food explorer</h1>
                        </Link>
                    </div>
                </Logo>

                <div className="hamburger" id="hamburger" onClick={mobileMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <div className="nav-menu" id="nav-menu">

                    <Search>
                        <label>
                            <FiSearch size={24}/>
                            <input type="text" placeholder="Busque pelas opções de pratos"/>
                        </label>
                    </Search>

                    <Link to="/cart">
                        <Button
                            type='button'
                        >
                            <BsReceipt size={24}/>
                            Meu pedido (0)
                        </Button>
                    </Link>

                    <Profile to="/profile">
                        <FiUser />
                    </Profile>

                    <Logout>
                        <FiLogOut />
                    </Logout>
                </div>

            </Content>
        </Container>
    );
}
