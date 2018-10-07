import Element from '../../../common/element';
import hljs from 'highlight.js';
import xml from 'highlight.js/lib/languages/xml';
import json from 'highlight.js/lib/languages/json';

export default class ResponseTextArea extends Element {
    constructor(params) {
        super(params);
        this.updateFields(params);

        hljs.configure({classPrefix: ''});
        hljs.registerLanguage('json', json);
        hljs.registerLanguage('xml', xml);

        this.createElement(params);
    }

    updateFields(params) {
        const { method, path, response } = params;
        this.method = method;
        this.urlPath = path;
        this.responseText = response;
    }

    createElement(params) {
        super.createElement(params);

        this.reference = `<div class='responseHolder'>
            <div class='urlPathHolder'>${this.method + ' ' + this.urlPath}</div>
            <div class='responseTextDataHolder'>
                <pre>
                    <code class='json'>
                    ${this.responseText}
                    </code>
                </pre>
            </div>
        </div>`;
    }

    connect(domObj) {
        super.connect(domObj);
        hljs.initHighlightingOnLoad();
    }

    updateElement(params) {
        this.updateFields(params);

        const urlPathHolder = document.querySelector('.urlPathHolder');
        const responseTextDataHolder = document.querySelector('.json');
        const textData = document.createTextNode(this.responseText);

        while (responseTextDataHolder.hasChildNodes()) {
            responseTextDataHolder.removeChild(responseTextDataHolder.lastChild);
          }
 
        urlPathHolder.firstChild.nodeValue = this.method + ' ' + this.urlPath;
        responseTextDataHolder.appendChild(textData);

        hljs.highlightBlock(responseTextDataHolder);
    }
}