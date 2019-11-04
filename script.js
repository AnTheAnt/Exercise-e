
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var gifdisplay = document.querySelector('.gifdisplay');
var gif1 = 'images/lion_1.gif';
var gif2 = 'images/lion_2.gif';
console.log('hi');

function change() {
  gifdisplay.src = (gifdisplay.src == gif1)? gif2 : gif1;
}
