function envia(){
  var tel = $("input[name='tel']").val();
  var msg = 'https://web.whatsapp.com/send?phone=55';
  var midia = $("input[name='midia']").val();
  //source=&data= 
  //https://api.whatsapp.com/send?phone=5511989206167&text=&source=C%3a%5cfakepath%5c1video.mp4&data=
  window.open(msg+tel);
  $("input[name='tel']").val('');
  //window.open(msg+tel+'&source='+midia);
}

$(":button").on("click", () =>{
  envia();
});

$("input[name='tel']").on('keypress',function(e) {
  if(e.which == 13) {
      envia();
  }
});