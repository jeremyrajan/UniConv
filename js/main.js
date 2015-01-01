/*Thanks to https://www.npmjs.com/package/special-html */
function convertString(oldstring) {
  var newstring = '',
    i = 0,
    l = oldstring.length,
    character

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

//convertion for string
function startConvString() {
  var lines = $('#orig').val().split('\n');
  if (lines != '') {
    var temp;
    for (var i = 0; i < lines.length; i++) {
      temp = temp == undefined ? convertString(lines[i]) + '\n------\n' : temp + convertString(lines[i]) + '\n------\n';
      $('#conv').val(temp);
    }
  } else {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    alert('Oops! Help us fill up the info for convertion!');
    $('#conv').val("");
    $('#nono').removeClass('hidden');
    setTimeout(function() {
      $('#nono').addClass('hidden');
    }, 5000)
  }
}

//convertion for email template
function startConvEmail() {
  var lines = $('#orig').val().split('\n');
  if (lines != '') {
    var temp;
    for (var i = 0; i < lines.length; i++) {
      temp = temp == undefined ? convertString(lines[i]) : temp + convertString(lines[i]);
      $('#conv').val(temp);
      $('#prev_btn').removeClass('hidden');
    }
  } else {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    alert('Oops! Help us fill up the info for convertion!');
    $('#conv').val("");
    $('#nono').removeClass('hidden');
    setTimeout(function() {
      $('#nono').addClass('hidden');
    }, 5000)
  }
}


//main convertion click start
function startConv() {
  var opt = $('#string').is(":checked");

  if (opt == true) {
    startConvString();
  } else {
    startConvEmail();
  }

}


//watch the radio btns
function optChk() {
  var opt = $('#string').is(":checked");

  if (opt == true) {
    $('#orig').attr('placeholder', 'Strings to be converted line by line');
    $('#conv').attr('placeholder', 'Converted String(s)');
  } else {
    $('#orig').attr('placeholder', 'Email template to be converted');
    $('#conv').attr('placeholder', 'Converted Email');
  }

  $('#orig').val("");
  $('#conv').val("");
  $('#prev_btn').addClass('hidden');
  $('#preview').addClass('hidden');

}


//live preview
function livePrev() {
  $('#preview').removeClass('hidden');
  $('#preview').slideDown();
  $('html, body').animate({
    scrollTop: $('#iframe_preview').offset().top
  }, 2000);
  var html = $('#conv').val();
  $('#iframe_preview').attr('src', 'data:text/html;charset=utf-8,' + encodeURI(html));
}
