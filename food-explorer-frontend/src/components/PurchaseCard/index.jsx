import { Container, Content } from "./styles";
import { useState, useEffect } from "react";
import { api } from '../../services/api';

import { Button } from "../Button";
import { ButtonText } from "../ButtonText";

import { FiMinus, FiPlus } from 'react-icons/fi';
import { BsReceipt } from 'react-icons/bs';

import { useAuth } from "../../hooks/auth";
import { Link, useParams } from "react-router-dom";

export function PurchaseCard() {
    const { user } = useAuth()
    const [counter, setCounter] = useState(1);

    const [data, setData] = useState(null);
    const params = useParams()

    //====increase counter====//
    const increase = () => {
    setCounter(count => count + 1);
    };
 
    //====decrease counter====//
    const decrease = () => {
        if (counter < 2) {
            alert("Erro: A quantidade mínima é 1 unidade")
            return;
        }
    setCounter(count => count - 1);
    };

    //====fetch dish (buscando os parâmetros do data)====//
    useEffect(() => {
        async function fetchDish(){
            const responseAPI = await api.get(`/dishes/${params.id}`)
            setData(responseAPI.data)
        }

        fetchDish()
    }, [])
  
    return(
        <Container>
            {
                user.isAdmin ?

                <Content>
                    {
                        data &&
                            <Link to={`/editdish/${data.id}`}>
                                <Button 
                                    title="editar prato"
                                    icon={BsReceipt}
                                />
                            </Link>
                    }
                </Content>
                
            :

                <Content>
                    <div className="counter">
                        <ButtonText 
                            icon={FiMinus}
                            onClick={decrease}
                        />
                        <span>{counter.toString().padStart(2, '0')}</span>
                        <ButtonText 
                            icon={FiPlus}
                            onClick={increase}
                        />
                    </div>

                    <Button 
                        title="incluir"
                        icon={BsReceipt}
                        style={ { height: 56, width: 92, padding: '12px 4px' } }
                    />
                </Content>
            }
        </Container>
    );
}