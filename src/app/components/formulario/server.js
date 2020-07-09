var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

//app.set('port', process.env.PORT || 3000);


var adn=[6];
app.post('server.js', function(req, res){
  adn [0]= req.body.adn1;
  adn [1]= req.body.adn2;
  adn[2] = req.body.adn3;
  adn[3] = req.body.adn4;
  adn[4] = req.body.adn5;
  adn[5] = req.body.adn6;
  
  let cadenaADN = []
        for(let x = 0;x < adn.length; x++)  {
            for(let y = 0;y < adn.length; y++) {
                if(adn[x].charAt(y) != 'A' && adn[x].charAt(y) != 'C' && adn[x].charAt(y) != 'G' && adn[x].charAt(y) != 'T'){
                    cadenaADN= adn;
                }
                else{
                    
                }
            }
            
        }
        console.log(cadenaADN);

  var html = 'Tu Fruta Favorita es: ' + cadenaADN+ '.<br>' +
			 '<a href="/">Probar de nuevo.</a>';
  res.send(html);
});

app.listen(app.get('port'), function(){
  console.log( 'Express se ha iniciado en http://localhost:' +
    app.get('port') + '; presione Ctrl-C para cerrar el servidor.' );
});