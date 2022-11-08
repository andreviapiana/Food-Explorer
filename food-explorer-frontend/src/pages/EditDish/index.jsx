import { Container, Content, Form, Avatar } from "./styles.js";
import { api } from "../../services/api";

import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { IngredientsTag } from "../../components/IngredientsTag";
import { Textarea } from "../../components/Textarea";

import { RiArrowLeftSLine } from 'react-icons/ri';
import { FiUpload, FiCamera } from "react-icons/fi";

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global'
import lightTheme from '../../styles/lightTheme';
import darkTheme from '../../styles/theme';

import { ThemeSlider} from "../../components/ThemeSlider";
import { useDarkMode } from '../../styles/useDarkMode';

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { PageError } from "../../components/PageError";

export function EditDish() {
    const [ theme, toggleTheme ] = useDarkMode();
    const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;
    const navigate = useNavigate();
    
    const { user } = useAuth()
    const params = useParams();
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    
    
    const [data, setData] = useState(null);
    
    const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;
    const [image, setImage] = useState(imageURL);
    const [imageFile, setImageFile] = useState(null)

    console.log(imageURL)

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

    async function handleUpdateDish() {
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

        console.log(image)

        const formData = new FormData();
        formData.append("image", imageFile);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("price", price);

        ingredients.map(ingredient => (
        formData.append("ingredients", ingredient)
        ))

        await api
            .put(`/dishes/${params.id}`, formData)
            .then(alert("Prato atualizado com sucesso!"), navigate("/"))
            .catch((error) => {
                if (error.response) {
                  alert(error.response.data.message);
                } else {
                  alert("Erro ao atualizar o prato!");
                }
              });  
    }

    useEffect(() => {
        async function fetchDish() {
          const response = await api.get(`/dishes/${params.id}`);
          
          setData(response.data);
    
          const { title, description, category, price, ingredients } = response.data;
          setTitle(title);
          setDescription(description);
          setCategory(category);
          setPrice(price);
          setIngredients(ingredients.map(ingredient => ingredient.name));
        }
    
        fetchDish();
    }, [])

    async function handleRemoveDish() {
        const isConfirm = confirm("Tem certeza que deseja remover este item?");
    
        if(isConfirm) {
          await api.delete(`/dishes/${params.id}`)
          .then(() => {
            alert("Item removido com sucesso!");
            navigate("/");
        })
        }
    }

    function handleChangeImage(event) {
        const file = event.target.files[0];
        setImageFile(file);

        const imagePreview = URL.createObjectURL(file);
        setImage(imagePreview);
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
                        {
                        data &&

                        <Form>
                            <header>
                                <Link to="/">
                                    <ButtonText title="Voltar" icon={RiArrowLeftSLine}/>
                                </Link>
                                <h1>Editar prato</h1>
                            </header>

                            <div className="details">
                                <div className="dishImage">
                                    <p>Imagem do Prato</p>

                                    <Avatar>
                                            <img 
                                                src={imageURL} 
                                                alt="Foto do prato" 
                                            />

                                            <label htmlFor="image">
                                                <FiCamera />

                                                <input
                                                    id="image"
                                                    type="file"
                                                    name="image"
                                                    accept="image/*"
                                                    onChange={handleChangeImage}
                                                />

                                            </label>
                                        </Avatar>
                                </div>

                                <div className="dishDetails">
                                    <div className="dishName">
                                        <div className="dish">
                                            <p>Nome do prato</p>
                                            <Input
                                                placeholder="Ex.: Salada Caesar"
                                                type="text"
                                                value={title}
                                                onChange={e => setTitle(e.target.value)}
                                            />
                                        </div>

                                        <div className="dishCategory">
                                            <p>Categoria</p>

                                            <select value={category} onChange={e => setCategory(e.target.value)}>
                                                <option value="default" disabled>Selecione a categoria</option>
                                                <option value="dishes">Pratos</option>
                                                <option value="drinks">Bebidas</option>
                                                <option value="dessert">Sobremesas</option>
                                            </select> 
                                        </div>
                                    </div>

                                    <div className="dishIngredients">
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
                                        </div>

                                        <div className="price">
                                            <p>Preço</p>
                                            <Input
                                                placeholder="R$ 00,00"
                                                type="number"
                                                value={price} 
                                                onChange={e => setPrice(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            

                            <div className="textarea">
                                <p>Descrição</p>
                                <Textarea 
                                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                                    defaultValue={description} 
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>

                        </Form>
                            }

                        <div className="button">
                            <Button 
                                className="deleteButton"
                                title="Excluir prato"
                                onClick={handleRemoveDish}
                            />
                            <Button 
                                title="Salvar alterações"
                                onClick={handleUpdateDish} 
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