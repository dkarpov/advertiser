import Element from '../../../common/element';

export default class HeaderTitle extends Element {
    constructor(params) {
        super(params);
        this.titleLabel = params.label;

        this.createElement(params);
      }
    
      createElement(params) {
        super.createElement(params);    
        this.reference = `<p class="headerTitletext">${this.titleLabel}</p>`;
      }
}