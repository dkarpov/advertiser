export default class Element {
    constructor(params) {
        this.reference = null;
    }

    createElement(params = {}) {
    }

    getReference() {
        return this.reference;
    }

    addEventListeners() {
        console.log('adding handlers to ', this);
    }

    connect(domObject) {
        console.log('connect', this);
        domObject.insertAdjacentHTML('beforeend', this.getReference());
        this.addEventListeners();
    }
}