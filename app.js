const story = document.querySelector(".story")
//const btn = document.querySelector("button")
const TellMyStory = document.querySelector(".story")

document.querySelector(".btn").onclick = () => {
//function tellStory() {
//const Nouns = document.querySelector(".nouns").value.toLowerCase().split(" ");
const nouns = document.querySelector(".nouns").value.toLowerCase()

let news1 = new String(nouns)
const Nouns = news1.split(' ');

const ad = document.querySelector(".ad").value.toLowerCase()

let news2 = new String(ad)
const Ad = news2.split(' ', 3);

const verbs = document.querySelector(".verbs").value.toLowerCase()
let news3 = new String(verbs)
const Verbs = news3.split(' ', 3);

//console.log(nouns)
//const Nouns = nouns.split(" ", 3);
//const Nouns = new String(nouns)
//const Ad = ad.split(" ", 3);
//const Verbs = verbs.split(" ", 3);
console.log(news1)
console.log(news2)
console.log(news3)
 console.log(Ad)


 console.log(Nouns)
 console.log(Verbs)
 //console.log(Verbs)
    const MyStory = `once apon a time there was a ${Nouns[0]} that lived in a ${Ad[0]}, ${Nouns[1]}. the ${Nouns[0]},
    liked to ${Verbs[0]} in the big ${Nouns[2]}. one day he meet his friend ${Nouns[2]} and they both went ${Verbs[0]}
    together after they ${Verbs[2]} in the ${Ad[1]}, ${Nouns[2]}. they both lived ${Ad[2]} ever after as they ${Verbs[1]} in the ${Nouns[1]}.`
    TellMyStory.textContent = MyStory
    console.log(MyStory)
}
