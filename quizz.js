let radios = document.querySelectorAll("input[type='radio']");
let questions = document.querySelectorAll(".question");
let htmlFault = document.getElementById("nbFault");
let helpResult = document.getElementById("help");
let markResult = document.getElementById("mark");
const responses = ["c", "a", "b", "a", "c"];
let form = document.querySelector("form");

function showReponses() {
  tab = [];
  radios.forEach((element) => {
    if (element.checked === true) {
      tab.push(element.value);
    }
  });
  return tab;
}

function compare(array1, array2) {
  let tab = [];
  for (let index = 0; index < responses.length; index++) {
    if (array1[index] == array2[index]) {
      tab.push(true)
    }else{
        tab.push(false);
    }
  }
  return tab;
}

function countRightAnswer(arrayCompare) {
    let result = arrayCompare.filter(item => item == true).length;
    return result;
}

function htmlReponse(Answer) {
    switch (Answer) {
        case 5:
          htmlFault.textContent = `✔️ Bravo, c'est un sans faute ! ✔️`;
          helpResult.textContent = "Quelle culture ...";
          helpResult.style.display = "block";
          markResult.innerHTML = "Score : <span>5 / 5</span>";
          markResult.style.display = "block";
          break;
        case 4:
          htmlFault.textContent = `✨ Vous y êtes presque ! ✨`;
          helpResult.textContent =
            "Retentez une autre réponse dans la case rouge, puis re-validez !";
          helpResult.style.display = "block";
          markResult.innerHTML = "Score : <span>4 / 5</span>";
          markResult.style.display = "block";
          break;
        case 3:
          htmlFault.textContent = `✨ Encore un effort ... 👀`;
          helpResult.textContent =
            "Retentez une autre réponse dans les cases rouges, puis re-validez !";
          helpResult.style.display = "block";
          markResult.innerHTML = "Score : <span>3 / 5</span>";
          markResult.style.display = "block";
          break;
        case 2:
          htmlFault.textContent = `👀 Il reste quelques erreurs. 😭`;
          helpResult.textContent =
            "Retentez une autre réponse dans les cases rouges, puis re-validez !";
          helpResult.style.display = "block";
          markResult.innerHTML = "Score : <span>2 / 5</span>";
          markResult.style.display = "block";
          break;
        case 1:
          htmlFault.textContent = `😭 Peut mieux faire ! 😭`;
          helpResult.textContent =
            "Retentez une autre réponse dans les cases rouges, puis re-validez !";
          helpResult.style.display = "block";
          markResult.innerHTML = "Score : <span>1 / 5</span>";
          markResult.style.display = "block";
          break;
        case 0:
          htmlFault.textContent = `👎 Peut mieux faire ! 👎`;
          helpResult.style.display = "block";
          helpResult.textContent =
            "Retentez une autre réponse dans les cases rouges, puis re-validez !";
          markResult.style.display = "block";
          markResult.innerHTML = "Score : <span>0 / 5</span>";
          break;
    
        default:
          htmlFault.textContent = "Wops, cas innatendu.";
      }
}
function color(arrayResponse) {
    for (let index = 0; index < arrayResponse.length; index++) {
        if (arrayResponse[index] == true) {
            questions[index].style.backgroundImage = "linear-gradient(to right, #a8ff78, #78ffd6)"
        }else{
            questions[index].style.backgroundImage = "linear-gradient(to right, #f5567b, #fd674c)"
        }
        
    }
}

function resetColor(e) {
    
    const index = e.target.getAttribute("name").slice(1)  - 1;
    const parentQuestionBlock = questions[index];
    
    parentQuestionBlock.style.backgroundColor = "#f1f1f1";
    parentQuestionBlock.style.backgroundImage = "none";
    
}

radios.forEach(radioInput => radioInput.addEventListener('input', resetColor))

form.addEventListener("submit", function (e) {
  e.preventDefault();

    let tabResultat = compare(responses, showReponses());
    let countResult = countRightAnswer(tabResultat);
    htmlReponse(countResult);
    color(tabResultat);

});



