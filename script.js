// function area(base,height)
//         {
//             return(1/2*base*height);
//         }
//              console.log( area(4,5));
function calculateArea() {
  mydiv = document.getElementById("mydiv");
  mydiv.innerHTML  = '';
    side1 = parseFloat(document.getElementById('side1').value);
    side2 = parseFloat(document.getElementById('side2').value);
    side3 = parseFloat(document.getElementById('side3').value);
   
   const semiPerimeter = (side1 + side2 + side3) / 2;
   const area = Math.sqrt((semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3)));
   // const area = 5;


    document.getElementById('Area').value = area.toFixed(2);
    // return area;
// console.log(area);
    for(let i=1; i<=10; i++){
      const loopdiv = document.createElement("input");
      loopdiv.value = area;
      mydiv.appendChild(loopdiv);
    }

  }


  function checkInput(){
    a = parseFloat(document.getElementById('side1').value);
    b = parseFloat(document.getElementById('side2').value);
    c = parseFloat(document.getElementById('side3').value);
    if(a>b && a>c)
    {
      if(a<(b+c)){
      document.getElementById('calcBtn').removeAttribute('disabled', '');
      }
      else{
        document.getElementById('calcBtn').setAttribute('disabled', '');
      }
    }
    else if(b>a && b>c){
      if(b < (a+c)){
      document.getElementById('calcBtn').removeAttribute('disabled', '');
      }
      else{
        document.getElementById('calcBtn').setAttribute('disabled', '');
      }
    }
    else{
      if(c<(a+b)){
      document.getElementById('calcBtn').removeAttribute('disabled', '');
      }
      else{
        document.getElementById('calcBtn').set+Attribute('disabled', '');
      }
    }
    // if((a > (b+c)) || (b> (a+c)) || (c> (a+b))){
    //   document.getElementById('calcBtn').removeAttribute('disabled', '');
    // }
    // else{
    //   document.getElementById('calcBtn').setAttribute('disabled', '');
    // }
  }
// console.log (calculateArea(2,4,8));  
            
