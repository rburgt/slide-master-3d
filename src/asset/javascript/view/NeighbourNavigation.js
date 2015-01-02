/**
 * @type {View}
 */
var RivetsView = require('../framework/RivetsView');


class NeighbourNavigationView extends RivetsView {
    /**
     *
     * @param configuration
     */
    constructor(configuration) {
        this.template = require('../template/NeighbourNavigation.html');
        super(configuration);
    }

    /**
     * @returns {HTMLElement}
     * @protected
     */
    _generateElement(){
        var element = super._generateElement();
        element.classList.add('neighbourNavigation');
        return element;
    }

}

module.exports = NeighbourNavigationView;