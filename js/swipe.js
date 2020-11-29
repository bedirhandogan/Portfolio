let animate = document.querySelector(".background");
let about = document.querySelector(".about");
let profile = document.querySelector(".profile");
let skills = document.querySelector(".skills");
let project = document.querySelector(".project");
let btn = document.querySelector(".btn");

function down1() {
  
  animate.className = "background hide";
  
  profile.className = "profile anime";
  about.className = "about anime";
  btn.innerHTML = '<i class="fas fa-angle-up up" onclick="up1()"></i><i class="fas fa-angle-down down" onclick="down2()"></i>';
  
}

function up1() {
  
 setTimeout(function () {
   animate.className = "background";
 }, 800);
 
 profile.className = "profile anime2";
 about.className = "about anime2";
 btn.innerHTML = '<i class="fas fa-angle-down down pos" onclick="down1()"></i>';
  
}

function down2() {
  about.className = "about anime3";
  skills.className = "skills anime";
  btn.innerHTML = '<i class="fas fa-angle-up up" onclick="up2()"></i><i class="fas fa-angle-down down" onclick="down3()"></i>';
  
}

function up2() {
  
 about.className = "about anime4";
 skills.className = "skills anime2";
   btn.innerHTML = '<i class="fas fa-angle-up up" onclick="up1()"></i><i class="fas fa-angle-down down" onclick="down2()"></i>';
  
}

function down3() {
  
 skills.className = "skills anime3";
 project.className = "project anime";
   btn.innerHTML = '<i class="fas fa-angle-up up pos-2" onclick="up3()"></i>';
  
}

function up3() {
  
 skills.className = "skills anime4";
 project.className = "project anime2";
   btn.innerHTML = '<i class="fas fa-angle-up up" onclick="up2()"></i><i class="fas fa-angle-down down" onclick="down3()"></i>';
  
}