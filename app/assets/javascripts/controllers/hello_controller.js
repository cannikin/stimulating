"use strict";

App.stimulus.register("hello", class extends Stimulus.Controller {
  greet() {
    console.log("Hello " + this.text);
  }
});
