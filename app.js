const story = document.querySelector(".story")
//const btn = document.querySelector("button")
const TellMyStory = document.querySelector(".story")

document.querySelector(".btn").onclick = () => {
//function tellStory() {
const nouns = document.querySelector(".nouns").value.toLowerCase().split(" ", 3);
const ad = document.querySelector(".ad").value.toLowerCase()
const verbs = document.querySelector(".verbs").value.toLowerCase()
//console.log(nouns)
//const Nouns = nouns.split(" ", 3);
const Ad = ad.split(" ", 3);
const Verbs = verbs.split(" ", 3);

console.log(nouns)
 console.log(Ad)
 console.log(Verbs)
    const MyStory = `once apon a time there was a ${nouns[0]} that lived in a ${Ad[2]}, ${nouns[1]}. the ${nouns[0]},
    liked to ${Verbs[0]} in the big ${nouns[2]}. one day he meet his friend ${nouns[2]} and they both went ${Verbs[0]}
    together after they ${Verbs[2]} in the ${Ad[1]}, ${nouns[2]}. they both lived ${Ad[2]} ever after as they ${Verbs[1]} in the ${nouns[1]}.`
    TellMyStory.textContent = MyStory
    console.log(MyStory)
}
