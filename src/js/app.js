document.addEventListener("DOMContentLoaded", function() {

   // ---------------- BURGER MENU ----------------

   const button = document.querySelector(".dropdown-burger");
   const nav = document.querySelector(".menu__list");

   button.addEventListener("click", function() {
      button.classList.toggle("change");
      nav.classList.toggle("show");
   });

   // ---------------- CALCULATOR ----------------

   const form = document.querySelector('.calc__form');
   // ------------------- input -------------------------------------
   const productsInput = document.getElementById('products');
   const ordersInput = document.getElementById('orders');
   const numberInputs = document.querySelectorAll('[type="number"]');      // for validation
   const selectInput = document.querySelector('.select__input');           //dropdown options for 'click'

   const dropdownSelect = document.querySelector('.select__dropdown');           // show after 'click'
   // ------------------ checkbox --------------------------------------------
   const checkboxes = document.getElementsByClassName('checkbox');            //all checkboxes
   const accountingCheckbox = document.getElementById('checkbox-accounting');    //checkbox 1
   const terminalCheckbox = document.getElementById('checkbox-terminal');        //checkbox 2

   const summaryElements = document.getElementsByClassName('list__item');     //all summary li elements
   // ----------------- calc --------------------------------------------------------
   const calcElements = document.querySelectorAll('.item__calc');                //all calc elems
   console.log(calcElements);
   const calcProduct = document.querySelector('[data-id="products"]').children[1];
   console.log(calcProduct);
   const calcOrder = document.querySelector('[data-id="orders"]').children[1];
   console.log(calcOrder);
   const calcPackage = document.querySelector('[data-id="package"]').children[1];
   console.log(calcPackage);
   // ---------------------- price ---------------------------------------------------
   const priceElements = document.querySelectorAll('.item__price');              //all prices elems
   console.log(priceElements);
   const priceProduct = document.querySelector('[data-id="products"]').children[2];
   console.log(priceProduct);
   const priceOrder = document.querySelector('[data-id="orders"]').children[2];
   console.log(priceOrder);
   const pricePackage = document.querySelector('[data-id="package"]').children[2];
   console.log(pricePackage);
   const priceAccounting = document.querySelector('[data-id="accounting"]'). children[2];
   console.log(priceAccounting);

   const summaryTotal = document.querySelector('.summary__total');               //total summary
   const priceTotal = document.querySelector('.total__price');                   //total price
   //-------------------------------------------------------------------------------------------------------

   // constructor
   const Item = function (price) {      // ustalenie wartości wszystkich cen
      this.price = {
         product: 0.5,
         order: 0.25,
         package: {
            basic: 0,
            professional: 100,
            premium: 150,
         },
         accounting: 30,
         terminal: 5,

      }
   }




});