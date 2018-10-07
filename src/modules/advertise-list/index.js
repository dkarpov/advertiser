import DropDown from './elements/dropdown';
import TextArea from './elements/response-text-area';
import { eventTypes, labels, dataMockMap, urlMap } from './constants';
import HeaderTitle from './elements/header-title';

let dropdown = null,
    textArea = null,
    headerTitle = null;


const pageContainer = `<div class='advertiser-list'>
    <div class='header'></div>
</div>`;

export default function initModule (params) {
    console.log('list initialised ' + params, document.getElementById('root'));
    initView();
    initHandlers();
}

function initView() {
    // declare and connect all elemnts here
    dropdown = new DropDown(urlMap);
    textArea = new TextArea({path: urlMap.json, method: 'GET', response: dataMockMap['json']});
    headerTitle = new HeaderTitle({label: labels.ADVERTISER_LIST});
    document.getElementById('root').insertAdjacentHTML('beforeend', pageContainer);

    headerTitle.connect(document.querySelector('.header'));
    dropdown.connect(document.querySelector('.header'));
    textArea.connect(document.querySelector('.advertiser-list'));
}

function initHandlers() {
    document.querySelector(".dropbtn").addEventListener(eventTypes.UPDATE_DROP_DOWN, updateDropDownHandler);
}

const updateDropDownHandler = event => {
    console.log('lets do http query for', event.detail);
    
    // http request should go here, but we use mock data :)
    const dataKey = event.detail;
    const updateDataObj = {
        response: dataMockMap[dataKey],
        method: 'GET',
        path: urlMap[dataKey]
    }
    textArea.updateElement(updateDataObj);
}