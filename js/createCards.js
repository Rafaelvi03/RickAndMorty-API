/*<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>/ */

const createCard = (img, name, status, alive, gender, id) => {
  let divCardOne = document.createElement("div");
  divCardOne.classList.add("col-sm-3", "border-2", "gap-3", "bg-danger");
  let principalDiv = document.createElement("div")
  principalDiv.classList.add("card", "mt-4")

  let divCard = document.createElement("div")
  divCard.classList.add("card")
  let imagen = document.createElement("img")
  imagen.classList.add("card-img-top")
  imagen.setAttribute("src", img)

  let divContainer = document.createElement("div")
  divContainer.classList.add("card-body")
  let nameParagraph = document.createElement("h5")
  nameParagraph.classList.add("card-tittle")
  nameParagraph.innerText = name

  let statusParagraph = document.createElement("p")
  statusParagraph.classList.add("card-text")
  statusParagraph.innerText = status

  let aliveParagraph = document.createElement("p")
  aliveParagraph.classList.add("card-text")
  aliveParagraph.innerText = alive

  let genderParagraph = document.createElement("p")
  genderParagraph.classList.add("card-text")
  genderParagraph.innerText = gender

  let btn = document.createElement("a");
  btn.href = `./detailCard.html?id=${id}`
  btn.classList.add("btn", "btn-primary");

  let contBtn = document.createTextNode("Ir a detalles")
  btn.appendChild(contBtn)


  divContainer.append(nameParagraph, statusParagraph, statusParagraph, aliveParagraph, genderParagraph, btn)
  divCard.append(imagen, divContainer)
  divCardOne.appendChild(divCard)
  return divCardOne;

}

const createCardDetail = (img, nam, stat, aliv, gende) => {
  let divCardOn = document.createElement("div");
  divCardOn.classList.add("col-sm-3", "border-2", "gap-3", "bg-danger");
  let principalDi = document.createElement("div")
  principalDi.classList.add("card", "mt-4")

  let divCar = document.createElement("div")
  divCar.classList.add("card")
  let image = document.createElement("img")
  image.classList.add("card-img-top")
  image.setAttribute("src", img)

  let divContaine = document.createElement("div")
  divContaine.classList.add("card-body")
  let nameParagrap = document.createElement("h5")
  nameParagrap.classList.add("card-tittle")
  nameParagrap.innerText = nam

  let statusParagrap = document.createElement("p")
  statusParagrap.classList.add("card-text")
  statusParagrap.innerText = stat

  let aliveParagrap = document.createElement("p")
  aliveParagrap.classList.add("card-text")
  aliveParagrap.innerText = aliv

  let genderParagrap = document.createElement("p")
  genderParagrap.classList.add("card-text")
  genderParagrap.innerText = gende


  divContaine.append(nameParagrap, statusParagrap, statusParagrap, aliveParagrap, genderParagrap)
  divCar.append(image, divContaine)
  divCardOn.appendChild(divCar)
  return divCardOn;

};



export { createCard, createCardDetail }
