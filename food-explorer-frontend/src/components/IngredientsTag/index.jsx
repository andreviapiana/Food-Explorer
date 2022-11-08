import { Container } from "./styles";

import { FiPlus, FiX } from "react-icons/fi";

export function IngredientsTag({ isNew, value, onClick, ...rest }) {
    return (
        <Container isNew={isNew}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
                list="ingredientName"
            />

            <datalist id="ingredientName">
                <option value="Alface">Alface</option>
                <option value="Ameixa">Ameixa</option>
                <option value="Amêndoas">Amêndoas</option>
                <option value="Aniz">Aniz</option>
                <option value="Café">Café</option>
                <option value="Camarão">Camarão</option>
                <option value="Canela">Canela</option>
                <option value="Cebola">Cebola</option>
                <option value="Claras">Claras</option>
                <option value="Damasco">Damasco</option>
                <option value="Farinha">Farinha</option>
                <option value="Limão">Limão</option>
                <option value="Maçã">Maçã</option>
                <option value="Maracujá">Maracujá</option>
                <option value="Massa">Massa</option>
                <option value="Pão Naan">Pão Naan</option>
                <option value="Pão">Pão</option>
                <option value="Pepino">Pepino</option>
                <option value="Pêssego">Pêssego</option>
                <option value="Pesto">Pesto</option>
                <option value="Presunto">Presunto</option>
                <option value="Rabanete">Rabanete</option>
                <option value="Rucula">Rucula</option>
                <option value="Tomate">Tomate</option>
                <option value="Whiskey">Whiskey</option>
            </datalist>

            <button
                type="button"
                onClick={onClick}
                className={isNew ? "button-add" : "button-delete"}
            >
                { isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    );
}
