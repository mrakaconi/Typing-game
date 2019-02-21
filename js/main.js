const s = selektor => document.getElementById(selektor)

const key = s("key")
const inputSurname = s("#")
const inputEmail = s("#")
const steps1 = s("#")
const steps2 = s("#")
const steps3 = s("#")
const steps4 = s("#")
const loader1 = s("#")
const loader2 = s("#")
const loader3 = s("#")
const loader4 = s("#")

function init() {
    function randomBroj() {
        i = 1
        var rng = Math.floor(Math.random() * 26) + 1;
    }
    do {
        if (!randomBroj.includes(rng)) {
            randomBroj.push(rng);
            i++;
        }
    }
    while (i < 27)
    document.getElementById("#input__leter").innerHTML = randomBroj;
}