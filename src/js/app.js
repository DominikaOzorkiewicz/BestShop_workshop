document.addEventListener("DOMContentLoaded", function() {
    // ---------------- BURGER MENU ----------------
    const button = document.querySelector(".dropdown-burger");
    const nav = document.querySelector(".menu__list");

    button.addEventListener("click", function() {
        button.classList.toggle("change");
        nav.classList.toggle("show");
    });

    // --------------- CALCULATOR --------------- //

    // Inputs
    const productsInput = document.getElementById('products');
    const ordersInput = document.getElementById('orders');
    const selectInput = document.querySelector('.select__input');
    const dropdownSelect = document.querySelector('.select__dropdown');
    const packageOptions = dropdownSelect.children;
    // Checkboxes
    const accountingCheckbox = document.getElementById('checkbox-accounting');
    const terminalCheckbox = document.getElementById('checkbox-terminal');
    // Rows
    const rowProduct = document.querySelector('[data-id="products"]');
    const rowOrder = document.querySelector('[data-id="orders"]');
    const rowPackage = document.querySelector('[data-id="package"]');
    const rowAccounting = document.querySelector('[data-id="accounting"]');
    const rowTerminal = document.querySelector('[data-id="terminal"]');
    const rowPriceTotal = document.querySelector('.summary__total');
    // Calc
    const calcProduct = document.querySelector('[data-id="products"]').children[1];
    const calcOrder = document.querySelector('[data-id="orders"]').children[1];
    const calcPackage = document.querySelector('[data-id="package"]').children[1];
    // Price
    const priceProduct = document.querySelector('[data-id="products"]').children[2];
    const priceOrder = document.querySelector('[data-id="orders"]').children[2];
    const pricePackage = document.querySelector('[data-id="package"]').children[2];
    const priceTotal = document.querySelector('.total__price');
    // -------------------------------------------------------------------------------------- //

    // Constructor
    const Item = function () {
        this.product = 0;
        this.order = 0;
        this.package = 0;
        this.accounting = 0;
        this.terminal = 0;
        this.totalSummary = 0;

        // ------------ PRODUCT FUNCTION ------------ //
        this.setProductValue = function (value) {
            this.product = value;
            calcProduct.innerText = `${this.product} * $0.5`;
            priceProduct.innerText = `$ ${this.product * 0.5}`;
            if (this.product > 0) {
                rowProduct.style.display = 'flex';
            } else {
                rowProduct.style.display = 'none';
            }
            // Check if any number of products and orders is set
            if (this.product > 0 && this.order > 0) {
                rowPackage.style.display = 'flex';
            } else {
                rowPackage.style.display = 'none';
            }
            this.calculateTotalPrice();
        }

        // ------------ ORDER FUNCTION ------------ //
        this.setOrderValue = function (value) {
            this.order = value;

            calcOrder.innerText = `${this.order} * $0.25`;
            priceOrder.innerText = `$ ${this.order * 0.25}`;

            if (this.order > 0) {
                rowOrder.style.display = 'flex';
            } else {
                rowOrder.style.display = 'none';
            }

            // Check if any number of products and orders is set
            if (this.product > 0 && this.order > 0) {
                rowPackage.style.display = 'flex';
            } else {
                rowPackage.style.display = 'none';
            }
            this.calculateTotalPrice();
        }

        // ------------ SET PACKAGE FUNCTION ------------ //
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

            // Check if any number of products and orders is set
            if (this.product > 0 && this.order > 0) {
                rowPackage.style.display = 'flex';
            } else {
                rowPackage.style.display = 'none';
            }

            calcPackage.innerText = option;
            pricePackage.innerText = `$ ${this.package}`;

            this.calculateTotalPrice();
        }

        // ------------ ACCOUNTING FUNCTION ------------ //
        this.setAccounting = function (value) {
            this.accounting = value;
            this.calculateTotalPrice();
        }

        // ------------ TERMINAL FUNCTION ------------ //
        this.setTerminal = function (value) {
            this.terminal = value;
            this.calculateTotalPrice();
        }

        // ------------ CALCULATE TOTAL PRICE FUNCTION ------------ //
        this.calculateTotalPrice = function () {

            this.totalSummary = (this.product * 0.5) + (this.order * 0.25) + this.package + this.accounting + this.terminal;
            priceTotal.innerText = `$ ${this.totalSummary}`;

            if (this.totalSummary > 0 && this.product > 0 && this.order > 0) {
                rowPriceTotal.style.display = 'flex';
            } else {
                rowPriceTotal.style.display = 'none';
            }
        }
    }

    // new object type: Item
    const myShopping = new Item(priceTotal);

    // ------------ INPUTS EVENTS ------------ //
    productsInput.addEventListener('input', function (event) {
        myShopping.setProductValue(this.value);
    });

    ordersInput.addEventListener('input', function (event) {
        myShopping.setOrderValue(this.value);
    });

    selectInput.addEventListener('click', function (event) {
        selectInput.parentElement.classList.toggle('open');
    });

    // --- li ELEMENTS EVENT --- //
    Array.from(packageOptions).map(function (element) {
        element.addEventListener('click', function (event) {

            myShopping.setPackageOption(event.target.innerText);
            selectInput.innerText = event.target.innerText;
            selectInput.parentElement.classList.toggle('open');

        });
    });

    // --- CHECKBOXES EVENTS --- //
    accountingCheckbox.addEventListener('change', function (event) {
        if (event.target.checked !== false) {
            rowAccounting.style.display = 'flex';
            myShopping.setAccounting(10);
        } else {
            rowAccounting.style.display = 'none';
            myShopping.setAccounting(0);
        }
    });

    terminalCheckbox.addEventListener('change', function (event) {
        if (event.target.checked !== false) {
            rowTerminal.style.display = 'flex';
            myShopping.setTerminal(10);
        } else {
            rowTerminal.style.display = 'none';
            myShopping.setTerminal(0);
        }
    });

});