document.addEventListener('DOMContentLoaded', function(){
    var MasterController = require('./controller/Master');

    var containerElement = document.querySelector('.slideMaster3d');

    new MasterController(containerElement);
});
