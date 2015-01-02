/**
 * Base controller class
 */
class Controller {
    constructor(element){
        this._element = element;
        this._initViews();
    }

    _initViews() {}
}

module.exports = Controller;
