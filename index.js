function reverseStr(str){
    let input = String(str);
    let split = input.split('');

    let reverse  = split.reverse();
    let join = reverse.join('');

    return join;
}

function isPalindrome(str){
  let reversestring = reverseStr(str);

    if(reversestring == str){
        return  true;
    }else{
        return false;
    }
    
}


function convertDateToString(date){

 let dateStr = {day: '',month: '',year: ''};

  if(date.day < 10){
    dateStr.day = '0' + date.day;
  }else{
    dateStr.day = date.day.toString();
  }

  if(date.month < 10){
    dateStr.month = '0' + date.month;
  }else{
    dateStr.month = date.month.toString();
  }

  dateStr.year = date.year.toString();

  return  dateStr;

}


function getAllDateFormats(date){
let dateStr = convertDateToString(date);

let ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
let mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
let yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
let ddmmyy =  dateStr.day + dateStr.month + dateStr.year.slice(-2);
let mmddyy =  dateStr.month + dateStr.day + dateStr.year.slice(-2);
let yymmdd =  dateStr.year.slice(-2) + dateStr.month + dateStr.day;

return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];

};

 
function checkPalindromeForAllDateFormats(date){
 
  let listOfPalindromes = getAllDateFormats(date);
  let flag = false;

  for(let i = 0; i < listOfPalindromes.length; i++){
      if(isPalindrome(listOfPalindromes[i])){
        flag = true;
        break;
      }
    }

    return flag;
  };

  function isLeapYear(year){
    if(year % 400 == 0) {
      return true;
    }
    if(year % 100 == 0){
      return false;
    }
    if(year % 4 == 0){
      return true;
    }else{
      return false;
    }
  }

  function getNextDate(date){
   let day = date.day + 1;
   let month = date.month;
   let year = date.year;

   let daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

   if(month === 2){ //check for february
    if(isLeapYear(year)){
      if(day > 29){
        day = 1;
        month++;
      }
    }else{
      if(day > 28){
        day = 1;
        month++; 
      }
    }
  }else{
    //check if the day exceeds the max days in month
    if(day > daysInMonth[month - 1]){
      day = 1;
      month++;
    }
  }

    if(month > 12){
     month = 1;
     year++;
    }

    return {day:day, month:month, year:year};

  }

  function getNextPalindromeDate(date){
   
  }

  let date = {day: '30',month: '4',year: '2022'};

console.log(getNextDate(date));
