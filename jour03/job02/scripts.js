$(document).ready(function(){
  $("#melange").click(function()
  {
      $('ul').each(function(){
            var $ul = $(this);
            var $liArr = $ul.children('li');
            $liArr.sort(function(a,b){
                  var rand = parseInt( Math.random()*5);
                  var isOddOrEven = rand%2;
                  var isPosOrNeg = rand>5 ? 1 : -1;
                  return( isOddOrEven*isPosOrNeg );
            })
            // append list items to ul
            .appendTo($ul);            
      });
  }) 


  $('#list').click(function(event){    
  var id = event.target.id; 
  console.log('id = ' + id);      });

  $("#reset").click(function()
  {
    
      $('ul').each(function(){
              var $ul = $(this);
            var $liArr = $ul.children('li');
            console.log($liArr)
            $liArr.sort(function(a,b){
                  return a.id - b.id
            })
            .appendTo($ul);            
      });
  })



  $("#gauche").click(function()
  {   
    
  })




});