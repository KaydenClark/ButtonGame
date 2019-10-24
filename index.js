document.designMode = 'off'

var clicks = 0;
var score = clicks;
console.log("check 1")
const a = document.getElementById("dub")
const b = document.getElementById("trip")
const c = document.getElementById("quad")
const d = document.getElementById("color")

const countbutton = document.getElementById("img");

const colorrandint = () => {
    let colors = 
    [`#FF9D00`, `#CF32FF`, `#00FFF2`, `#FF0010`, `#37FF00`, `#1BE7FF`, `#F9D800`, `#6EEB83`, `#FF5714`, `#FF82A9`, `#DE369D`, `#3185FC`, `#E84855`, `#0D21A1`, `#EA3788`, `#F26419`, `#FFFC31`, `#3EC300`, `#337CA0`, `#FF1D15`, `#E3170A`, `#0CCA4A`, `#0C8346`, `#7768AE`, `#9D75CB`]
    let randcolor = colors[(Math.floor(Math.random() * (colors.length)))]
    document.body.style.backgroundColor = randcolor
};

console.log("check 2")

const moveobject = () => {
    countbutton.style.display = "block"
    let x = Math.floor(Math.random() * 75)
    let y = Math.floor(Math.random() * 75)
    countbutton.style.margin = `${y}vh ${x}vw`;
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
    document.getElementById("clicks").innerHTML = clicks;
    if (clicks >= 10) {
        a.style.display = "block";
        clicks += 1
    }
    if (clicks >=50) {
        a.style.display ="none";
        b.style.display = "block";
        clicks +=1
    }
    if (clicks >= 100) {
        b.style.display ="none";
        c.style.display ="block";
        clicks += 1
    }
    if (clicks >= 150) {
        c.style.display ="none";
        d.style.display ="block";
        colorrandint()
        moveobject()
        copy()
    }
    
    
};

function reset() {
    clicks = 0;
    document.getElementById("clicks").innerHTML = clicks;
    document.body.style.backgroundColor = "grey";
    a.style.display = "none"
    b.style.display = "none"
    c.style.display = "none"
    d.style.display = "none"
};

