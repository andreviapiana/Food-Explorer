import { Container, Logo, Search, Logout } from "./styles";
import { Input } from '../../components/Input';
import { FiSearch } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { BsReceipt } from 'react-icons/bs';
import { Button } from "../Button";
import { ButtonText } from "../../components/ButtonText";

export function Header() {
    return (
        <Container>
            <main>
                <Logo>
                    <div className="logo">
                        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
                        </svg>
                        <h1>food explorer</h1>
                    </div>
                </Logo>

                <ButtonText 
                    title=" Meus favoritos "
                />

                <Search>
                    <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
                </Search>

                <Button
                    title='Meu pedido (0)'
                    icon={BsReceipt}
                    style={ { height: 56 } }
                /> 

                <Logout>
                    <FiLogOut />
                </Logout>

            </main>
            
            

        </Container>
    );
}
