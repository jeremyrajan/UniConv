/*Thanks to https://www.npmjs.com/package/special-html */

function convertString (oldstring) {
  var newstring = ''
  , i = 0
  , l = oldstring.length
  , character

  for (i; i < l; i += 1) {
    character = oldstring.charCodeAt(i)
    if (character > 127) {
      newstring += '&#' + character + ';'
    } else {
      newstring += oldstring[i]
    }
  }


  return newstring
};


function startConv(){
  var lines = $('#orig').val().split('\n');
  if(lines != ''){
    var temp;
    for(var i = 0;i < lines.length;i++){
      temp = temp == undefined ? convertString(lines[i]) + '\n------\n' :  temp + convertString(lines[i]) + '\n------\n';
      $('#conv').val(temp);
    }
  }else{
    $('html, body').animate({scrollTop : 0},800);
    alert('Oops! Help us fill up the info for convertion!');
    $('#conv').val("");
    $('#nono').removeClass('hidden');
    setTimeout(function(){
      $('#nono').addClass('hidden');
    }, 5000)
  }
}
