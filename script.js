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
    StarWars()
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
                    <div class="Personagem">
                        <div>
                            <h2>Nome<h2/>
                            <p>${pessoa.name}</p>
                        </div>
                        <div>
                            <h2>Altura<h2/>
                            <p>${pessoa.height}</p>
                        </div>
                        <div>
                            <h2>Peso<h2/>
                            <p>${pessoa.mass}</p>
                        </div>
                    </div>
                `
            );
        });
    }
}