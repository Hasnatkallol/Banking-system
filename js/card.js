const mainImg = document.getElementById('mainImg');
const smallImg1 = document.getElementById('smallImg1');
const smallImg2 = document.getElementById('smallImg2');
const smallImg3 = document.getElementById('smallImg3');
const smallImg4 = document.getElementById('smallImg4');

smallImg1.onclick = function(){
    mainImg.src=smallImg1.src;
  }
  smallImg2.onclick = function(){
    mainImg.src=smallImg2.src;
  }
  
  smallImg3.onclick = function(){
    mainImg.src=smallImg3.src;
  }
  smallImg4.onclick = function(){
    mainImg.src=smallImg4.src;
  }