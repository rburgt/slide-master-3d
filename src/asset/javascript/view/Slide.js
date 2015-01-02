var RivetsView = require('../framework/RivetsView');

class SlideView extends RivetsView {
    constructor(configuration) {
        this.animating = false;
        this.template = require('../template/Slide.html');
        super(configuration);
    }

    set active(active){
        if ( this._active !== active ){
            this.animating = true;

            clearTimeout(this._animatingTimeout);
            this._animatingTimeout = setTimeout(function(){
                this.animating = false;
            }.bind(this), 4000)
        }

        this._active = active;
    }

    get active(){
        return this._active || false;
    }
}

module.exports = SlideView;