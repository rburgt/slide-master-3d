/**
 * @type {View}
 */
var View = require('../framework/View');

/**
 * @type {SlideView}
 */
var SlideView = require('./Slide');

/**
 * The purpose of SlideContainerView is to provide a single container to
 * display slides in. Based on a model a SlideView will be provided to display
 * the data. It reuses SlideView instances in the background or will create a new
 * instace of SlideView if all locally managed SlideView instances are occupied.
 *
 * This view is intended to be used as the main viewing area of a presentation.
 */
class SlideContainerView extends View {
    /**
     * @param configuration
     */
    constructor(configuration){
        /**
         * Collection of SlideView instances
         *
         * @type {Array}
         * @protected
         */
        this._slideViews = [];

        super(configuration);

        // create four SlideViews to warm up slideView cache
        for (var i = 0; i<=4; i++) {
            this._createSlideView();
        }
    }

    /**
     * Returns an instance of SlideView which is not occupied.
     *
     * @returns {SlideView}
     * @protected
     */
    _getAvailableSlideView(){
        var availableSlideView;
        var numberOfSlideViews = this._slideViews.length;

        for ( var i = 0, slideView; i < numberOfSlideViews; i++ ){
            slideView = this._slideViews[i];

            if ( !slideView.occupied ){
                availableSlideView = slideView;
                break;
            }
        }

        return availableSlideView || this._createSlideView();
    }

    /**
     * Constructs a instance of SlideView.
     *
     * @returns {SlideView}
     * @protected
     */
    _createSlideView(){
        var slideView = new SlideView({
            containerElement: this.element
        });
        this._slideViews.push(slideView);
        return slideView;
    }

    /**
     * Marks a slideView as currently active SlideView. The active
     * state of the current activeSlideView will be reset if one is
     * present.
     *
     * @param slideView
     */
    set activeSlideView(slideView){
        if ( this._activeSlideView ){
            this._activeSlideView.active = false;
        }

        slideView.active = true;
        this._activeSlideView = slideView;
    }

    /**
     * @returns {SlideView|null}
     */
    get activeSlideView(){
        return this._activeSlideView || null;
    }

    /**
     * Activate a SlideView with a specific model.
     *
     * @param model
     */
    activateSlideView(model) {
        var slideView = this._getAvailableSlideView();
        slideView.model = model;

        this.activeSlideView = slideView;
    }
}

module.exports = SlideContainerView;