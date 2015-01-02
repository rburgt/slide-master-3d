var Controller = require('../framework/Controller');

var SlideModel = require('../model/Slide');

var SlideContainerView = require('../view/SlideContainer');

class MasterController extends Controller {
    _initViews(){
        this._slideContainerView = new SlideContainerView({
            containerElement: this._element
        });

        setInterval(this._updateSlideContainer.bind(this), 500);
    }

    _updateSlideContainer(){
        var slideModel = new SlideModel();
        slideModel.name = Math.random();

        this._slideContainerView.activateSlideView(slideModel);
    }
}

module.exports = MasterController;

