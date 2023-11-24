let arr = [
    {dp:"https://wallpapers.com/images/hd/futuristic-and-aesthetic-cyberpunk-character-94z392lj4tdc9b9c.webp",
     story:"https://wallpapers.com/images/hd/futuristic-lady-in-mask-from-cyberpunk-9risf5ggn4h0hspy.webp"},

    {dp:"https://wallpapers.com/images/hd/cyberpunk-men-with-advanced-helmets-7mp858ayv3kat9nr.webp",
     story:"https://wallpapers.com/images/hd/aesthetic-cyberpunk-warrior-in-costume-r3bubwb3b43zgl9i.webp"},

    {dp:"https://c4.wallpaperflare.com/wallpaper/621/170/484/digital-digital-art-artwork-illustration-drawing-hd-wallpaper-preview.jpg",
     story:"https://i.pinimg.com/originals/3e/d3/4c/3ed34ce3d103378facecdf0bbe74bd38.jpg"},

    {dp:"https://w0.peakpx.com/wallpaper/145/482/HD-wallpaper-cyberpunk-brutal-color-cool-cyber-cyberpunk-fighters-games-iphone-punk.jpg",
     story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDd1pYt47DLrLKQb_FiqLOJ_OGVmkpzpkr4w&usqp=CAU"}
    ]

let clutter = ""
arr.forEach(function(elem,index){

     clutter = clutter + `<div class="status">
     <img id=${index} src="${elem.dp}" alt="">
     </div>`
}) 
document.querySelector('#stories').innerHTML = clutter
document.querySelector('#stories').addEventListener("click",function(details){
                                             // console.log(arr[details.target.id].story)  // the golden value
     document.querySelector('#full-screen').style.display = 'block'
     document.querySelector('#full-screen').style.backgroundImage = `url(${arr[details.target.id].story})` // `url(${arr[details.target.id].story})` is details of click details and then trageted item then id of the story


     setTimeout(function(){   // function to automataically minimize the story after 3 secs
        document.querySelector('#full-screen').style.display = 'none'
     },3000)
})