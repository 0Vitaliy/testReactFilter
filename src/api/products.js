export default function(id){
    return fetch(
        'https://demo4070131.mockable.io/product',
        {
            method:"GET"
        }
    ).then(res=>{
        return res.json()
    })
}