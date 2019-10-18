var clicks = 0;
var score = clicks;
console.log("check 1")
const a = document.getElementById("dub")
const b = document.getElementById("trip")
const c = document.getElementById("quad")
const d = document.getElementById("color")

const countbutton = document.getElementById("img");

const bgcolorchange = () => {
    Math.floor(Math.random() * 2);
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.backgroundColor = color;
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
    if (clicks >= 200) {
        c.style.display ="none";
        d.style.display ="block";
        bgcolorchange()
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

