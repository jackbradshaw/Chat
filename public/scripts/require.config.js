requirejs.config({
  baseUrl: 'scripts',
//  shim: {
  //    "jquery": []
//  },
  paths: {
    "jquery": "../jquery-1.11.3.min"
  }
});
requirejs(["main"]);
