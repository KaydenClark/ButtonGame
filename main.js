document.designMode = 'off'

var clicks = 0;
console.log("check 1")

const getId = (input) => {
    let abrev = document.getElementById(input)
    return abrev
}
console.log("pass")
const a = getId("dub")
const b = getId("trip")
const c = getId("quad")
const d = getId("getfast")
const e = getId("color")
const g = getId("god")
const propic = getId("img");
const ex1 = getId("ex1")
const ex2 = getId("ex2")
const ex3 = getId("ex3")
const ex4 = getId("ex4")
const ex5 = getId("ex5")
let bgColor = document.body.style.backgroundColor
let scores = [a, b, c, d, e, g, ex1, ex2, ex3, ex4, ex5, propic]
let ex = [ex1, ex2, ex3, ex4, ex5]



console.log(propic)

const colorrandint = () => {
    let colors = 
    [`#FF9D00`, `#CF32FF`, `#00FFF2`, `#FF0010`, `#37FF00`, `#1BE7FF`, `#F9D800`, `#6EEB83`, `#FF5714`, `#FF82A9`, `#DE369D`, `#3185FC`, `#E84855`, `#0D21A1`, `#EA3788`, `#F26419`, `#FFFC31`, `#3EC300`, `#337CA0`, `#FF1D15`, `#E3170A`, `#0CCA4A`, `#0C8346`, `#7768AE`, `#9D75CB`]
    let randcolor = colors[(Math.floor(Math.random() * (colors.length)))]
    bgColor = randcolor
};

console.log("check 2")

const moveobject = (input, number) => {
    input.style.display = "block"
    let x = Math.floor(Math.random() * number)
    let y = Math.floor(Math.random() * number)
    input.style.margin = `${y}vh ${x}vw`;
};

const press1 = () => {
    clicks += 1;
    getId("clicks").innerHTML = clicks;
    if (clicks >= 10) {
        a.style.display ="block";
        clicks++
    }
    if (clicks >=50) {
        a.style.display ="none";
        b.style.display ="block";
        clicks++
    }
    if (clicks >= 100) {
        b.style.display ="none";
        c.style.display ="block";
        clicks++
    }
    if (clicks >= 150){
        c.style.display ="none";
        d.style.display ="block";
        clicks++
    }
    if (clicks >= 1) {
        d.style.display ="none"
        e.style.display ="block"
        if (clicks <= 5) {
            colorrandint()
            moveobject(propic, 75)
        }
    }
    if(clicks >= 5){
        e.style.display= "none"
        propic.style.display= "none"
        g.style.display= "block"
        let i = Math.floor(Math.random() * ex.length)
        moveobject(ex[i], 80)
    }
}

let reset= () => {
    clicks = 0;
    getId("clicks").innerHTML = clicks;
    document.body.style.backgroundColor = "grey";
    for(i= 0; i < scores.length; i++){
        scores[i].style.display ="none"
    }
};