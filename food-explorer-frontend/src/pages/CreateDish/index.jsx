// Styling Imports
import { Container, Content, Form } from "./styles.js";

// Theme Swap Imports
import { ThemeProvider } from 'styled-components';
import { ThemeSlider} from "../../components/ThemeSlider";
import { useDarkMode } from '../../styles/useDarkMode';
import GlobalStyles from '../../styles/global'
import lightTheme from '../../styles/lightTheme';
import darkTheme from '../../styles/theme';

// Components Imports
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { IngredientsTag } from "../../components/IngredientsTag";
import { Textarea } from "../../components/Textarea";
import { PageError } from "../../components/PageError";

// Strategic Imports (API and others)
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Image Imports
import { RiArrowLeftSLine } from 'react-icons/ri';
import { FiUpload } from "react-icons/fi";

export function CreateDish( ) {
    const [ theme, toggleTheme ] = useDarkMode();
    const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;
    
    const { user } = useAuth()
    
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    // Add and Remove Ingredients
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    function handleAddIngredient() {
        if (newIngredient.length < 3) {
            return alert("Erro: Você está tentando inserir um nome de ingrediente inválido!");
        } else {
            setIngredients(prevState => [...prevState, newIngredient]);
            setNewIngredient("");
        }
    }

    function handleRemoveIngredient(deleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);

    // Create New Dish Function
    async function handleNewDish() {
        if (!image) {
            return alert("Erro: Você não inseriu uma imagem para o prato!");
        }
        
        if (!title) {
            return alert("Erro: Você não informou o nome do prato!");
        }

        if (ingredients.length < 1) {
            return alert("Erro: Adicione pelo menos um ingrediente!")
        }

        if (newIngredient) {
            return alert("Erro: Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique no sinal de + para adicionar!");
        }

        if (!category) {
            return alert("Erro: Você não selecionou a categoria do prato!");
        }

        if (!price) {
            return alert("Erro: Você não informou o preço do prato!");
        }

        if (!description) {
            return alert("Erro: Você não informou uma descrição para o prato!");
        }

        setLoading(true);

        const formData = new FormData();
        formData.append("image", image);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("price", price);

        ingredients.map(ingredient => (
            formData.append("ingredients", ingredient)
        ))

        await api
            .post("/dishes", formData)
            .then(alert("Prato adicionado com sucesso!"), navigate("/"))
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Erro ao criar o prato!");
                }
            });  

        setLoading(false);
    }
      
    return(
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
                <Container>
                    <Header />

                        {
                            user.isAdmin ?

                                <Content>

                                <ThemeSlider theme={theme} toggleTheme={toggleTheme}/>

                                <Form>
                                    <header>
                                        <Link to="/">
                                            <ButtonText title="Voltar" icon={RiArrowLeftSLine}/>
                                        </Link>
                                        <h1>Criar prato</h1>
                                    </header>

                                    <div className="details">
                                        <div className="dishImage">
                                            <p>Imagem do Prato</p>
                                            <label htmlFor="image">
                                                <FiUpload size={24}/> 
                                                Selecione imagem 
                                            </label>
                                            <Input 
                                                type="file"
                                                id="image" 
                                                name="image"
                                                accept="image/*" 
                                                onChange={e => setImage(e.target.files[0])}
                                            />
                                        </div>
                                        
                                        <div className="dish">
                                            <p>Nome do prato</p>
                                            <Input
                                                placeholder="Ex.: Salada Caesar"
                                                type="text"
                                                onChange={e => setTitle(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="ingredientsTag">
                                        <div>
                                            <p>Ingredientes</p>
                                            <div className="ingredients">
                                                {
                                                    ingredients.map((ingredient, index) => (
                                                        <IngredientsTag 
                                                            key={String(index)} 
                                                            value={ingredient} 
                                                            onClick={() => handleRemoveIngredient(ingredient) }
                                                            
                                                        />
                                                    ))
                                                }

                                                <IngredientsTag 
                                                    isNew 
                                                    placeholder="Adicionar" 
                                                    onChange={e => setNewIngredient(e.target.value)}
                                                    value={newIngredient}
                                                    onClick={handleAddIngredient}
                                                />
                                            </div>
                                        </div>

                                        <div className="dishCategory">
                                            <p>Categoria</p>

                                            <select defaultValue={'default'} onChange={e => setCategory(e.target.value)}>
                                                <option value="default" disabled>Selecione a categoria</option>
                                                <option value="dishes">Pratos</option>
                                                <option value="drinks">Bebidas</option>
                                                <option value="dessert">Sobremesas</option>
                                            </select> 
                                        </div>

                                        <div className="price">
                                            <p>Preço</p>
                                            <Input
                                                placeholder="R$ 00,00"
                                                type="number"
                                                onChange={e => setPrice(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="textarea">
                                        <p>Descrição</p>
                                        <Textarea 
                                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                                            onChange={e => setDescription(e.target.value)}
                                        />
                                    </div>

                                </Form>

                                <div className="button">
                                    <Button 
                                        title={loading ? "Salvando alterações" : "Salvar alterações"}
                                        onClick={handleNewDish} 
                                        disabled={loading}
                                    />
                                </div>

                                </Content>

                            :

                                <PageError />
                        }
                    
                        <Footer />
                </Container>
        </ThemeProvider>
    );
}