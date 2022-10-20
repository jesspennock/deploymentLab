let castle = document.querySelector("img")

const helloAlert = evt => {
    alert("Trains are the best!")
    axios.get('/trains')
}

castle.addEventListener('click', helloAlert)