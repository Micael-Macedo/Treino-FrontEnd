const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) =>observer.observe(el));

function exibirMenu(){
    $('.mobile-toggle').toggleClass('open');
    $('.mobile-menu').toggleClass('open');
}
$('.mobile-menu a').on('click', function () {
    exibirMenu()
});
$(document).ready(function () {
    StarWars();
    conselho(); 
});
async function  StarWars() {
    let result = await fetch("https://swapi.dev/api/people/").then(
        r => {
            return r.json()
        }
    ).catch(e => {return false});
    console.log(result.results);
    if(result){
        result.results.forEach(pessoa => {
            $('.star-wars-content').append(
                    `
                    <div class="Personagem card">
                        <div class="card-header">
                            <h2>Nome:<h2/>
                            <p>${pessoa.name}</p>
                        </div>
                        <div class="card-body">
                            <img src="images/the-mandalorian.webp" alt="logStarWars" />
                        </div>
                        <div class="card-footer">
                            <h2>Peso<h2/>
                            <p>${pessoa.mass}</p>
                        </div>
                    </div>
                `
            );
        });
    }
}
async function conselho() {
    let result = await fetch("	https://api.adviceslip.com/advice").then(r => {
        return r.json();
    });
    console.log(result.slip.advice);
    $('.advice').append(
        `<p>"${result.slip.advice}"</p>`
    );
    
}