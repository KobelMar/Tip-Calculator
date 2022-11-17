document.getElementById('button-calculate').addEventListener('click', function(){

    let billAmount = document.getElementById('billAmount').value;
    let qualityService = document.getElementById('quality-service').value;
    let numberPeople = document.getElementById('number-people').value;
    console.log(numberPeople);

    if (billAmount === '') {
        alert('Enter Bill Amount');
    }  else if (qualityService === '')  {
        alert('Enter Service Quality');
    }  else if (numberPeople === '' || numberPeople === '0') {
        alert('Enter Number of People');
    }  else  {
        appendTip(computeTip());
        displayResult();

        // keep function inside outer function as some values from outerF are required.
        function computeTip() {
            let tip = billAmount * qualityService / numberPeople;
            return tip;
        }
    }
});

function displayResult() {
   document.getElementById("result").classList.remove('d-none');
}

function appendTip(tip) {
    document.getElementById('amount-tip').innerHTML = tip;
}