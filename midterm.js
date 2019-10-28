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
  fetch(wurl, {
    method: 'GET'
  }).then(function(response){

    wres = response.json();
    url = wres[0][3][0];
    console.log(url);
    console.log(wres);
  }).then(create())
}

function create(){
  var curl = 'https://api.qrserver.com/v1/create-qr-code/?data=' +url + '&size=100x100';
  fetch(curl,{
    method: 'GET'
  }).then(function(response){
    cres= response;
    console.log(cres);
  })
}
