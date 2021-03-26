const story = document.querySelector(".story")
const btn = document.querySelector("button")
const TellMyStory = document.querySelector(".story")


function tellStory() {
const nouns = document.querySelector(".nouns").value.toLowerCase()
const ad = document.querySelector(".ad").value.toLowerCase()
const verbs = document.querySelector(".verbs").value.toLowerCase()
//console.log(nouns)
const Nouns = nouns.split(" ", 3);
const Ad = ad.split(" ", 3);
const Verbs = verbs.split(" ", 3);

console.log(Nouns)
 console.log(Ad)
 console.log(Verbs)
    const MyStory = `once apon a time there was a ${Nouns[0]} that lived in a ${Ad[0]}, ${Nouns[1]}. the ${Nouns[0]},
    liked to ${Verbs[0]} in the big ${Nouns[2]}. one day he meet his friend ${Nouns[3]} and they both went ${Verbs[0]}
    together after they ${Verbs[2]} in the ${Ad[1]}, ${Nouns[2]}. they both lived ${Ad[2]} ever after as they ${Verbs[1]} in the ${Nouns[1]}.

    `
    TellMyStory.textContent = MyStory
  //  console.log(TellMyStory)
}
