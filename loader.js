var carContainer;
var counter = null
var userInput = document.querySelector('input')
var CarLot = (function () {
  var inventory = [];
  return {
    getInventory: function () {
      return inventory
    },
    loadInventory: function (callbackFunction) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('GET', "inventory.json");
      inventoryLoader.send();
      inventoryLoader.addEventListener("load", function () {
      inventory = JSON.parse(this.responseText).cars;
      callbackFunction(inventory)
      });
    }
  };
  return CarLot
})();

CarLot.loadInventory(populateLot);

function populateLot(){
  var row = document.querySelector('.row')
  inventory = CarLot.getInventory();
  for (let i = inventory.length - 1; i >= 0; i--) {
    var currentInventory = inventory[i];
    counter ++
    row.innerHTML += `<div class="col-sm-4 text-center">
                        <div class="car-container" id="car-container--${counter}">
                          <span class="car-header">Make</span>
                          <span class="car-element">${currentInventory.make}</span>
                          <span class="car-header">Model</span>
                          <span class="car-element">${currentInventory.model}</span>
                          <span class="car-header">Year</span>
                          <span class="car-element">${currentInventory.year}</span>
                          <span class="car-header">Price</span>
                          <span class="car-element">${currentInventory.price}</span>
                          <span class="car-header">Color</span>
                          <span class="car-element">${currentInventory.color}</span>
                          <div class="description-wrapper"
                            <span class="car-header">Description</span>
                            <p class="description">${currentInventory.description}</p>
                          </div>
                        </div>
                      </div>`
  }
  carContainer = document.querySelectorAll('.car-container');
  for (let i = 0; i < carContainer.length; i++) {
    currentContainer=carContainer[i];
    currentContainer.style.borderColor = inventory[i].color;
  }
  CarLot.activeEvents();
}
