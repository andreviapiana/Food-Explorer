import { Container, Content, Form } from "./styles.js";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { IngredientsTag } from "../../components/IngredientsTag";
import { Textarea } from "../../components/Textarea";
import { RiArrowLeftSLine } from 'react-icons/ri';

export function CreateDish() {
  
  return(
    <Container>
      <Header />

      <main>
        <Content>

        <Form>
            <header>
                <ButtonText title="Voltar" icon={RiArrowLeftSLine}/>
                <h1>Editar prato</h1>
            </header>

            <div className="details">
                <div className="dishImage">
                    <p>Imagem do prato</p>
                    <Input
                        placeholder="Selecione Imagem"
                        type="text"
                        style={ { border: "1px solid white", borderRadius: 5 } }
                    />
                </div>
                
                <div className="dish">
                    <p>Nome do prato</p>
                    <Input
                        placeholder="Ex.: Salada Ceasar"
                        type="text"
                        style={ { border: "1px solid white", borderRadius: 5 } }
                    />
                </div>
            </div>

            <div className="ingredientsTag">
                <div>
                    <p>Ingredientes</p>
                    <div className="ingredients">
                        <IngredientsTag 
                            value="Pão naan" 
                        />
                        <IngredientsTag 
                            value="Pão naan" 
                        />
                        <IngredientsTag 
                            value="Pão naan" 
                        />
                        <IngredientsTag 
                            isNew 
                            placeholder="Adicionar" 
                        />
                    </div>
                </div>
                <div className="price">
                    <p>Preço</p>
                    <Input
                        placeholder="R$ 00,00"
                        type="number"
                        style={ { border: "1px solid white", borderRadius: 5 } }
                    />
                </div>
            </div>

            <div className="textarea">
                <p>Preço</p>
                <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
            </div>
          

        </Form>

        <div className="buttons">
            <Button 
                title="Salvar alterações"
                style={ { width: '31.54%' } }
            />
        </div>

    </Content>
      </main>
      <Footer />
    </Container>
  )
}