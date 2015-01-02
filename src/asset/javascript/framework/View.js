/**
 * Base view class.
 */
class View {
    /**
     * @param configuration
     */
    constructor(configuration){
        this._parseConfiguration(configuration);
        this._renderView();
        if ( !this.element.parentElement ){
            this._attachToDom();
        }
    }

    /**
     * @param configuration
     * @protected
     */
    _parseConfiguration(configuration){
        configuration = configuration || {};

        this.model = configuration.model;
        this.containerElement = configuration.containerElement;
        this.element = configuration.element;
    }

    /**
     * Render view to element.
     * Implementation is specific to View.
     *
     * @protected
     */
    _renderView(){}

    /**
     * @protected
     */
    _attachToDom(){
        if ( this.containerElement ){
            this.containerElement.appendChild(this.element);
        }
    }

    /**
     * @returns {Object}
     */
    get model(){
        return this._model || {};
    }

    /**
     * @param {Object} modelValue
     */
    set model(modelValue){
        this._model = modelValue;
    }

    /**
     * @returns {HTMLElement|null}
     */
    get containerElement(){
        return this._containerElement || null;
    }

    /**
     * @param {HTMLElement} containerElementReference
     */
    set containerElement(containerElementReference){
        this._containerElement = containerElementReference;
    }


    /**
     * @returns {HTMLElement}
     * @protected
     */
    _generateElement(){
        return document.createElement('div');
    }

    /**
     *
     * @returns {HTMLElement}
     */
    get element(){
        if (!this._element){
            this._element = this._generateElement();
        }
        return this._element;
    }

    /**
     *
     * @param elementReference
     */
    set element(elementReference){
        this._element = elementReference;
    }
}

module.exports = View;

