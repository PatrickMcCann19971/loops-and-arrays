/*
to place/spawn a piece using JavaScript:

var piece = document.createElement('div');            // create an empty div
piece.setAttribute('class', 'piece');                 // assign the div class="piece"
document.getElementById('board').appendChild(piece);  // add the div to the id="board"
piece.style.top = '0px';                              // assign the top/y position
piece.style.left = '0px';                             // assign the left/x position
*/

var row1 = 0
var row2 = 0


for (var i = 0; i <= 20; i++) {
    document.write(i);
    var piece = document.createElement('div');            
    piece.setAttribute('class', 'piece');                 
    document.getElementById('board').appendChild(piece);  
 
 if (i < 6) {
    piece.style.top = '0';
    piece.style.left = 100*row1 + 'px';
    row1 ++;
    }
    
if (i > 6) {
    piece.style.top ='100px';
    piece.style.left = 100*row2 + 'px';
    row2 ++;
    
}
 
}