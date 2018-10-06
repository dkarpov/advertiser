export default class Element {
    constructor(params) {
        this.reference = null;
        this.makeReference(params);
    }

    makeReference(params = {}) {
    }

    getReference() {
        return this.reference;
    }

    connect(domObject) {
        console.log('connect', this);
        alert('connected');
        domObject.insertAdjacentHTML('beforeend', this.getReference());
    }
}