function validate() 
{
    var fname = document.f1.t1.value;
    var lname = document.f1.t2.value;
    var pass = document.f1.t3.value;
    var cpass = document.f1.t4.value;
    var gen = document.f1.r1.value;
    var mob = document.f1.t5.value;

        var i;
        for (i = 0; i < fname.length; i++) 
        {
            if (!isNaN(fname.charAt(i))) 
            {
                alert("Numeric value not accepted in first name");
                return false;
                break;
            }
        }
        for (i = 0; i < lname.length; i++) 
        {
            if (!isNaN(lname.charAt(i))) 
            {
                alert("Numeric value not accepted in last name");
                return false;
                break;
            }
        }

        if(pass.length<6 || pass.length>20)
        {
            alert("Enter password between 6-20 characters");
            return false;
        }

        if(cpass!=pass)
        {
            alert("Password do not match");
            return false;
        }

    var x;
    var y;
    if(mob.length==12)
    {
        x=mob.indexOf("-");
        y=mob.lastIndexOf("-");
        if((y-x)==4)
        {
            return true;
        }
        else
        {
            x=mob.indexOf(".");
            y=mob.lastIndexOf(".");
            if((y-x)==4)
            {
                return true;
            }
            else
            {
                x=mob.indexOf(" ");
                y=mob.lastIndexOf(" ");
                if((y-x)==4)
                {
                    return true;
                }
                else 
                {
                    alert("Mobile number format invalid");
                    return false;
                }
            }
        }
    }
    else
    {
        alert("Mobile number invalid");
        return false;
    }            
}
function display_c()
{
    mytime=setTimeout('display_ct()',1000);
}

function display_ct() 
{
    var x = new Date()
    document.getElementById('ct').innerHTML = x;
    display_c();
}
setTimeout(function() { alert("3 minutes passed"); }, 180000);