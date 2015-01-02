var RivetsView = require('../framework/RivetsView');

class SlideView extends RivetsView {
    /**
     *
     * @param configuration
     */
    constructor(configuration) {
        this.animating = false;
        this.template = require('../template/Slide.html');
        super(configuration);
    }

    /**
     * Either activate or deactivate the view.
     *
     * @param active
     */
    set active(active){
        // The element will be put in animating state if the
        // active state of the element changes
        if ( this._active !== active ){
            this.animating = true;
        }

        this._active = active;
    }

    /**
     * @returns {boolean}
     */
    get active(){
        return this._active || false;
    }


    /**
     * En/disable animating state. If animating state is enabled
     * the disabled state will be recovered in 4000ms.
     *
     * @param {boolean} isAnimating
     */
    set animating(isAnimating){
        this._animating = isAnimating;

        // An animation will run for a fixed time. Animating state
        // will be reset after 4000ms
        clearTimeout(this._animatingTimeout);
        if ( isAnimating ){
            this._animatingTimeout = setTimeout(function(){
                this._animating = false;
            }.bind(this), 4000)
        }
    }

    /**
     * @returns {boolean}
     */
    get animating(){
        return this._animating || false;
    }
}

module.exports = SlideView;