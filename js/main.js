import { getCharacter } from "./rickAndMortyAPI.js";
import { createCard } from "./createCards.js";

const getPrintData = async () => {
    let characters = await getCharacter() // Fetch (obtengo el resultado del array )
    let arrayCharacters = characters.results
    let divId = document.querySelector("#containerCard")

    arrayCharacters.forEach(characters => {
        let { image, name, status, species, gender, id } = characters
        divId.appendChild(createCard(image, name, status, species, gender, id))
    });
}
getPrintData()
