class Model{
  constructor (){
    this.view = null;
    this.number = 0;
  }
  
  setView (v){
    this.view = v;
  }
  
  incrementNumber(){
    this.number++;
    this.view.updateDisplay(this.number);
    
  }
}

class Controller {
  constructor(m){
    this.model = m;
  }
  
  handleKeyEvent(){
    this.model.incrementNumber();
  }
}

class View {
  constructor (){
    
  }
  buildUI(){
    console.log("built ui");
  }
  
  updateDisplay(n){
    console.log(n);
  }
}


  // create my objects
  var m = new Model();
  var c = new Controller(m);
  var v = new View();
  m.setView(v);
  
  v.buildUI();
  m.incrementNumber();

  document.addEventListener("keydown", this.c.handleKeyEvent.bind(this.c)); // sets up the binding of the keydown to the controller
