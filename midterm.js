
var url;
var img = new Image();
function wsearch(){
  var name = document.querySelector('#name').value;
  name = name.replace(' ', '%20');
  var wurl = 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search='+name;
  fetch(wurl)
  .then(function(response){
    return response.json();
  }).then(function(data){
    console.log(data);
    create(data);
  })
}

function create(src){
  url = src[3][0];
  console.log(url);
  var curl = 'https://api.qrserver.com/v1/create-qr-code/?data=' +url + '&size=100x100';
  fetch(curl)
  .then(function(response){
    img.src = curl;
    document.getElementById('p1').appendChild(img);
    var text = document.createElement('text');
    var oldtext = document.getElementById('p2');
    oldtext.innerHTML='';
    text.innerHTML = 'Searches generate QR for most relevant article';
    console.log(img);
    document.getElementById('p2').appendChild(text);
  })
}
