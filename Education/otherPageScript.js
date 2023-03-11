/* OuterPages */
var imagfe = document.getElementsByClassName('outerPages');

function nextPage(index){

    if(index==imagfe.length-1){
        imagfe[index].style.display = 'none';
        imagfe[0].style.display = 'block';
    }else{
        imagfe[index].style.display = 'none';
        imagfe[index+1].style.display = 'block';
    }
    
}
  
  function previousPage(index){

    if(index==0){
        imagfe[index].style.display = 'none';
        imagfe[imagfe.length-1].style.display = 'block';
    }else{
        imagfe[index].style.display = 'none';
        imagfe[index-1].style.display = 'block';
    }
  }
  
  function openPage(index){

    imagfe[index].style.display = 'block';
      
  }
  

  /* Custom Cursor */
var kursorx = new kursor({
    type: 4,
   
  })
  
  var kursorx1 = new kursor({
    type: 4,
    color:  rgb(255, 254, 249),
  
  })

 