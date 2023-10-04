export function createFetch(method, url, data = null){

    function handleError(response){
        if(!response.ok){
            throw new Error(response.status + ": " + response.statusText);
        }

        return response;
    }


   function returnFetch(){
        if(method == "GET"){
            return fetch(url)
        }else{
            return fetch(url, {
                method,
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json;charset=UTF-8"
                }
            })
         }      
   } 
    
   return returnFetch()
        .then(response => handleError(response))
        .then(response => response.json())
        .then(response => response);

}