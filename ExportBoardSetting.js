#include json2.js
#target illustrator

var doc = app.activeDocument;
var artboard = doc.artboards[0];
var abBounds = artboard.artboardRect;
var data = [{
  left: abBounds[0],
  top: abBounds[1],
  right: abBounds[2],
  bottom: abBounds[2]
}];

var file;
file = File.saveDialog('Export Positions Points');
file.open('w');


var json = JSON.stringify(data);

file.write(json);
file.close();