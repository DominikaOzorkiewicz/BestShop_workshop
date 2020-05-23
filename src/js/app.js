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

    const packageOptions = dropdownSelect.children;
    console.log(packageOptions);

    const basicLiElement = document.querySelector('[data-value="basic"]');
    const professionalLiElement = document.querySelector('[data-value="professional"]');
    const premiumLiElement = document.querySelector('[data-value="premium"]');

    // ------------------ checkbox --------------------------------------------
    const checkboxes = document.getElementsByClassName('checkbox');            //all checkboxes
    const accountingCheckbox = document.getElementById('checkbox-accounting');    //checkbox 1
    const terminalCheckbox = document.getElementById('checkbox-terminal');        //checkbox 2

    const summaryElements = document.getElementsByClassName('list__item');     //all summary li elements

    const rowProduct = document.querySelector('[data-id="products"]');
    const rowOrder = document.querySelector('[data-id="orders"]');
    const rowPackage = document.querySelector('[data-id="package"]');
    const rowPriceTotal = document.querySelector('.summary__total');


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

    const priceTotal = document.querySelector('.total__price');                   //total price
    console.log(priceTotal);
    //-------------------------------------------------------------------------------------------------------

    // constructor
    const Item = function () {
        this.product = 0;
        this.order = 0;

        this.package = 0;
        this.accounting = 0;
        this.terminal = 0;

        this.totalSummary = 0;

        // ------------ PRODUCT FUNCTION ------------
        this.setProductValue = function (value) {
            this.product = value;

            calcProduct.innerText = `${this.product} * $0.5`;
            priceProduct.innerText = `$${this.product * 0.5}`;

            if (this.product > 0) {
                rowProduct.style.display = 'flex';
            } else {
                rowProduct.style.display = 'none';
            }

            this.calculateTotalPrice();
        }

        // ------------ ORDER FUNCTION ------------
        this.setOrderValue = function (value) {
            this.order = value;

            calcOrder.innerText = `${this.order} * $0.25`;
            priceOrder.innerText = `$${this.order * 0.25}`;

            if (this.order > 0) {
                rowOrder.style.display = 'flex';
            } else {
                rowOrder.style.display = 'none';
            }

            this.calculateTotalPrice();
        }

        // ------------ SET PACKAGE FUNCTION ------------
        this.setPackageOption = function (option) {

            switch (option) {

                case 'Basic':
                    this.package = 10;
                    break;

                case'Professional':
                    this.package = 40;
                    break;

                case 'Premium':
                    this.package = 90;
                    break;

            }

            rowPackage.style.display = 'flex';
            calcPackage.innerText = option;

            this.calculateTotalPrice();
        }



        // ------------ CALCULATE TOTAL PRICE FUNCTION ------------
        this.calculateTotalPrice = function () {

            this.totalSummary = (this.product * 0.5) + (this.order * 0.25) + this.package + this.accounting + this.terminal;
            priceTotal.innerText = `$ ${this.totalSummary}`;

            if (this.totalSummary > 0) {
                rowPriceTotal.style.display = 'flex';
            } else {
                rowPriceTotal.style.display = 'none';
            }

        }
    }

    // new object type: Item
    const myShopping = new Item(priceTotal);

    // ------------ INPUTS EVENTS ------------

    productsInput.addEventListener('keyup', function (event) {

        myShopping.setProductValue(this.value);

    })

    ordersInput.addEventListener('keyup', function (event) {

        myShopping.setOrderValue(this.value);

    })

    selectInput.addEventListener('click', function (event) {
        selectInput.parentElement.classList.toggle('open');

    })

    // --- li ELEMENTS EVENT ---

    Array.from(packageOptions).map(function (element) {
        element.addEventListener('click', function (event) {

            myShopping.setPackageOption(event.target.innerText);


        })
    })

    //--- CHECKBOXES EVENTS ---

    accountingCheckbox.addEventListener('change', function (event) {

    })

    terminalCheckbox.addEventListener('change', function (event) {

    })


});