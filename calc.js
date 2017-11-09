/*window.addEventListener('load', function(){
    function dailyCalories(){
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var result = 0;
    if(document.getElementById("male").checked){
        if(age<=18){
        result = (17.5*weight) + 651
        }else if(age>18 && age<=30){
            result = (15.3*weight) + 679
        }else if(age>30 && age<=60){
            result = (11.6*weight) + 879
        }else if(age>60){
            result = (13.5*weight) + 487
        }
    }else if(document.getElementById("female").checked){
        if(age<=18){
        result = (12.2*weight) + 749
        }else if(age>18 && age<=30){
            result = (14.7*weight) + 496
        }else if(age>30 && age<=60){
            result = (8.7*weight) + 829
        }else if(age>60){
            result = (10.5*weight) + 596
        }
    }
    return result;
    };

    var daily = dailyCalories().value;
});*/

function dailyCalories(){
    var vanus = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var result = 0;
    if(document.getElementById("HB").checked){
        if(document.getElementById("male").checked){
            result = 88.362 + (13.397*weight) + (4.799*height) - (5.677*vanus)
        }else if(document.getElementById("female").checked){
            result = 447.593 + (9.247*weight) + (3.098*height) - (4.330*vanus)
        }
    }else if(document.getElementById("MS").checked){
        if(document.getElementById("male").checked){
            result = 10*weight + 6.25*height - 5*vanus + 5
        }else if(document.getElementById("female").checked){
            result = 10*weight + 6.25*height - 5*vanus -161
        }
    }
    return result;
};

function minCalories(){
        document.getElementById("dailyMin").innerHTML = Math.round(dailyCalories()) + ' kalorit';
};

function activeCalories(){
    var dailyCal = 0;
    if(document.getElementById("op1").checked){
        dailyCal = dailyCalories()*1.25;
    }else if(document.getElementById("op2").checked){
        dailyCal = dailyCalories()*1.45;
    }else if(document.getElementById("op3").checked){
        dailyCal = dailyCalories()*1.7;
    }else if(document.getElementById("op4").checked){
        dailyCal = dailyCalories()*2.05;
    }
    return dailyCal;
 };

 function actCalories(){
     document.getElementById("actCalories").innerHTML = Math.round(activeCalories()) + ' kalorit';
 }

 var user = prompt("Sisesta oma nimi, et saaks andmeid salvestada");

 if(user == null || user == ""){
     document.getElementById("save").style.visibility = 'hidden';
 }else{
     document.getElementById("save").style.visibility = 'visible';
 }

//var vanus = age.value;
var kaal = weight.value;
var pKalor = Math.round(dailyCalories());
var tKalor = Math.round(activeCalories());
var aeg = Date();
document.getElementById("save").addEventListener("click", save);
function save(){
    function userData(userId, age, weight, dailyCal, actCalories, date){
        firebase.database().ref('user/' + userId).set({
            userId: user,
            vanus: age,
            kaal: weight,
            pKalor: dailyCal,
            tKalor: actCalories,
            aeg: date
        });
    };
}

//document.getElementById("load").addEventListener("click", load);
//function load(){
   /*  var hst = document.getElementById("andmed");
    var retrivedData = JSON.parse(localStorage.getItem("userInfo"));
    for (var i = 0; i<retrivedData.lenght; i++){
        hst.innerHTML += "<tr><td>" + retrivedData[i].name + "</td><td>" + retrivedData[i].age + "</td><td>" + retrivedData[i].weight + "</td><td>" + retrivedData[i].dailyCal + "</td><td>" + retrivedData[i].actCalories + "</td><td>" + retrivedData[i].date + "</td></tr>";
    } */
//};



/*function load(){
    //var data = JSON.parse(localStorage.getItem('userInfo'));
    document.getElementById("andmed").innerHTML = localStorage.userInfo;
};*/

 var userInfo = {};
 userInfo.name = user;
 userInfo.age = age;
 userInfo.weight = weight;
 userInfo.dailyCal = Math.round(dailyCalories());
 userInfo.actCalories = Math.round(activeCalories());
 console.log(userInfo);
 localStorage.setItem('userInfo', JSON.stringify(userInfo));
 console.log(JSON.parse(localStorage.getItem('userInfo')));