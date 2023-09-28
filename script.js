let url = "https://dog.ceo/api/breeds/image/random";
async function getrandomImage(){
    try{
        let resImg = await axios.get(url);
        return resImg.data.message;
    }catch(err){
        return "err - Image not found";
    }
}
let btn = document.querySelector("button");
btn.addEventListener("click", async() =>{
    let image = await getrandomImage();
    let img = document.querySelector("img");
    img.src = image;
})
