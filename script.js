//select vistien su salotom, if selected, change ingredientai

//select pirma recepta su function ir return pakeistus kiekio values

//update funckija pakeist kiekio values


//sliderio value * kiekvieno ingredientu kiekio(miltai+miltai)

//check each slider value and multiply that with every product

//check if value is 2, add 

// let miltai = document.getElementById('miltai').innerText = 100
// miltai = document.getElementById('miltai').innerText = "100"

// left: 25%;
/* left: 51%; */
/* left: 78%; */


    document.getElementById('checkMark').style.display = 'none'
    document.getElementById('sliderValue').innerText = '-'
    document.getElementById('receptas1').style.display ='block'
    document.getElementById('receptas2').style.display ='none'
    document.getElementById('receptas3').style.display ='none'
    //once

function Select1(){

    
    //reset slider
    document.getElementById('rangeSlider').value = '1'

    //reset slider value
    document.getElementById('sliderValue').innerText = '1'

    //block pradinis tekstas
    document.getElementById('pradinis-tekstas').style.display ='none'

    //rodyti check mark
    document.getElementById('checkMark').style.display = 'block'
    document.getElementById('checkMark').style.left = '25%'

    //showslidervalue


    //apvesti pasirinkima
    document.getElementById('pirmas-receptas').style.border = "1px solid green"
    document.getElementById('antras-receptas', 'trecias-receptas').style.border = "0.1px solid gray"
    
    //rodyti recepta
    document.getElementById('receptas1').style.display = 'block'
    document.getElementById('receptas2').style.display = 'none' //nerodyti 2 recepto
    document.getElementById('receptas3').style.display = 'none' //nerodyti 3 recepto

    //receptu kiekiai
    document.getElementById('vistiena').innerText = '150'
    document.getElementById('ridikeliai').innerText = "3-5"
    document.getElementById('salotu').innerText = '1'
    document.getElementById('svoguno_laisku').innerText = '2'
    document.getElementById('agurkai').innerText = '1'
    document.getElementById('sezamo_aliejus').innerText = '1'

    //sliderio funkcija ir skaiciavimas
    const slider = document.getElementById("rangeSlider");
    const sliderValue = document.getElementById("sliderValue");

    
    
    slider.addEventListener("input", function() {
    sliderValue.innerText = slider.value;
    vistiena.innerText = 150*slider.value
    ridikeliai.innerText = 3*slider.value+"-"+5*slider.value
    salotu.innerText = 1*slider.value
    svoguno_laisku.innerText = 2*slider.value
    agurkai.innerText = 1*slider.value
    sezamo_aliejus.innerText = 1*slider.value

    //landing numeris default = 1

    

})

}
function Select2(){

    //reset slider
    document.getElementById('rangeSlider').value = '1'

    document.getElementById('sliderValue').innerText = '1'

    //block pradinis tekstas
    document.getElementById('pradinis-tekstas').style.display ='none'

    //perkelti checkmark
    document.getElementById('checkMark').style.display = 'block'
    document.getElementById('checkMark').style.left = '51%' 

    //apvesti pasirinkima
    document.getElementById('antras-receptas').style.border = "1px solid green"
    document.getElementById('pirmas-receptas', 'trecias-receptas').style.border = "0.1px solid gray"

    //
    //rodyti recepta
    document.getElementById('receptas1').style.display = 'none' //nerodyti 1 recepto
    document.getElementById('receptas2').style.display = 'block' //rodyti 2 recepta
    document.getElementById('receptas3').style.display = 'none' //nerodyti 3 recepto

    //receptu kiekiai
    document.getElementById('sausainiai').innerText = '120'
    document.getElementById('sviestas').innerText = "30"
    document.getElementById('jogurtas').innerText = '500'
    document.getElementById('mascarpone').innerText = '400'
    document.getElementById('cukrus').innerText = '130'
    document.getElementById('zelatina').innerText = '10'
    document.getElementById('vanile').innerText = '1'
    document.getElementById('grietinele').innerText = '200'
    document.getElementById('melynes').innerText = '350'
    document.getElementById('cukraus_pudra').innerText = '2'


    //sliderio funkcija ir skaiciavimas
    const slider = document.getElementById("rangeSlider");
    const sliderValue = document.getElementById("sliderValue");

    
    
    slider.addEventListener("input", function() {
    sliderValue.innerText = slider.value;
    sausainiai.innerText = 120*slider.value
    sviestas.innerText = 30*slider.value
    jogurtas.innerText = 500*slider.value
    mascarpone.innerText = 400*slider.value
    cukrus.innerText = 130*slider.value
    zelatina.innerText = 10*slider.value
    vanile.innerText = 1*slider.value
    grietinele.innerText = 200*slider.value+"-"+5*slider.value
    melynes.innerText = 350*slider.value
    cukraus_pudra.innerText = 2*slider.value

    

})

    
}
function Select3(){

    //reset slider
    document.getElementById('rangeSlider').value = '1'

    document.getElementById('sliderValue').innerText = '1'

    //block pradinis tekstas
    document.getElementById('pradinis-tekstas').style.display ='none'

    //perkelti checkmark
    document.getElementById('checkMark').style.display = 'block'
    document.getElementById('checkMark').style.left = '78%' 


    //apvesti pasirinkima
    document.getElementById('trecias-receptas').style.border = "1px solid green"
    document.getElementById('antras-receptas', 'pirmas-receptas').style.border = "0.1px solid gray"


    //rodyti recepta
    document.getElementById('receptas1').style.display = 'none' //nerodyti 1 recepto
    document.getElementById('receptas2').style.display = 'none' //nerodyti 2 recepto
    document.getElementById('receptas3').style.display = 'block' //rodyti 3 recepta

    //receptu kiekiai
    document.getElementById('kiauliena').innerText = '400'
    document.getElementById('vpomidorai').innerText = "120"
    document.getElementById('knorr').innerText = '1'
    document.getElementById('cesnakas').innerText = '2'
    document.getElementById('svogunas').innerText = '1'
    document.getElementById('alyvuoges').innerText = '10'
    document.getElementById('pomidorai').innerText = '400'
    document.getElementById('aliejus').innerText = '2'

    //sliderio funkcija ir skaiciavimas
    const slider = document.getElementById("rangeSlider");
    const sliderValue = document.getElementById("sliderValue");

    
    
    slider.addEventListener("input", function() {
    sliderValue.innerText = slider.value;

    kiauliena.innerText = 400*slider.value
    vpomidorai.innerText = 120*slider.value
    knorr.innerText = 1*slider.value
    cesnakas.innerText = 2*slider.value
    svogunas.innerText = 1*slider.value
    alyvuoges.innerText = 10*slider.value
    pomidorai.innerText = 400*slider.value
    aliejus.innerText = 2*slider.value
    

})
}










