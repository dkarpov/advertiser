import Element from '../../../common/element';
import { eventTypes } from '../constants';

export default class DropDown extends Element {
  constructor(params) {
    super(params);
    this.shown = false;
    this.dropdownLabel = Object.keys(params)[0].toUpperCase();

    this.createElement(params);
  }

  createElement(params) {
    super.createElement(params);

    this.reference = `<div class="dropdown">
        <button class="dropbtn">${this.dropdownLabel.toUpperCase()}</button>
          <div class="dropdown-content">
          ${Object.keys(params).map(item => `<a>${item.toUpperCase()}</a>`).join('')}
          </div>
        </div>`;
  }

  addEventListeners() {
    super.addEventListeners();

    const dropdown = document.querySelector(".dropdown");
    dropdown.addEventListener('click', this.dropDownClickHandler);
    document.addEventListener('click', this.clickOutsideHandler)
  }

  dropDownClickHandler = event => {
    document.querySelector(".dropdown-content").classList.toggle('show');
    this.shown = !this.shown;
    this.updateSelectedLabel(event.target.firstChild.nodeValue);
  }

  updateSelectedLabel = value => {
    if (value !== this.dropdownLabel) {
      this.dropdownLabel = value;
      const dropBtn = document.querySelector(".dropbtn");
      const customEvent = new CustomEvent(eventTypes.UPDATE_DROP_DOWN, {detail: this.dropdownLabel.toLocaleLowerCase()});

      dropBtn.firstChild.nodeValue = this.dropdownLabel;
      dropBtn.dispatchEvent(customEvent);
    }
  }

  clickOutsideHandler = event => {
    if (!document.querySelector(".dropdown").contains(event.target) && this.shown) {
      document.querySelector(".dropdown-content").classList.toggle('show');
      this.shown = !this.shown;
    }
  }
}