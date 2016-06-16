var description =  null;
Carlot = (function(originalFunction){
  originalFunction.activeEvents = function(){
    carContainer = document.querySelectorAll('.car-container');
    for ( let i = 0; i < carContainer.length; i ++){
      carContainer[i].addEventListener('click', function(){
        if(event.currentTarget.classList[1] === "clickedCar"){
          originalFunction.removeClass();
        } else {
          originalFunction.clickedCar("red");
          }
        userInput.focus();
        userInput.value = ""
        description = event.currentTarget.querySelector('.description');
        return description
      })
    }
    userInput.addEventListener("keyup", function(e){
			input = userInput.value;
      console.log("input",input);
      description.innerHTML += input;
    })
  }

})(CarLot)





