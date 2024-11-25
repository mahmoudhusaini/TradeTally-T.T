

let addProductBtn = document.querySelector('.add-product-btn');
const tableBody = document.querySelector('.table-body');



// #region Add Product Row Event Listner

addProductBtn.addEventListener('click', (event) => {
    let tableRow = document.createElement('tr');

    tableBody.appendChild(tableRow);

    // #region Add Product Name to Table

    function addProductNameTableData() {
        let td = document.createElement('td');
        tableRow.appendChild(td);

        let inputProdName = document.createElement('input');
        Object.assign(inputProdName, {
            type: 'text',
            name: 'product-name',
            id: 'product-name',
        });
        inputProdName.setAttribute('placeholder', 'Enter product name');
        td.appendChild(inputProdName);
    }

    addProductNameTableData();
    // #endregion

    // #region Add Product Quantity to Table

    function addProductQuantityTableData() {
        let td = document.createElement('td');
        tableRow.appendChild(td);

        let inputProdQty = document.createElement('input');
        Object.assign(inputProdQty, {
            type: 'number',
            name: 'product-quantity',
            id: 'product-quantity',
            value: 0,
        });
        td.appendChild(inputProdQty);
    }

    addProductQuantityTableData();
    // #endregion

    // #region Add Product Unit Price to Table
    function addProductUnitPriceToTableData() {
        let td = document.createElement('td');
        tableRow.appendChild(td);

        let inputProdUnitPrice = document.createElement('input');
        Object.assign(inputProdUnitPrice, {
            type: 'number',
            name: 'product-unit-price',
            id: 'product-unit-price',
            value: 0,
        });
        td.appendChild(inputProdUnitPrice);
    }

    addProductUnitPriceToTableData();
    // #endregion

    // #region Add Product Total Price to Table
    function addProductTotalPriceToTableData() {
        let td = document.createElement('td');
        tableRow.appendChild(td);

        let inputProdTotalPrice = document.createElement('input');
        Object.assign(inputProdTotalPrice, {
            type: 'number',
            name: 'product-total-price',
            id: 'product-total-price',
            value: 0,
        });
        inputProdTotalPrice.setAttribute('readonly', true);
        td.appendChild(inputProdTotalPrice);
    }

    addProductTotalPriceToTableData();
    // #endregion

    // #region Add Product Weight to Table
    function addProductWeightToTableData() {
        let td = document.createElement('td');
        tableRow.appendChild(td);

        let inputProdWeight = document.createElement('input');
        Object.assign(inputProdWeight, {
            type: 'number',
            name: 'product-weight',
            id: 'product-weight',
            value: 0,
        });
        td.appendChild(inputProdWeight);
    }

    addProductWeightToTableData();
    // #endregion

    // #region Add Product Total Weight to Table
    function addProductTotalWeightToTableData() {
        let td = document.createElement('td');
        tableRow.appendChild(td);

        let inputProdTotalWeight = document.createElement('input');
        Object.assign(inputProdTotalWeight, {
            type: 'number',
            name: 'total-weight',
            id: 'total-weight',
            value: 0,
        });
        inputProdTotalWeight.setAttribute('readonly', true);
        td.appendChild(inputProdTotalWeight);
    }

    addProductTotalWeightToTableData();
    // #endregion

    // #region Add Product Total Weight Charge to Table
    function addProductWeightCostToTableData() {
        let td = document.createElement('td');
        tableRow.appendChild(td);

        let inputProdTotalWeightCharge = document.createElement('input');
        Object.assign(inputProdTotalWeightCharge, {
            type: 'number',
            name: 'weight-cost',
            id: 'weight-cost',
            value: 0,
        });
        inputProdTotalWeightCharge.setAttribute('readonly', true);
        td.appendChild(inputProdTotalWeightCharge);
    }

    addProductWeightCostToTableData();
    // #endregion

    // #region Add Product Landed Cost to Table
    function addProductLandedCostToTableData() {
        let td = document.createElement('td');
        tableRow.appendChild(td);

        let inputProdLandedCost = document.createElement('input');
        Object.assign(inputProdLandedCost, {
            type: 'number',
            name: 'landed-cost',
            id: 'landed-cost',
            value: 0,
        });
        inputProdLandedCost.setAttribute('readonly', true);
        td.appendChild(inputProdLandedCost);
    }

    addProductLandedCostToTableData();
    // #endregion


    // #region Add Product Delete Button to Table

    function addDeleteButton() {
        let td = document.createElement('td');
        tableRow.appendChild(td);

        let deleteButton = document.createElement('button');
        Object.assign(deleteButton, {
            type: 'button',
            name: 'delete-btn',
            id: 'delete-btn',
        });
        const textNode = document.createTextNode("Delete");
        deleteButton.appendChild(textNode);
        td.appendChild(deleteButton);
        deleteButton.className = 'delete-btn';
    }
    addDeleteButton();
    //#endregion

    // #region Add Product Reset Button to Table
    function addResetButton() {
        let td = document.createElement('td');
        tableRow.appendChild(td);

        let resetButton = document.createElement('button');
        Object.assign(resetButton, {
            type: 'button',
            name: 'reset-btn',
            id: 'reset-btn',
        });
        const textNode = document.createTextNode("Reset");
        resetButton.appendChild(textNode);
        td.appendChild(resetButton);
        resetButton.className = 'reset-btn';
    }
    addResetButton();
    //#endregion
});
//#endregion

// #region Total Weight Calculator Function
function calculateTotalWeight(qty, weight) {
    let valueOne = parseInt(qty);
    let valueTwo = parseFloat(weight);

    return parseFloat(valueOne * valueTwo);
}
// #endregion

// #region Total Price Calculator Function
function calculateTotalPrice(qty, up) {
    let valueOne = parseInt(qty);
    let valueTwo = parseFloat(up);

    return parseFloat(valueOne * valueTwo);
}
//#endregion

// #region Landed Cost Calculator Function
function calculateLandedCost(totalPrice, qty, weightCharge) {
    if (totalPrice === '0' || qty === '0' || weightCharge === '0') {
        return 0;
    }
    let valueOne = parseInt(qty);
    let valueTwo = parseFloat(totalPrice);
    let valueThree = parseFloat(weightCharge);
    let formula = (valueThree + valueTwo) / (valueOne);
    let finalValue = parseFloat(formula).toFixed(2)
    return finalValue;
}
// #endregion

// #region Weight Fees and % Charge

const fixedValsContainer = document.querySelector('.fixed-values-option');

fixedValsContainer.addEventListener('input', (event) => {
    let target = event.target;

    switch (target.id) {
        case 'money-transfer':
            if (!pattern.test(target.value)) {
                target.value = 0;

                target.setCustomValidity("Invalid Money Transfer Fees.");
                let validationMessage = target.validationMessage;

                target.classList.remove('input-valid');
                target.classList.add('input-danger');

                return;
            }

            target.classList.remove('input-danger');
            target.classList.add('input-valid');

            let value = target.value;

            plusMoneyTransferFees(value);
            break;

        case 'freight-unit':
            if (!pattern.test(target.value)) {
                target.value = 0;

                // weightCost.value = 0; sakto bas rja3 3mol test

                target.setCustomValidity("Invalid Freight Charge.");
                let validationMessage = target.validationMessage;


                target.classList.remove('input-valid');
                target.classList.add('input-danger');
                return;
            }

            target.classList.remove('input-danger');
            target.classList.add('input-valid');

            let rows = document.querySelectorAll('tr');
            rows.forEach((row, index) => {

                let weightInput = row.querySelector('#product-weight');

                if (!weightInput?.value) {
                    return;
                }
                let weightValue = weightInput.value;


                let qtyInput = row.querySelector('#product-quantity');
                if (!qtyInput?.value) {
                    return;
                }
                let qtyValue = qtyInput.value;

                let totalWeightInput = row.querySelector('#total-weight');
                totalWeightInput.value = calculateTotalWeight(qtyValue, weightValue);

                let weightCost = row.querySelector('input[name="weight-cost"]');
                weightCost.value = totalWeightInput.value * parseFloat(target.value);

                let tp = row.querySelector('input[name="product-total-price"]');

                const landedCostInput = row?.querySelector('input[name="landed-cost"]');
                landedCostInput.value = calculateLandedCost(tp.value, qtyValue, weightCost.value);

            });
            overallWeightChargeCalculator();
            NetCostCalculator();
            plusMoneyTransferFees();
            break;
        default:
            break;
    }


});

// #endregion

const pattern = /^\d+(\.\d+)?$/;
const qtyPattern = /^\d+$/;

// #region Table Inputs Event Listner

tableBody.addEventListener('input', (event) => {
    let inputTarget = event.target;
    if (inputTarget.tagName === 'INPUT') {
        const currentTr = inputTarget.closest('tr');

        const qtyInput = currentTr?.querySelector('input[name="product-quantity"]');
        const totalPriceInput = currentTr?.querySelector('input[name="product-total-price"]');
        const unitPriceInput = currentTr?.querySelector('input[name="product-unit-price"]');
        const totalWeightCharge = currentTr?.querySelector('input[name="weight-cost"]');
        const landedCostInput = currentTr?.querySelector('input[name="landed-cost"]');



        let qtyValue = qtyInput?.value;
        if (!qtyPattern.test(qtyValue)) {
            qtyInput.value = 0;
            // .setCustomValidity("Invalid .....")
            return;
        }

        if (!pattern.test(unitPriceInput.value)) {
            unitPriceInput.value = 0;
            unitPriceInput.setCustomValidity("Invalid Unit Price.");
            let validationMessage = unitPriceInput.validationMessage;
            return;
        }

        totalPriceInput.value = calculateTotalPrice(qtyValue, unitPriceInput.value);

        const freightChargeInput = document.querySelector('#freight-unit')
        let freightCharge = freightChargeInput?.value;
        if (!pattern.test(freightCharge)) {

            // freightChargeInput.setCustomValidity("Invalid Freight Charge.");
            // let validationMessage = freightChargeInput.validationMessage;

            // freightChargeInput.classList.remove('input-valid');
            //freightChargeInput.classList.add('input-danger');
            console.log('invalid freight charge');
            return;
        }

        switch (inputTarget.id) {
            case 'product-weight':
            case 'product-quantity':
                const weightInput = currentTr?.querySelector('input[name="product-weight"]');
                let weightValue = weightInput?.value;

                if (!pattern.test(weightValue)) {
                    weightInput.value = 0;
                    break;
                }


                let totalWeight = currentTr?.querySelector('input[name="total-weight"]');
                totalWeight.value = calculateTotalWeight(qtyValue, weightValue);

                const weightFees = document.querySelector('#freight-unit');
                if (!pattern.test(weightFees.value)) {
                    totalWeightCharge.value = 0;
                    // Should make the freight input value zero also?
                    return;
                }
                totalWeightCharge.value = calculateTotalWeight(qtyValue, weightValue) * parseFloat(weightFees.value);
                break;

            case 'product-unit-price':

                if (!pattern.test(inputTarget.value)) {
                    inputTarget.value = 0;
                    totalPriceInput.value = 0;
                    // DANGER INPUT STYLE
                    break;
                }

                totalPriceInput.value = calculateTotalPrice(qtyValue, inputTarget.value);
                break;
        }

        landedCostInput.value = calculateLandedCost(totalPriceInput.value, qtyValue, totalWeightCharge.value);

        lineTotalCalculator();
        overallWeightCalculator();
        overallWeightChargeCalculator();
        NetCostCalculator();
        plusMoneyTransferFees();
    }
});
// #endregion


// #region Reset & Delete Buttons

tableBody.addEventListener('click', (event) => {
    let buttonTarget = event.target;
    if (buttonTarget.tagName === 'BUTTON') {
        let currentTr = buttonTarget.closest('tr');

        switch (buttonTarget.id) {
            case 'reset-btn':
                let inputs = currentTr.querySelectorAll('input');
                inputs.forEach((input) => {
                    input.value = 0;
                });
                break;
            case 'delete-btn':
                if (currentTr && currentTr.parentNode) {
                    currentTr.parentNode.removeChild(currentTr);
                }
                break;
        }
        lineTotalCalculator();
        overallWeightCalculator();
        overallWeightChargeCalculator();
        NetCostCalculator();
        // plusMoneyTransferFees();
        moneyTransferHelper(0.00);
    }
});
// #endregion


// #region Line Total 

const overallPriceAmount = document.querySelector('.price-sum-overall');
const overallWeightAmount = document.querySelector('.total-weight-overall');
const overallWeightChargeAmount = document.querySelector('.total-weight-Charge-overall');
const overallNetCost = document.querySelector('.total-net-cost');
const totalWithPercentage = document.querySelector('.total-with-percentage');

function lineTotalHelper() {
    const tp = document.querySelectorAll('#product-total-price');
    let tpSum = 0;

    tp.forEach((element) => {
        if (element) {
            let value = element?.value;
            let parsedVal = parseFloat(value);
            tpSum += parsedVal;
        }
    });
    return tpSum;
}

function lineTotalCalculator() {
    let tpSum = lineTotalHelper();

    overallPriceAmount.textContent = '';
    let txtNode = document.createTextNode(`${tpSum.toFixed(2)}`);
    overallPriceAmount.appendChild(txtNode);
}


function overallWeightHelper() {
    const tw = document.querySelectorAll('#total-weight');
    let twSum = 0;

    tw.forEach((element) => {
        if (element) {
            let value = element?.value;
            let parsedVal = parseFloat(value);
            twSum += parsedVal;
        }
    });
    return twSum;
}

function overallWeightCalculator() {
    let twSum = overallWeightHelper();

    overallWeightAmount.textContent = '';
    let txtNode = document.createTextNode(`${twSum.toFixed(2)}`);
    overallWeightAmount.appendChild(txtNode);
}




function overallChargeHelper() {
    const wa = document.querySelectorAll('#weight-cost');
    let waSum = 0;

    wa.forEach((element) => {
        if (element) {
            let value = element?.value;
            let parsedVal = parseFloat(value);
            waSum += parsedVal;
        }
    });
    return waSum;
}
function overallWeightChargeCalculator() {
    let waSum = overallChargeHelper();

    overallWeightChargeAmount.textContent = '';
    let txtNode = document.createTextNode(`${waSum.toFixed(2)}`);
    overallWeightChargeAmount.appendChild(txtNode);
}


function netCostHelper() {
    let tpSum = lineTotalHelper();
    let waSum = overallChargeHelper();
    let netCostNoPerentage = tpSum + waSum;
    return parseFloat(netCostNoPerentage);
}
function NetCostCalculator() {
    let net = netCostHelper();

    overallNetCost.textContent = '';
    let txtNode = document.createTextNode(`${net.toFixed(2)}`);
    overallNetCost.appendChild(txtNode);
}


function moneyTransferHelper(finalValue) {
    totalWithPercentage.textContent = '';
    let txtNode = document.createTextNode(`${finalValue}`);
    totalWithPercentage.appendChild(txtNode);
}

function plusMoneyTransferFees(percentageValue) {
    let netC = netCostHelper();
    let x = percentageValue ? percentageValue : 0;
    if (netC > 0) {
        let pv = parseFloat(x);
        let finalCost = (netC) * (pv / 100) + (netC);
        moneyTransferHelper(finalCost.toFixed(2));
        return finalCost;
    }
    return 0;
}

//#endregion
