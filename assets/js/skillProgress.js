function showSkillLevel(SkillLevel) {
  var elem = document.getElementById("skill");   
  var elem2 = document.getElementById("skillBar"); 
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= SkillLevel) {
      clearInterval(id);
    } else {
      width++; 
      elem2.innerHTML=width
      elem.style.width = width + '%'; 
    }
  }
}