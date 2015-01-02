var Controller = require('../framework/Controller');

var SlideModel = require('../model/Slide');

var SlideContainerView = require('../view/SlideContainer');
var NeighbourNavigationView = require('../view/NeighbourNavigation');

class MasterController extends Controller {
    constructor(element){
        this._initModels();
        super(element);
    }

    _initViews(){
        this._slideContainerView = new SlideContainerView({
            containerElement: this._element
        });

        this._neighbourNavigationView = new NeighbourNavigationView({
            containerElement: this._element
        });

        setInterval(this._updateSlideContainer.bind(this), 500);
    }

    _initModels(){

    }

    _updateSlideContainer(){
        var slideModel = new SlideModel();
        slideModel.name = Math.random();

        this._slideContainerView.activateSlideView(slideModel);
    }
}

module.exports = MasterController;

