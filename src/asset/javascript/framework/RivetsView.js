var View = require('./View');

var rivets = require('rivets');

class RivetsView extends View {
    _renderView(){
        this._rivetsView = rivets.bind(this.element, this);
    }

    _generateElement(){
        var element = document.createElement('div');
        element.innerHTML = this.template || '';
        return element;
    }
}

module.exports = RivetsView;