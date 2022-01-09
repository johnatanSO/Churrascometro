// CARNE 400G POR PESSOA              + DE 6 HORAS - 650
// CERVEJA 1200ML POR PESSOA          + DE 6 HORAS - 2000ML
// REFRI/AGUA 1000ML POR PESSOA       + DE 6 HORAS - 1500ML

// CRIANÇA VALE METADE

function calcular(){
    let quantAdult = Number(document.getElementById("quantAdult").value)
    let quantCriancas = Number(document.getElementById("quantCriancas").value)
    let horas = Number(document.getElementById("horas").value)
    let resultado = document.getElementById("resultado")
    
    if(quantAdult ==0 || quantCriancas ==0 || horas ==0){
        alert("Por favor, preencha todos os campos!")
    }else{
        if(horas <  6){
        let carne = (400*quantAdult) + (400/2*quantCriancas)
        let cerveja = (1200*quantAdult)
        let refrigerante = (1000*quantAdult) + (1000/2*quantCriancas)
        resultado.innerHTML = `<p>Carne ${carne/1000}Kg</p>`
        resultado.innerHTML +=`<p id="secondP">Cerveja ${cerveja/1000}L</p>`
        resultado.innerHTML +=`<p>Bebidas ${refrigerante/1000}L</p>`
        
    }
    else{
        let carne = (650*quantAdult) + (650/2*quantCriancas)
        let cerveja = (2000*quantAdult)
        let refrigerante = (1500*quantAdult) + (1500/2*quantCriancas)
        resultado.innerHTML = `<p>Carne ${carne/1000}Kg</p>`
        resultado.innerHTML +=`<p id="secondP">Cerveja ${cerveja/1000}L</p>`
        resultado.innerHTML +=`<p>Bebidas ${refrigerante/1000}L</p>`
    }
}
}
    