//declaring variables century,year,month,day
var CC, YY, MM, DD, d, dayValue;
var names_of_the_day= ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var names_of_male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var names_of_female = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

//function to validate the entered data
function validate() {
  var genders = document.getElementsByName("gender");
  if( document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value >2100 || document.myForm.year.value <=1900) {
     alert( "Please provide a valid year of birth! eg 2019" );
     document.myForm.year.focus() ;
     return false;
  }
  else if( document.myForm.month.value == "" || isNaN( document.myForm.month.value ) ||
  document.myForm.month.value.length != 2 || document.myForm.month.value > 12  || document.myForm.month.value <= 0){
     alert( "Please provide your month of birth! between 1 and 12" );
     document.myForm.month.focus() ;
     return false;
  }
  else if( document.myForm.date.value == "" || isNaN( document.myForm.month.value ) ||
  document.myForm.month.value.length != 2|| document.myForm.date.value > 31 || document.myForm.date.value <= 0) {
     alert( "Please provide a valid date that you were born in!" );
     document.myForm.day.focus() ;
     return false;
  }
  else if(genders[0].checked==false && genders[1].checked==false ) {
      alert("You must select male or female");
      return false;
  }
  else{
    return true ;
  }

}
//function to calculate the day you were born
function calculateDay(){
  year = document.getElementById("year").value;
  CC = parseInt(year.substring(0,2));
  YY = parseInt(year.substring(2,4));
  MM = parseInt(document.getElementById("month").value);
  DD = parseInt(document.getElementById("date").value);
  d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
  console.log(d);
  return (Math.floor(d));
}

//function to get the gender
function getGender(){
  var genders = document.getElementsByName("gender");
  if(genders[0].checked == true){
    var gender = "male";
  }
  else if(genders[1].checked == true){
    var gender = "female";
  }
  else{
    return false;
  }
  switch(gender){
    case "male":
      if (dayValue == 1){
        alert("You were born on " +names_of_the_day[0] + " and Your akan name is " +names_of_male[0]+"!");
      }
      else if(dayValue == 2){
        alert("You were born on "+names_of_the_day[1] + " and Your akan name is " +names_of_male[1]+"!");
      }
      else if(dayValue == 3){
        alert("You were born on " +names_of_the_day[2]+ " and Your akan name is " +names_of_male[2]+"!");
      }
      else if(dayValue == 4){
        alert("You were born on "+names_of_the_day[3] +  " and Your akan name is " +names_of_male[3]+"!");
      }
      else if(dayValue == 5){
        alert("You were born on "+names_of_the_day[4] +  " and Your akan name is " +names_of_male[4]+"!");
      }
      else if(dayValue == 6){
        alert("You were born on "+names_of_the_day[5] +  " and Your akan name is " +names_of_male[5]+"!");
      }
      else if(dayValue == -0){
        alert("You were born on "+names_of_the_day[6] + " and Your akan name is " +names_of_male[6]+"!");
      }
    break;
    case "female":
      if (dayValue == 1){
        alert("You were born on "+names_of_the_day[0] + " and Your akan name is  " +names_of_female[0]+"!");
      }
      else if(dayValue == 2){
        alert("You were born on " +names_of_the_day[1] + " and Your akan name is " +names_of_female[1]+"!");
      }
      else if(dayValue == 3){
        alert("You were born on " +names_of_the_day[2] + " and Your akan name is " +names_of_female[2]+"!");
      }
      else if(dayValue == 4){
        alert("You were born on " +names_of_the_day[3] + " and Your akan name is " +names_of_female[3]+"!");
      }
      else if(dayValue == 5){
        alert("You were born on " +names_of_the_day[4] + " and Your akan name is " +names_of_female[4]+"!");
      }
      else if(dayValue == 6){
        alert("You were born on " +names_of_the_day[5] + " and Your akan name is " + names_of_female[5]+"!");
      }else if(dayValue == -0){
        alert("You were born on " +names_of_the_day[6] + " and Your akan name is " +names_of_female[6]+"!");
      }
    break
    default:

  }
}
function findName(){
  dayValue = calculateDay();
  getGender();
}
