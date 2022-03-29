#include json2.js
#target illustrator

var data = [];
var selection = app.activeDocument.selection;

var file;
file = File.saveDialog('Export Positions Points');
file.open('w');

for(var i = 0; i < selection.length; i++){
  if(selection[i].typename == "PathItem"){
      var obj = selection[i];

      data.push({ 
        point: i,
        width : obj.width,
        height : obj.height,
        centerX: obj.position[0] + obj.width /2,
        centerY: -obj.position[1] + obj.height /2,
      });
  }
}

var json = JSON.stringify(data);

file.write(json);
file.close();