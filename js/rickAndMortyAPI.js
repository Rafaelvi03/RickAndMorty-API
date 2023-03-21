const URLAPI = "https://rickandmortyapi.com/api/character/"
let getCharacter = async () => {
    let response = await fetch(URLAPI)
    let data = await response.json()
    return data;

}

const getCharacterId = async (id) => {
    let response = await fetch(`${URLAPI}${id}`)
    let data = await response.json()
    return data
}


export { getCharacter, getCharacterId }
