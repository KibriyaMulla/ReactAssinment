const ThirdComponent=()=>{

    useEffect(()=>
     axios.get("https://jsonplaceholder.typicode.com/photos")
     .then((resp)=>{
        console.log(resp.data);
     })
    )
}
export default ThirdComponent