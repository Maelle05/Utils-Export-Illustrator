#include json2.js
#target illustrator

var data = []
var selection = app.activeDocument.selection;

var file = File.saveDialog('Export Curve Points Position');
file.open('w')

for (var i = 0; i < selection.length; i++) {
  var item = selection[i];
  if (item.typename === "PathItem") {

    var points = item.pathPoints;
    for (var j = 0; j < points.length; j++) {
      var documentPoint = points[j].anchor;
      var artboardPoint = app.activeDocument.convertCoordinate(documentPoint, app.coordinateSystem, CoordinateSystem.ARTBOARDCOORDINATESYSTEM);

      data.push({ 
        point: j,
        x: documentPoint[0],
        y: -documentPoint[1],
      });
    }
  }
}

var json = JSON.stringify(data);

file.write(json);
file.close();