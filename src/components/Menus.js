import React from "react";
import { useState } from 'react';
import '../App.css';
import { data } from '../components/MenuSamples';
import { Link } from 'react-router-dom';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Menus() {
  const [toChoose, setToChoose] = useState(data);
  const removeItem = (id) => {
    let newToChoose = toChoose.filter(toChoose => toChoose.id !== id);
    setToChoose(newToChoose)
  }
  
  gsap.registerPlugin(useGSAP);
        
    useGSAP(() => {
         gsap.to(".foodImage", {x: 10, ease: "slow", duration: 1});
         gsap.from(".containerTwo, .containerThree,  .containerFive, .containerSix, .containerSeven", {opacity:0, duration: 1, delay: 1, stagger: .2})
      },)

  return (
    <div className="containerMain">
        <div className="containerTwo">
            <p>At Twin Forks, we have tried to create our Sample Menus hoping that they will fulfil your needs and exceed your expectations.</p>
            <p>Our menus consist of four courses with a selection of welcomes to begin, delivered with a relaxed and fun approach. Every course served, is presented, along with its history, by the Chef personally.</p>
        </div>
        <div className="containerTwo">
            <h1>{toChoose.length} Menus you could choose from</h1>
        </div>

        <div>
            {toChoose.map((thing => {
            const {id, toChooseData, image, description, item1, item2, item3, item4, item5} = thing;

          return (
            <div key={id}>

              <div  className="containerThree" >
                <h2>{id}. {toChooseData}</h2>
              </div>

              <div className="containerFive" >
                <p>{description}</p>
              </div>

              <div className="containerFour">
                <img className="foodImage" src={image} width="1000px" alt="Menus to choose"/>
                <h3 className="containerThree">{item1}</h3>
                <h3 className="containerThree">{item2}</h3>
                <h3 className="containerThree">{item3}</h3>
                <h3 className="containerThree">{item4}</h3>
                <h3 className="containerThree">{item5}</h3>
            </div>

            <div className="containerSix">
                <button className='btn' onClick={() => removeItem(id)}>Delete menu</button>
              </div>

            </div>
        )
      }))}

        <div className="containerSix" >
          <button className='btn all' onClick={() => setToChoose([])}>Delete all menus</button>
        </div>
        <div className="containerSeven">
            <p>Couldn't choose? Create your own menu!</p>
             <Link className='btn5' to="/contact">Click here</Link>       
        </div>
      </div>
    </div>
  );
}

export default Menus;
