import image from './ChefTwo.avif';
import dish from './Dish.avif';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function Chef () {
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
         gsap.to(".chef", {y: 60, ease: "slow", duration: 1});
         gsap.from(".mainThree, .mainFour", {opacity:0, duration: 2, delay: 1, stagger: .6});
      });

    return (
        <div className="main">
            <div className="mainTwo">
                <img className="chef" src={image} alt="chef"/>
                <div className = "mainThree">
                    <h1 className="header">Chef <br />Patrick Lee</h1>
                    <p className="text">Born and raised in Durban, I decided to relocate to Santorini after falling in love with its wild beauty and magnificent scenery. Inspired by its rare local ingredients and gastronomic traditions, I founded Twin Forks Private Chef Services in 2018, driven by the passion for what I do and the curiosity to explore the paths that appear before me.</p>
                    <p className="text">Though I have studied and worked in Athens since 2000, I became serious about cooking in 2004 when I moved to Paris and attended “Le Cordon Bleu” Culinary Institute. I then worked in various fine dining restaurants for the following years, in France and Greece. Working at such a high level with the finest locally-farmed and foraged ingredients taught me to appreciate food in a way I never had before. It was truly a cut above and it has heavily influenced the way I approach cooking today.</p>
                    <p className="text">I finally decided to settle down in Santorini and use my experience and knowledge in order to explore new culinary paths with locally sourced ingredients, traditional recipes from the island and Mediterranean flavors.</p>
                    <p className="text"> Quality food starts with quality ingredients and I source only the finest products. I regularly scour the farmer’s markets to find the best local produce and proteins available in Santorini. I only use responsibly-sourced Mediterranean seafood and meat that has been pasture-raised in Cyclades.</p>
                </div>
            </div>
            <div className="mainFive">      
                <div className="mainFour">    
                    <p className="text">The mutual joy I feel when offering my guests a memorable experience is priceless. Creating food that surpasses expectations and creates emotions is what keeps me motivated. That’s what eating great food does – it permeates our minds and we can often picture the laughs and the smiles of the people with whom we shared that meal.</p>
                    <p className="text">Always in pursuit of evolving my services, with devotion to nature and respect to my guests, I am trying to provide you with the last piece of the puzzle that will make your experience, on our beautiful island of Santorini, unforgettable.</p>
                    <p className="text">Welcome!</p>
                </div>       
                <img className="dish" src={dish} alt="dish"/>
            </div>
        </div>
        

          
    )
}
export default Chef;