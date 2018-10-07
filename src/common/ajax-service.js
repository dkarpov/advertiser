export default function fetchURl(onSuccess, onFail, path, method = 'GET') {

    const xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            console.log(xhr.responseText);
          }
    }

    xmlhttp.onload = evt => {
        onSuccess({responseText, status} = xmlhttp);
        console.info("** Request was completed succsessfully", path);
    }

    xmlhttp.onerror = evt => {
        onFail({responseText, status} = xmlhttp);
        console.warn("** An error occurred during the transaction");
    };

    xmlhttp.open(method, path, true);
    xmlhttp.send();
}