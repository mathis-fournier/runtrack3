$(document).ready(function(){
    // RANDOM
    $('tr').each(function(){
        var tr = $(this);
        var tdArr = tr.children('td');
        tdArr.sort(function(a,b){
              var rand = parseInt( Math.random()*5);
              var isOddOrEven = rand%2;
              var isPosOrNeg = rand>5 ? 1 : -1;
              return( isOddOrEven*isPosOrNeg );
            })
    .appendTo(tr);
});


const rows = document.querySelectorAll("tr");
const result = Array.from(rows).map(row => {
  const cells = row.querySelectorAll("td");
  return Array.from(cells).map(td => {
    const img = td.querySelector("img");
    return img ? 1 : 0;
  });
});
console.log(result);



const tds = document.querySelectorAll("td");
$('#container').click(function(event) { 
    const clickedTd = event.target.closest("td");
    console.log(clickedTd);
    const img = clickedTd.querySelector("img");
    console.log(Array.from(tds));
    if (!img) return;

    const emptyTd = Array.from(tds).find(td => !td.querySelector("img"));
    if (img) {
    emptyTd.appendChild(img);   
    }
});


});