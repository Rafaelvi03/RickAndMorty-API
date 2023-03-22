import { getCharacterId } from "./rickAndMortyAPI.js";
import { createCardDetail } from "./createCards.js";

let urlParame = new URLSearchParams(window.location.search)
let characterId = urlParame.get("id")

const selectUser = async () => {
    let character = await getCharacterId(characterId)
    return character;
}

const getPrintData = async () => {
    let user = await selectUser()
    let response = document.querySelector("#detailCard")
    let { image, name, status, species, gender, } = user
    response.appendChild(createCardDetail(image, name, status, species, gender))
}
getPrintData()  