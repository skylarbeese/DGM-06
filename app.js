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
    const MyStory = `once opon a time there was a ${Ad[2]} , ${Nouns[0]} named Floppy, that lived in the ${Nouns[4]} of ${Nouns[3]}
    there was a ${Nouns[2]} that was ${Ad[1]} and he liked to go ${Verb[0]} in the ${Ad[3]}, ${Nouns[5]}. the ${Nouns[4]} was friends with
    a ${Nouns[6]} and they lived happly ever after in the ${Nouns[7]}

    `
    TellMyStory.textContent = MyStory
}