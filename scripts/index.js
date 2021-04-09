
var  module = (function(){

  var items =[

    {
      brand: 'bubbleGum',
      price: 0.80
    },

    {
      brand: 'extra',
      price: 0.85
    },
        {
     brand: 'doubleMint',
     price: 0.90

   },
        {
         brand: 'trident',
         price: 0.40
       }
  ];


var itemsprice = 0.00;
var cart = [];


var addPrice = function(item){

  for(var index = 0; index < items.length; index ++)

  if( item === items[index].brand)
  {
  itemsprice = itemsprice + items[index].price;
}

  cart.push(item);
  totalPrice.innerHTML = itemsprice +" $";
  totalItems.innerHTML = cart.length;
};

var clearCart = function(){

   cart = [];
   itemsprice = 0.00;
   totalPrice.innerHTML = itemsprice;
   totalItems.innerHTML = cart.length;
  // update();

  };

    document.getElementById("extra").addEventListener("click", function() {
    addPrice("extra")});
    document.getElementById("doubleMint").addEventListener("click", function() {
    addPrice("doubleMint")});
    document.getElementById("bubbleGum").addEventListener("click", function() {
    addPrice("bubbleGum")});
    document.getElementById("trident").addEventListener("click", function() {
    addPrice("trident")});
    document.getElementById("clearButton").addEventListener("click", clearCart);

})();
