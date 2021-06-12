name_of_family_member_array=[]
function next(){
    var name1=document.getElementById("name_member_1").value;
    var name2=document.getElementById("name_member_2").value;
    var name3=document.getElementById("name_member_3").value;
};
var images =
["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQteUivPuNCM2RH0E5oh99GlpJBy-GKIg8XVQ&usqp=CAU";
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT60e9K6IyemM2eDz-OuKoi5ybdE-9vTvu4Ig&usqp=CAU";
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL96ysA1Luf0HCFiPiGk2s0S7DLiGGUY8CzA&usqp=CAU";]

var i = 0
function next()
{
i++
var number_number_of_family_member_in_array = 3
if( i > number_of_family_member_in_array)
{
    i = 0
}

var nextimage =image[1];
var nextname =name[1];
document.getElementById("family_member_image").src =nextimage;
document.getElementById("family_member_name").innerHTML =nextname;
};