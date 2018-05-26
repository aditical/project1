class RebrandlyApi {
    static baseUrl = 'https://api.rebrandly.com/v1'
    static get(path, params){
        const url = RebrandlyApi.baseUrl + path 
        const password = sessionStorage.getItem("password") || params.headers.apikey
        return fetch(url, {
            headers: {
                apikey: password
            }
        }).then(response =>{
            if (response.ok){
                return response.json();
            }
            else {
                return Promise.reject(new Error(response.statusText))
            }
        })
    }
    
    static post(path, params){
        const url = RebrandlyApi.baseUrl + path 
        const password = sessionStorage.getItem("password")
        return fetch(url,{
            method: 'post' ,
            headers: {
                apikey: password,
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(params.body)
        }) 
        .then(response=> {
            if(response.ok){
                return response.json();
            }
            else{
                return Promise.reject(new Error(response.statusText))
            }
        })
    }
    
    static delete(path, params){
        const url = RebrandlyApi.baseUrl + path
        const password = sessionStorage.getItem("password")
        return fetch(url, {
            method: 'delete', 
            headers:{
                apikey: password,
                'Content-type': 'application/json'
            }
        })
        .then(response=>{
            if(response.ok){
                return response.json()
            }else {
                return Promise.reject(new Error(response.statusText))
            }
            
        })
    }
    
}
export default RebrandlyApi ;