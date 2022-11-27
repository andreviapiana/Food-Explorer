import { Container } from "./styles";

import imagePlaceholder from '../../assets/image-not-found-icon.svg';

import aguardente from '../../assets/aguardente.png'
import alface from '../../assets/alface.png'
import ameixa from '../../assets/ameixa.png'
import amendoas from '../../assets/amendoas.png'
import aniz from '../../assets/aniz.png'
import aspargo from '../../assets/aspargo.png'
import bacon from '../../assets/bacon.png'
import batata from '../../assets/batata.png'
import cafe from '../../assets/cafe.png'
import camarao from '../../assets/camarao.png'
import canela from '../../assets/canela.png'
import cebola from '../../assets/cebola.png'
import claras from '../../assets/claras.png'
import coca from '../../assets/coca.png'
import damasco from '../../assets/damasco.png'
import farinha from '../../assets/farinha.png'
import filé from '../../assets/filet.png'
import limao from '../../assets/limao.png'
import maca from '../../assets/maca.png'
import manjericao from '../../assets/manjericao.png'
import maracuja from '../../assets/maracuja.png'
import massa from '../../assets/massa.png'
import morango from '../../assets/morango.png'
import negroni from '../../assets/negroni.png'
import paoNaan from '../../assets/pao_naan.png'
import pao from '../../assets/pao.png'
import pepino from '../../assets/pepino.png'
import pessego from '../../assets/pessego.png'
import pesto from '../../assets/pesto.png'
import presunto from '../../assets/presunto.png'
import queijo from '../../assets/queijo.png'
import rabanete from '../../assets/rabanete.png'
import rucula from '../../assets/rucula.png'
import sorvete from '../../assets/sorvete.png'
import tomate from '../../assets/tomate.png'
import whiskey from '../../assets/whiskey.png'

export function Ingredients({ ingredient }) {

    function fetchImageIngredient(name) {
        let ingredient = name.toLowerCase().trim()
        
        let ingredientImage;
        
        if (ingredient == "aguardente") {
            return ingredientImage = aguardente
        
        } else if (ingredient == "alface") {
            return ingredientImage = alface

        } else if (ingredient == "aspargo") {
            return ingredientImage = aspargo
        
        } else if (ingredient == "ameixa") {
            return ingredientImage = ameixa

        } else if (ingredient == "amêndoas") {
            return ingredientImage = amendoas

        } else if (ingredient == "aniz") {
            return ingredientImage = aniz 
            
        } else if (ingredient == "bacon") {
            return ingredientImage = bacon  

        } else if (ingredient == "batata") {
            return ingredientImage = batata  

        } else if (ingredient == "café") {
            return ingredientImage = cafe

        } else if (ingredient == "camarão") {
            return ingredientImage = camarao

        } else if (ingredient == "canela") {
            return ingredientImage = canela

        } else if (ingredient == "cebola") {
            return ingredientImage = cebola
        
        } else if (ingredient == "claras") {
            return ingredientImage = claras 

        } else if (ingredient == "coca-cola") {
            return ingredientImage = coca

        } else if (ingredient == "damasco") {
            return ingredientImage = damasco

        } else if (ingredient == "farinha") {
            return ingredientImage = farinha

        } else if (ingredient == "filé") {
            return ingredientImage = filé

        } else if (ingredient == "limão") {
            return ingredientImage = limao

        } else if (ingredient == "maçã") {
            return ingredientImage = maca

        } else if (ingredient == "manjericão") {
            return ingredientImage = manjericao

        } else if (ingredient == "maracujá") {
            return ingredientImage = maracuja

        } else if (ingredient == "massa") {
            return ingredientImage = massa

        } else if (ingredient == "morango") {
            return ingredientImage = morango

        } else if (ingredient == "negroni") {
            return ingredientImage = negroni

        } else if (ingredient == "pão") {
            return ingredientImage = pao

        } else if (ingredient == "pão naan") {
            return ingredientImage = paoNaan

        } else if (ingredient == "pepino") {
            return ingredientImage = pepino

        } else if (ingredient == "pêssego") {
            return ingredientImage = pessego

        } else if (ingredient == "pesto") {
            return ingredientImage = pesto

        } else if (ingredient == "presunto") {
            return ingredientImage = presunto

        } else if (ingredient == "queijo") {
            return ingredientImage = queijo  

        } else if (ingredient == "rabanete") {
            return ingredientImage = rabanete

        } else if (ingredient == "rucula") {
            return ingredientImage = rucula

        } else if (ingredient == "sorvete") {
            return ingredientImage = sorvete
        
        } else if (ingredient == "tomate") {
            return ingredientImage = tomate

        } else if (ingredient == "whiskey") {
            return ingredientImage = whiskey
    
        } else {
            return ingredientImage = imagePlaceholder
        }
    }

    let ingredientImage = fetchImageIngredient(ingredient)
    
    return(
        <Container>
            <div className="ingredients">
                <div>
                  <img src={ingredientImage} alt="Imagem do ingrediente" />
                  <p>{ingredient}</p>
                </div>
            </div>
        </Container>
    );
}