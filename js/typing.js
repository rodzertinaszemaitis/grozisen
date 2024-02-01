var typeText = document.querySelector(".typeText");
var textToBeTyped = "Threat procedures!";
var index = 0,
  isAdding = true;

function playAnim() {
  setTimeout(function () {
    typeText.innerText = textToBeTyped.slice(0, index);
    if (isAdding) {
      if (index > textToBeTyped.length) {
        isAdding = false;
        setTimeout(function () {
          playAnim();
        }, 2000);
        return;

        
      } else {
        index++;
      }
    } else {
      if (index === 0) {
        isAdding = true;
      } else {
        index--;
      }
    }
    playAnim();
  }, 120);
}
playAnim();
