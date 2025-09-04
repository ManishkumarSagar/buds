import '../css/home.css';
import { useEffect } from 'react';
const Home= ()=>{
    let images =['images/img1.jpg','images/img2.jpg','images/img3.jpg']
    let imageno = 0;
    const changeSlide = ()=>{
       
        document.getElementById('slide-image').src = images[imageno];
        if(imageno >= images.length -1){
            imageno = 0;
        }else{
            imageno++;
        }
        console.log("hello")
        setTimeout(changeSlide,1000)
    }
    useEffect(()=>{
        changeSlide()
    },[])

    return(
        <>
        <div class="slider-container">
            <div class="inner-slide-container">
                <img id="slide-image"/>
            </div>
        </div>
        </>
    )
}
export default Home