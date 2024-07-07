let button = document.getElementById("calculate");
button.addEventListener('click', calculatBmi);

function calculatBmi(){
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let calculation = (weight / height**2) * 703;

    if(height != "" && weight != ""){
        let resultMessage = document.getElementById('result-message');
        let resultPercentage = document.getElementById('result-percentage');

        resultPercentage.innerText = calculation;
    }


}