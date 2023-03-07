names_array=[]
function submit()
{
  for(j=1;j<=4;j++)
  {
    var student=document.getElementById("student_"+j).value
    names_array.push(student)
  }
    
   
 
    document.getElementById("display_with_comma").innerHTML=names_array
    var store= names_array.join(" ")
    document.getElementById("display_without_comma").innerHTML=store

    document.getElementById("sort").style.display="inline-block"
    console.log("push")
    
    document.getElementById("submit").style.display="none"
}
function sort ()
{
  names_array.sort()  
  document.getElementById("display_with_comma").innerHTML=names_array
  var save=names_array.join(" ")
  document.getElementById("display_without_comma").innerHTML=save


}





