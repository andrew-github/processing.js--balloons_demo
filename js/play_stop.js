var processingInstance;
var can_shot = true;

function startSketch() {
  can_shot = true;
  switchSketchState(true);
}

function stopSketch() {
  can_shot = false;
  switchSketchState(false);
}

function switchSketchState(on) {
  if(!processingInstance) {
    processingInstance = Processing.getInstanceById('targetcanvas');
  }

  if(on) {
    processingInstance.loop();  // call Processing loop() function
  } else {
    processingInstance.noLoop(); // stop animation, call noLoop()
  }
}

