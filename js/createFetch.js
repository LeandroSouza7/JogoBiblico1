export function createFetch(method, url, data = null){

    function handleError(response){
        if(!response.ok){
            throw new Error(response.status + ": " + response.statusText);
        }

        return response;
    }

    return fetch(url, {
        method,
        body: JSON.stringify({data}),
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
        .then(response => handleError(response))
        .then(response => response.json())
        .then(response => response);

}