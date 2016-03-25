
function Converttimeformat(hour,min,ampm) {
// var time = $("#starttime").val();
    var time = time;
    var hrs = hour;
    var mnts = min;
    var format = ampm;
    if (format == "PM" && hrs < 12) hrs = parseFloat(hrs) + parseFloat("12");
    if (format == "AM" && hrs == 12) hrs = parseFloat(hrs) - parseFloat("12");
    var hours = hrs.toString();
    var minutes = mnts.toString();
    
    return (hours + ":" + minutes);
    alert(hours + ":" + minutes);
}


function goBack() {
    window.history.back()
}

function hours_am_pm(time) {
        var hours = Number(time.match(/^(\d+)/)[1]);
        var min =  Number(time.match(/:(\d+)/)[1]);
        if (min < 10) min = "0" + min;
        if (hours < 12) {
            return hours + ':' + min + ' AM';
        } else {
            hours=hours - 12;
            hours=(hours < 10) ? '0'+hours:hours;
            return hours+ ':' + min + ' PM';
        }
    }

    function collect() {
  var ret = {};
  var len = arguments.length;
  for (var i=0; i<len; i++) {
    for (p in arguments[i]) {
      if (arguments[i].hasOwnProperty(p)) {
        ret[p] = arguments[i][p];
      }
    }
  }
  return ret;
}

$( "#rd" ).click(function() {
  alert( "Handler for .click() called." );
});
function validateTime(stHour,stMin,stAmPm, endHour,endMin, endAmPm)
 {

  

   if(stAmPm  === endAmPm)
   {
       //same meridian
       if(stHour == endHour && stMin == endMin)
       {

         return false;

       } 
       else 
       {
         if(stHour === endHour) 
         {
             
             if(stMin < endMin)
             {
               
              
               return true;
             }
             else
             {
               //invalid time
                return false;
             }
         }
         else if((stHour < endHour && endHour !=12 )|| stHour ==12)
         {
             //valid time 
          
             return true;
         }
         else
         {
           //invalid time
         
            return false;
         }
         
       }
   }

    else
   {
     //start and end time are in diff meridian


     if(stAmPm == 'AM' && endAmPm == 'PM')
     {
       
        if(endHour == '12')
        {
           return false;
        }
        else 
        {
           return true;
        }

     }
     else
     {
       return false;
     }


   }


 }

  function validateDate(stDate,stMonth,stYear)
  {
    

    var dateObj = new Date();     
    var currentDate = dateObj.getDate();
    var currentMonth = dateObj.getMonth()+1;
    var currentYear = dateObj.getFullYear();

    

    if(stYear == currentYear)
    {
      if(stMonth < currentMonth)
      {
        //alert("invalid month");
        return false;

      }
      else
      {
        if(stDate < currentDate)
        {
          //alert("invalid date");
          return false;
        }
        else
        {
          //alert("valid date");
          return true;
        }
      }
    }
    else if(stYear < currentYear)
    {
        //alert("invalid year");
        return false;

    }
    else 
    {
          //alert("valid date");
          return true;
    } 

  }
  




function validateForm (btnName,isText, isDate, isTime)
{

if( isText && isDate && isTime)
{
enableBtn(btnName,false);
}
else
{
enableBtn(btnName,true);
}

}

function enableBtn(btn,btnEnableValue)
{
$("#"+btn).prop("disabled",btnEnableValue);


}