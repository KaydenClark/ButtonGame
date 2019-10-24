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
const propic = getId("img");
let scores = [a, b, c, d, e, propic]


console.log(propic)

const colorrandint = () => {
    let colors = 
    [`#FF9D00`, `#CF32FF`, `#00FFF2`, `#FF0010`, `#37FF00`, `#1BE7FF`, `#F9D800`, `#6EEB83`, `#FF5714`, `#FF82A9`, `#DE369D`, `#3185FC`, `#E84855`, `#0D21A1`, `#EA3788`, `#F26419`, `#FFFC31`, `#3EC300`, `#337CA0`, `#FF1D15`, `#E3170A`, `#0CCA4A`, `#0C8346`, `#7768AE`, `#9D75CB`]
    let randcolor = colors[(Math.floor(Math.random() * (colors.length)))]
    document.body.style.backgroundColor = randcolor
};

console.log("check 2")

const moveobject = () => {
    propic.style.display = "block"
    let x = Math.floor(Math.random() * 75)
    let y = Math.floor(Math.random() * 75)
    propic.style.margin = `${y}vh ${x}vw`;
};

const copy = (moveobject) => {
    let thecopy = {}
    let key;
    for (key in moveobject) {
        thecopy[key] = moveobject[key];
    }
    return thecopy
    console.log(thecopy)
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
    if (clicks >= 300) {
        d.style.display ="none"
        e.style.display ="block"
        colorrandint()
        moveobject()
        copy()
    }
    if(clicks >= 500){}
    
    
};

let reset= () => {
    clicks = 0;
    getId("clicks").innerHTML = clicks;
    document.body.style.backgroundColor = "grey";
    for(i= 0; i < scores.length; i++){
        scores[i].style.display ="none"
    }
};