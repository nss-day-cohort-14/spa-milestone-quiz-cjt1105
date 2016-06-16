var CarLot = (function(orginal) {
  orginal.clickedCar = function(color) {
    event.currentTarget.classList.add('clickedCar');
    event.currentTarget.style.backgroundColor = color
  };
  orginal.removeClass = function() {
    event.currentTarget.classList.remove('clickedCar');
    event.currentTarget.style.backgroundColor = "white"
  }
  return orginal
})(CarLot)