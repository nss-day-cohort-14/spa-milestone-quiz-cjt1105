Carlot = (function(originalFunction){
  originalFunction.activeEvents = function(){
    carContainer = document.querySelectorAll('.car-container');
    for ( let i = 0; i < carContainer.length; i ++){
      carContainer[i].addEventListener('click', function(){
        if(event.currentTarget.classList[1] === "clickedCar"){
          originalFunction.removeClass();
          console.log("target",event.currentTarget );
        } else {
          originalFunction.clickedCar("red");
          }
        userInput.focus();

      })
    }
    userInput.addEventListener("keyup", function(e){
			if(e.keyCode === 13){
				input = userInput.value;
				alert('hi');
			}
    })
  }

})(CarLot)





