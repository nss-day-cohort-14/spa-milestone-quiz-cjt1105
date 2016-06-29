var CarLot = (function(orginal) {
  orginal.removeClass = function() {
    event.currentTarget.classList.remove('clickedCar');
    event.currentTarget.style.backgroundColor = "white"
  }
  orginal.clickedCar = function(target,color) {
    target.classList.add('clickedCar');
    target.style.backgroundColor = color
  };
return orginal
})(CarLot)