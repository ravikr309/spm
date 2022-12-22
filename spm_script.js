/***********first j_script for the details ****************/
function customer_orderid(){
            let customer_name=prompt("Please Enter Your Name:");
            if(customer_name==""){
                alert("enter the name please");
                return customer_name;
            }
            let phone_no=prompt("Please Enter Your Valid Phone number:");
                     //add the program if the phone no. be less than 10.
            if(phone_no && customer_name != null){
                document.getElementById("phn_no").innerHTML="Thank you!"+" "+customer_name+" " +"You can continue scanning"
            
            }

        }
    /***************end of the first Script form*************************/
 