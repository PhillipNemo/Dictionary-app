
const input = document.getElementById("input")
const btn = document.getElementById("btn")






btn.addEventListener("click", function() {
  const word = input.value;

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      appendData(data)
      console.log(data)
    })
    .catch(function(err) {
      alert("This word is not an English word");
    });

})


function appendData(data) {
  var mainContainer = document.getElementById("div");

  var p = document.createElement("p");
  p.innerHTML = `
  <span>WORD: </span>${data[0].word}
    <hr/>
<span>MEANING: </span>${data[0].meanings[0].definitions[0].definition} 
    <hr/>
  <span>ORIGIN: </span>  ${data[0].origin} <hr/>
 <span>EXAMPLE: </span> ${data[0].meanings[0].definitions[0].example} 
 <hr/>
 <span>SYNONYMS: </span>${data[0].meanings[0].definitions[0].synonyms[0]}
<hr/>
<span>PART OF SPEECH: </span>${data[0].meanings[0].partOfSpeech}
    `
  mainContainer.appendChild(p);
  input.value = "";
}
