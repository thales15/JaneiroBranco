const navbar = document.querySelector('.navbar')
const botãoNav = document.getElementById('buttonNavbar')
const listaNav = document.getElementById('listaNavbar')

window.addEventListener('scroll', () => {
     if (window.scrollY > 50) { // Ajuste o valor de acordo com a sua necessidade
    navbar.classList.add('fixa');
  } else {
    navbar.classList.remove('fixa');
  }
})

botãoNav.addEventListener('click', () =>{
  listaNav.classList.toggle('show')
  botãoNav.classList.toggle('ativo')
})