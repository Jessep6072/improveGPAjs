function processForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let currGPA = document.getElementById("currentGPA").value;
    let currCred = document.getElementById("currentCredits").value;
    let newCred = document.getElementById("newCredits").value;
    let GPAinc = document.getElementById("GPAincrease").value;

    let boolErr = "False";

    if(!/^[A-Za-z]+( [A-Za-z]+)*$/.test(name)){
        document.getElementById("nameErr").innerHTML = "Please enter a valid name.";
        boolErr = "True";
    }
    else{
        document.getElementById("nameErr").innerHTML = "";
    }

    if(!/^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z]+$/.test(email)){
        document.getElementById("emailErr").innerHTML = "Please enter a valid email.";
        boolErr = "True";
    }
    else{
        document.getElementById("emailErr").innerHTML = "";
    }

    if(!document.getElementById("agree").checked){
        document.getElementById("agreeErr").innerHTML = "Please verify that you agree.";
        boolErr = "True";
    }
    else{
        document.getElementById("agreeErr").innerHTML = "";
    }

    if(!/^[0-9].[0-9]+$/.test(currGPA) || currGPA < 0.0 || currGPA > 4.0){
        document.getElementById("currentGPAErr").innerHTML = "Please provide a valid GPA between 0.0 and 4.0 inclusive.";
        boolErr = "True";
    }
    else{
        document.getElementById("currentGPAErr").innerHTML = "";
        currGPA = parseFloat(currGPA);
    }

    if(!/^[0-9]+$/.test(currCred) || currCred < 0){
        document.getElementById("currentCreditsErr").innerHTML = "Please provide valid credit hours.";
        boolErr = "True";
    }
    else{
        document.getElementById("currentCreditsErr").innerHTML = "";
        currCred = parseInt(currCred);
    }

    if(!/^[0-9]+$/.test(newCred) || newCred <= 0){
        document.getElementById("newCreditsErr").innerHTML = "Please provide a valid number.";
        boolErr = "True";
    }
    else{
        document.getElementById("newCreditsErr").innerHTML = "";
        newCred = parseInt(newCred);
    }

    if(!/^[0-9].[0-9]+$/.test(GPAinc) || GPAinc < 0){
        document.getElementById("GPAincreaseErr").innerHTML = "Please provide a valid number."
        boolErr = "True";
    }
    else{
        document.getElementById("GPAincreaseErr").innerHTML = "";
        GPAinc = parseFloat(GPAinc);
    }

    let currentGPAhours = currGPA * currCred;
    let desiredGPA = currGPA + GPAinc;
    let desiredGPAhours = desiredGPA * (currCred + newCred);
    let GPAhoursincrease = desiredGPAhours - currentGPAhours;
    let newGPA = GPAhoursincrease / newCred;
    newGPA = newGPA.toString();

    if(boolErr === "True"){
        document.getElementById("amount").innerHTML = "????";
    }
    else{
        document.getElementById("amount").innerHTML = newGPA;
    }

}