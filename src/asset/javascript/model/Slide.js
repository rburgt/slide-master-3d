/**
 * @type {Model}
 */
var Model = require('../framework/Model');

/**
 * Model for single slide in presentation
 */
class SlideModel extends Model {
    constructor(){
        this.name = '';
    }
}

module.exports = SlideModel;