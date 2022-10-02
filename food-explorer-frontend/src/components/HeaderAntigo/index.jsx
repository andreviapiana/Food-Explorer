import { Container, Logo, Search, Logout } from "./styles";
import { Input } from '../Input';
import { FiSearch } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { BsReceipt } from 'react-icons/bs';
import logo from '../../assets/logo.svg'
import { Button } from "../Button";
import { ButtonText } from "../ButtonText";

export function Header() {
    return (
        <Container>
            <main>
                <Logo>
                    <div className="logo">
                        <a href="#">
                            <img src={logo} alt="" />
                        </a>
                        <h1>food explorer</h1>
                    </div>
                </Logo>

                <ButtonText 
                    title=" Meus favoritos "
                />

                <Search>
                    <Input 
                        placeholder="Pesquisar pelo título" 
                        icon={FiSearch} 
                        />
                </Search>

                <Button
                    title='Meu pedido (0)'
                    icon={BsReceipt}
                    style={ { height: 56, width: 216 } }
                /> 

                <Logout>
                    <FiLogOut />
                </Logout>

            </main>
            
            

        </Container>
    );
}
