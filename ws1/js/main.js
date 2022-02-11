var myInput= document.getElementById("myInput"),
myBtu= document.getElementById("myBtu");
var list = document.getElementById("list");

myBtu.onclick = function()
{
var list = document.getElementById("list");
var deletebtn = document.createElement("button");
var myli=document.createElement("li");
var task = document.createElement("span")
list.appendChild(myli);
myli.appendChild(deletebtn);
myli.appendChild(task);
deletebtn.innerHTML="Delete";
task.innerHTML= myInput.value;
// myli.innerHTML=myInput.value;
myInput.value="";

deletebtn.onclick = function()
{
    this.parentNode.remove();
}
}
// محتوى داخل input بعد الضغط على myBtu  يظهر المحتوى على شكل UL
