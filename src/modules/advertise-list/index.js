import DropDown from './elements/dropdown';

export default function (params) {
    console.log('list initialised ' + params);
    const dropdown = new DropDown({});
    dropdown.connect(document.getElementById('root'));
}