class View {
    constructor(configuration){
        this._parseConfiguration(configuration);
        this._renderView();
        if ( !this.element.parentElement ){
            this._attachToDom();
        }
    }

    _parseConfiguration(configuration){
        configuration = configuration || {};

        this.model = configuration.model;
        this.containerElement = configuration.containerElement;
        this.element = configuration.element;
    }

    _renderView(){}

    _attachToDom(){
        if ( this.containerElement ){
            this.containerElement.appendChild(this.element);
        }
    }

    get model(){
        return this._model || {};
    }

    set model(modelValue){
        this._model = modelValue;
    }

    get containerElement(){
        return this._containerElement || null;
    }

    set containerElement(containerElementReference){
        this._containerElement = containerElementReference;
    }


    _generateElement(){
        return document.createElement('div');
    }

    get element(){
        if (!this._element){
            this._element = this._generateElement();
        }
        return this._element;
    }

    set element(elementReference){
        this._element = elementReference;
    }
}

module.exports = View;

