const buttons = document.getElementsByTagName("button");
    var number1 = 0;
    var number2 = 0;
    var number3 = 0;
    var number4 = 0;
    const buttonPressed = (e) => {
      clickedBtn = e.target.id; // Get ID of Clicked Element
      if (clickedBtn == 1) {
        ++number1;
        document.getElementById("first").innerHTML = number1;
      } else if (clickedBtn == 2) {
        ++number2;

        document.getElementById("second").innerHTML = number2;
      } else if (clickedBtn == 3) {
        ++number3;

        document.getElementById("third").innerHTML = number3;
      } else if (clickedBtn == 4) {
        ++number4;

        document.getElementById("fourth").innerHTML = number4;
      }
    };
    for (let button of buttons) {
      button.addEventListener("click", buttonPressed);
    }