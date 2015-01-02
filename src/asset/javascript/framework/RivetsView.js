/**
 * @type {View}
 */
var View = require('./View');

/**
 * @type {rivets}
 */
var rivets = require('rivets');

/**
 * View using rivets for template rendering.
 */
class RivetsView extends View {
    /**
     * Renders view with rivets
     * @protected
     */
    _renderView(){
        this._rivetsView = rivets.bind(this.element, this);
    }

    /**
     * @returns {HTMLElement}
     * @protected
     */
    _generateElement(){
        var element = document.createElement('div');
        element.innerHTML = this.template || '';
        return element;
    }
}

module.exports = RivetsView;