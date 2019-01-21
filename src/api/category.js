export default function(categ=''){
    return fetch(
        'https://codeguida.com/api/v1/posts/?category='+categ,
        {
            method:"GET"
        }
    ).then(res=>{
        return res.json()
    })
}