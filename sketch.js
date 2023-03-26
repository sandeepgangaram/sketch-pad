// Setup Paper.js canvas
var canvas = document.getElementById("canvas");
paper.setup(canvas);

// Set up the tool
var tool = new paper.Tool();

// Set up the path
var path;

// Define the mouse down event
tool.onMouseDown = function (event) {
  // Create a new path and set its stroke color and width
  path = new paper.Path();
  path.strokeColor = "black";
  path.strokeWidth = 3;

  // Move the path to the starting point
  path.moveTo(event.point);
};

// Define the mouse drag event
tool.onMouseDrag = function (event) {
  // Add a new point to the path
  path.lineTo(event.point);

  // Smooth the path
  path.smooth();
};

// Define the mouse up event
tool.onMouseUp = function (event) {
  // Simplify the path
  path.simplify(10);
};

var text = new PointText(new Point(500, 500));
text.justification = "center";
text.fillColor = "black";
text.content = "The contents of the point text";
