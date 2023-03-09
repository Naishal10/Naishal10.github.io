
function showNext(index){

  
    var imagfe = document.getElementsByClassName('displayStyle');
   
  
      imagfe[index].style.display = 'none';
      imagfe[index+1].style.display = 'block';
      
    
   
  
  }
  
  function showPrevious(index){
  
    var imagfe = document.getElementsByClassName('displayStyle');
   
      imagfe[index].style.display = 'none';
      imagfe[index-1].style.display = 'block';
      
  }
  