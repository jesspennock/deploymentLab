const {rollbar} = require('./server')
let castle = document.querySelector("img")

const helloAlert = evt => {
    alert("Trains are the best!")
    rollbar.log('The helloAlert button was clicked')
}

castle.addEventListener('click', helloAlert)