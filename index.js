var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
	var itemPrice = Math.floor(Math.random() * Math.floor(100))
	cart.unshift({[itemName]: itemPrice})
	console.log(`${itemName} has been added to your cart.`)
	return cart;
}

function viewCart() {
  
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
  for (var i = 0; i < cart.length-1; i++) {
        var cartItem = cart[i];
        var cartItemKey = Object.keys(cartItem);
        var cartItemPrice = Object.values(cartItem);
        if (cart.length === 1) {
          console.log(`In your cart, you have ${cartItemKey} at $${cartItemPrice}.`);
    	  } else if (cart.length === 2) {
          console.log(`In your cart, you have ${cartItemKey} at $${cartItemPrice} and ${Object.keys(cart[i+1])} at $${Object.values(cart[i+1])}.`);
        } else {
          var shoppingList = [];
            shoppingList.unshift(`${cartItemKey[i]} at $${cartItemPrice[i]}, `);
          console.log(`In your cart, you have ${shoppingList}.`);
            return cart;
        }
    }
  }
}


function total() {
  var totalValue = 0;
  var priceList = [];
  for (var i = 0; i < cart.length; i++) {
    var itemPrice = Object.values(cart[i]);
    priceList.unshift(parseInt(itemPrice));
  }
  for (var j = 0; j < priceList.length; j++) {
    totalValue = totalValue + parseInt(priceList[j]);
  }
  return totalValue;
}

  function removeFromCart(item) {
  var itemFound = false;
  while (itemFound === false) {
    var i = 0;
    while (i < cart.length) {
      if (Object.keys(cart[i]).includes(item)){
        itemFound = true;
        cart.splice(i, 1);
        return cart;
      } else {
        i++;
      }
    }
    itemFound = true;
    console.log("That item is not in your cart.");
    return cart;
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
