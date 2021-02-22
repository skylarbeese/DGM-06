const story = document.querySelector(".story")
const btn = document.querySelector("button")
const TellMyStory = document.querySelector(".story")
function tellStory() {
const nouns = document.querySelector(".nouns").value
const ad = document.querySelector(".ad").value
const verbs = document.querySelector(".verbs").value
const Nouns = nouns.split(" ");
const Ad = ad.split(" ");
const Verbs = verbs.split(" ");

console.log(Nouns)
 console.log(Ad)
 console.log(Verbs)
    const MyStory = `${Nouns[0]} ${Ad[2]}`
    TellMyStory.textContent = MyStory
}