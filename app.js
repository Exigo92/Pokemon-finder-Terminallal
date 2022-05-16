
const btn = document.getElementById("btn");
const input = document.getElementById("pokemon-name")
const pokemon = document.getElementById("pokemon");
const img = document.getElementById("pokemon-img");


btn.addEventListener("click", async function () {
    if (input.value == '') {
        await fetch("https://pokeapi.co/api/v2/pokemon/")
            .then(response => response.json())
            .then(response => {

                console.log(response);

                let output = "";

                response.results.forEach((data) => {

                    output += `
                
                <div class="result20">
                    <h4>${data.name}</h4>
                    <a href="${data.url}">${data.url}</a>
                </div>
                `
                })
                document.querySelector(".result").innerHTML = output;

            })


    }
    else {

        await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
            .then(response => response.json())
            .then(response => {

                    let output = "";

                    output += `
                
                <div class="result2">

                    <img src="${response.sprites.front_default}" id="pokemon-img">
                    <h4 id="pokemon">${response.name}</h4>
                    
                </div>


                `
                document.querySelector(".result").innerHTML = output;
            })
    }

})
