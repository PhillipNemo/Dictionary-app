
const input = document.getElementById("input")
const btn = document.getElementById("btn")
const body = document.getElementById("body")
const mode = document.querySelector('#mode');
const modeSwitch = document.querySelector('.mode-switch');



mode.addEventListener("click", function () {
  if (mode.checked) {
        body.classList.remove('light');
        body.classList.add('dark');
        modeSwitch.style.backgroundColor="#132b50"
      } else {
        body.classList.remove('dark');
        body.classList.add('light');
        modeSwitch.style.backgroundColor="#161a1f"
    }
})



btn.addEventListener("click", function() {
  const word = input.value;

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      appendData(data)
      // console.log(data)
    })
    .catch(function(err) {
      alert("This word is not an English word");
    });

})


function appendData(data) {
  var content = document.getElementById("content");

  content.innerHTML = `
           <h2 class="word-searched">${data[0].word}</h2>
           <p class="word-pronounciation">${data[0].phonetic}, ${data[0].phonetic} <i class="icofont-radio-mic icon"> </i></p>
           
           <br>
           <div class="speech">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].meanings[1].partOfSpeech}</p>
                <p>${data[0].meanings[2].partOfSpeech}</p>
                <p>${data[0].meanings[3].partOfSpeech}</p>
            </div>
            <p class="curr">${data[0].meanings[0].partOfSpeech}</p>

            <div class="defi">
                  <h5 class="definition">DEFINITION</h5>
                  <p class="word-defined"><span class="color">1. </span>${data[0].meanings[0].definitions[0].definition}</p>
                  <p class="word-defined">2. ${data[0].meanings[0].definitions[1].definition}</p>
                  <p class="word-defined">3. ${data[0].meanings[0].definitions[2].definition}</p>
                  <p class="word-defined">4. ${data[0].meanings[0].definitions[3].definition}</p>
            </div>

            <div class="example">
                  <h5 class="definition">EXAMPLES</h5>
                  <p><span class="color">1. </span> ${data[0].meanings[0].definitions[0].example}</p>
                  <p>2. ${data[0].meanings[0].definitions[1].example}</p>
                  <p>3. ${data[0].meanings[0].definitions[2].example}</p>
            </div>

           <div class="syn-ant">
              <div class="syn">
                  <h5 class="synnonyms">SYNONYMS</h5>
                  <p>${data[0].meanings[0].synonyms[0]} </p>
                  <p>${data[0].meanings[0].synonyms[1]} </p>
                  <p>${data[0].meanings[0].synonyms[2]} </p>
              </div>
              <div class="ant">
                  <h5 class="synnonyms">ANTONYMS</h5>
                  <p>${data[0].meanings[0].antonyms[0]} </p>
                  <p>${data[0].meanings[0].antonyms[1]} </p>
                  <p>${data[0].meanings[0].antonyms[2]} </p>
              </div>
              
           </div>

          
    `
  input.value = "";
}
