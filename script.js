const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
const btn_search = document.querySelector('#search')

btn_toggle.onclick = () => {
  const name = author.innerHTML
  let number = /\d+/
  author.innerHTML = name.match(number)-length.innerHTML
}



// more codes for Search and Reset buttons here
