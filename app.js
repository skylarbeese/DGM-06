const story = document.querySelector(".story")
const btn = document.querySelector("button")
const TellMyStory = document.querySelector(".story")
function tellStory() {
const nouns = document.querySelector(".nouns").value.toLowerCase()
const ad = document.querySelector(".ad").value.toLowerCase()
const verbs = document.querySelector(".verbs").value.toLowerCase()

const Nouns = nouns.split(" ");
const Ad = ad.split(" ");
const Verbs = verbs.split(" ");

console.log(Nouns)
 console.log(Ad)
 console.log(Verbs)
    const MyStory = `once apon a time there was a ${Nouns[0]} that lived in a ${ad[0]}, ${Nouns[1]}. the ${Nouns[0]},
    liked to ${verbs[0]} in the big ${Nouns[2]}. one day he meet his friend ${Nouns[3]} and they both went ${verbs[0]}
    together after they ${verbs[2]} in the ${ad[1]}, ${Nouns[2]}. they both lived ${ad[2]} ever after as they ${verbs[1]} in the ${Nouns[1]}.

    `
    TellMyStory.textContent = MyStory
}