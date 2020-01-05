let element = document.querySelector('main#main')
element.remove()

let name = 'Kymmi'
let newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = `${name} is the champion.`
