// Invoking lambda to get and update the count for the amount of visitors I have had.
fetch("https://900kkpx3k1.execute-api.us-east-1.amazonaws.com/Deploy/readvisitors")
                .then(obj => obj.json())
                .then(data => document.getElementById('counter').innerText = data.body.tester['N']);

// Toggles the Hamburger menu for nav.
const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelectorAll(".nav_link")
navToggle.addEventListener('click', () => {
    document.body.classList.toggle("nav-open")
})
navLinks.forEach(link =>{
    link.addEventListener('click', ()=> {
        document.body.classList.remove('nav-open')
    })
})