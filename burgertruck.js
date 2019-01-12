function Order(name, ingredients) {
  this.name = name;
  this.ingredients = ingredients;
  this.status = false;
}

var menuSide = [
  {
    name: "Coke",
    ingredients: ["coke"],
    stages: [4, 5, 6, 7, 8, 9, 10]
  },
  {
    name: "Pink Lemonade",
    ingredients: ["lemonade"],
    stages: [6, 7, 8, 9, 10]
  },
  {
    name: "Sundae",
    ingredients: ["sundae"],
    stages: [8, 9, 10]
  },
  {
    name: "Fries",
    ingredients: ["fries"],
    stages: [10]
  }
];

var menuBurgers = [
  {
    name: "Burger",
    ingredients: ["bread", "meat", "bread"],
    stages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    name: "Cheese Burger",
    ingredients: ["bread", "meat", "cheese", "bread"],
    stages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    name: "Cheese Burger Bacon",
    ingredients: ["bread", "meat", "cheese", "bacon", "bread"],
    stages: [2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    name: "Cheese Burger Salad",
    ingredients: ["bread", "meat", "cheese", "salad", "bread"],
    stages: [2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    name: "Vegan Burger",
    ingredients: ["lettuce", "meat", "sauce", "lettuce"],
    stages: [5, 6, 7, 8, 9, 10]
  },
  {
    name: "Low Carb Burger",
    ingredients: ["lettuce", "meat", "cheese", "lettuce"],
    stages: [8, 9, 10]
  },
  {
    name: "Grilled Cheese",
    ingredients: ["bread", "cheese", "bread"],
    stages: [11]
  }
];

var menuType = [menuSide, menuBurgers];

function randomSelector(menu, stage) {
  if (menu === undefined) {
    return undefined;
  }
  var possibleItems = menu.filter(function(item) {
    return item.stages.indexOf(stage) > -1;
  });
  var menu = possibleItems[Math.floor(Math.random() * possibleItems.length)];
  return menu;
}

var intervalId = null;

var totalScore = 0;

function score () {
  var record = (i/originalTime) * 100;

  if (record > 90) {
    totalScore += 1000
  } else if (90 > record > 80) {
    totalScore += 800
  } else if (80 > record > 50) {
    totalScore += 500
  } else {
    totalScore += 200
  }
}

var originalTime = 0;
var i = 0;

function time(seconds) {
  clearInterval(intervalId);
  originalTime = seconds;
  i = seconds;
  intervalId = setInterval(function() {
    if (i > 0) {
      $(".time").html(`${i} seconds remaining`);
    } else {
      alert("Game Over, please start a new game");
      $(".burger").empty();
      $(".side").empty();
      $(".items").empty();
      clearInterval(intervalId);
    }

    i--;
  }, 1000);
}

function createLevel() {
  this.orders = [];

  switch (this.level) {
    case 1:
    totalScore = 0;
      $(".items").empty();
      for (var i = 0; i < 4; i++) {
        var itemSelected = randomSelector(menuBurgers, 1);
        var item = new Order(itemSelected.name, itemSelected.ingredients);
        this.orders.push(item);
        $("ol").append("<li>" + this.orders[i].name + "</li>");
      }
      time(120);
      break;
    case 2:
      $(".items").empty();
      for (var i = 0; i < 4; i++) {
        var itemSelected = randomSelector(menuBurgers, 2);
        var item = new Order(itemSelected.name, itemSelected.ingredients);
        this.orders.push(item);
        $("ol").append("<li>" + this.orders[i].name + "</li>");
      }
      time(120);
      break;
    case 3:
      $(".items").empty();
      for (var i = 0; i < 6; i++) {
        var itemSelected = randomSelector(menuBurgers, 3);
        var item = new Order(itemSelected.name, itemSelected.ingredients);
        this.orders.push(item);
        $("ol").append("<li>" + this.orders[i].name + "</li>");
      }
      time(120);
      break;
    case 4:
      $(".items").empty();
      for (var i = 0; i < 6; i++) {
        var menuSelect = menuType[Math.floor(Math.random() * menuType.length)];
        var itemSelected = randomSelector(menuSelect, 4);
        var item = new Order(itemSelected.name, itemSelected.ingredients);
        this.orders.push(item);
        $("ol").append("<li>" + this.orders[i].name + "</li>");
      }
      time(120);
      break;
    case 5:
      $(".items").empty();
      for (var i = 0; i < 8; i++) {
        var menuSelect = menuType[Math.floor(Math.random() * menuType.length)];
        var itemSelected = randomSelector(menuSelect, 5);
        var item = new Order(itemSelected.name, itemSelected.ingredients);
        this.orders.push(item);
        $("ol").append("<li>" + this.orders[i].name + "</li>");
      }
      time(120);
      break;
    case 6:
      $(".items").empty();
      for (var i = 0; i < 8; i++) {
        var menuSelect = menuType[Math.floor(Math.random() * menuType.length)];
        var itemSelected = randomSelector(menuSelect, 6);
        var item = new Order(itemSelected.name, itemSelected.ingredients);
        this.orders.push(item);
        $("ol").append("<li>" + this.orders[i].name + "</li>");
      }
      time(105);
      break;
    case 7:
      $(".items").empty();
      for (var i = 0; i < 10; i++) {
        var menuSelect = menuType[Math.floor(Math.random() * menuType.length)];
        var itemSelected = randomSelector(menuSelect, 7);
        var item = new Order(itemSelected.name, itemSelected.ingredients);
        this.orders.push(item);
        $("ol").append("<li>" + this.orders[i].name + "</li>");
      }
      time(90);
      break;
    case 8:
      $(".items").empty();
      for (var i = 0; i < 10; i++) {
        var menuSelect = menuType[Math.floor(Math.random() * menuType.length)];
        var itemSelected = randomSelector(menuSelect, 8);
        var item = new Order(itemSelected.name, itemSelected.ingredients);
        this.orders.push(item);
        $("ol").append("<li>" + this.orders[i].name + "</li>");
      }
      time(90);
      break;
    case 9:
      $(".items").empty();
      for (var i = 0; i < 12; i++) {
        var menuSelect = menuType[Math.floor(Math.random() * menuType.length)];
        var itemSelected = randomSelector(menuSelect, 9);
        var item = new Order(itemSelected.name, itemSelected.ingredients);
        this.orders.push(item);
        $("ol").append("<li>" + this.orders[i].name + "</li>");
      }
      time(90);
      break;
    case 10:
      $(".items").empty();
      for (var i = 0; i < 12; i++) {
        var menuSelect = menuType[Math.floor(Math.random() * menuType.length)];
        var itemSelected = randomSelector(menuSelect, 10);
        var item = new Order(itemSelected.name, itemSelected.ingredients);
        this.orders.push(item);
        $("ol").append("<li>" + this.orders[i].name + "</li>");
      }
      time(60);
      break;
    case 11:
      $(".items").empty();
      $("ol").append("<li>" + "GRILLED CHEESE FRENZY! Deliver as many Grilled Cheese as you can!!! GO GO GO!!!" + "</li>");
      for (var i = 0; i < 1000; i++) {
        var itemSelected = randomSelector(menuBurgers, 11);
        var item = new Order(itemSelected.name, itemSelected.ingredients);
        this.orders.push(item);
      }
      time(30);
      break;
  }
}

function startGame() {
  this.level = 1;
  createLevel();
  makeOrder();
  getNewOrder();
}

function startBonusGame() {
  this.level = 11;
  createLevel();
  makeOrder();
  getNewOrder();
}

function getNewOrder() {
  this.orderSelected = this.orders.filter(function(item) {
    return item.status == false;
  })[0];
  if (this.orderSelected == undefined) {
    this.level += 1;
    toStroke = -1;
    createLevel();
    getNewOrder();
  }
}



function makeOrder() {
  this.orderIngredients = [];
}

document.onkeyup = function(e) {
  switch (e.code) {
    case "Digit1":
      orderIngredients.push("coke");
      $(".side").prepend($("<div class='coke'>coke</div>"));
      break;
    case "Digit2":
      orderIngredients.push("lemonade");
      $(".side").prepend($("<div class='lemonade'>pink lemonade</div>"));
      break;
    case "Digit3":
      orderIngredients.push("sundae");
      $(".side").prepend($("<div class='sundae'>sundae</div>"));
      break;
    case "Digit4":
      orderIngredients.push("fries");
      $(".side").prepend($("<div class='fries'>fries</div>"));
      break;

    case "KeyB":
      orderIngredients.push("bread");
      $(".burger").prepend($("<div class='bun'>bun</div>"));
      break;
    case "KeyM":
      orderIngredients.push("meat");
      $(".burger").prepend($("<div class='meat'>meat</div>"));
      break;
    case "KeyC":
      orderIngredients.push("cheese");
      $(".burger").prepend($("<div class='cheese'>cheese</div>"));
      break;
    case "KeyK":
      orderIngredients.push("bacon");
      $(".burger").prepend($("<div class='bacon'>bacon</div>"));
      break;
    case "KeyS":
      orderIngredients.push("salad");
      $(".burger").prepend($("<div class='salad'>salad</div>"));
      break;
    case "KeyU":
      orderIngredients.push("sauce");
      $(".burger").prepend($("<div class='sauce'>sauce</div>"));

      break;
    case "KeyL":
      orderIngredients.push("lettuce");
      $(".burger").prepend($("<div class='salad'>lettuce</div>"));

      break;

    case "Enter":
      if (
        orderIngredients.length == orderSelected.ingredients.length &&
        orderIngredients.every(function(element, index) {
          return element === orderSelected.ingredients[index];
        })
      ) {
        score ();
        $(".score").html(`${totalScore} points`);
        orderSelected.status = true;
        orderIngredients = [];
        toStroke++;

        $("ol li")
          .eq(toStroke)
          .css("text-decoration", "line-through");
        getNewOrder();
        $(".burger").empty();
        $(".side").empty();
      } else {
        orderIngredients = [];
        $(".burger").empty();
        $(".side").empty();
      }
      break;
  }
};

var toStroke = -1;

$(document).ready(function() {
  $("#button").click(function() {
    startGame();
  });
  $("#buttonBonus").click(function() {
    startBonusGame();
  });
});
