var cres;
var wres;
var url;
/*for (var i = 0; i < (gres.results).length; i++) {
  gres.results[i].name
}*/
function wsearch(){
  var name = document.querySelector('#name').value;
  name = name.replace(' ', '%20');
  var wurl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+name;
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
    var img = document.createElement('img');
    img.src = curl;
    console.log(img);
    document.body.appendChild(img);
  })
}
