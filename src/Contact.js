import './App.css';
import ContactForm from './ContactForm';
import  contactImage  from './ContactPhoto.avif' 
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function Contact () {

    gsap.registerPlugin(useGSAP);
        
    useGSAP(() => {
         gsap.to(".contactImage, .field", {x: 10, ease: "slow", duration: 1});
         gsap.from(".containerEight, .containerNine,  .containerTen", {opacity:0, duration: 1, delay: 1, stagger: .2});
      },)

    return (
        <div className="structure">
            <div className="field">
                <h3 className="containerEight">Contact Us</h3>
                <p className="containerNine">For general comments, questions, or to create your own menu, please fill out our contact form.</p>
                <p className="containerNine">We’ll get back to you with an appropriate response as soon as possible.</p>
                <ContactForm />
                <h3 className="containerEight"> How does it work?</h3>
                <p className="containerTen">1. After deciding the menu, you share all requested details about the event and submit the form.</p>
                <p className="containerTen">2. You will get notified about our availability and receive all the necessary details.</p>
                <p className="containerTen">3. Confirm your Booking by making a Secure Payment through Paypal or by credit card.</p>
                <p className="containerTen">4. Everything has been done from your side, so the only thing left is to relax and let us organise the best service for you.</p>
                <p className="containerTen">5. We prepare The Food.</p>
                <p className="containerTen">6. We serve the menu.</p>
                <p className="containerTen">7. We clean your kitchen.</p>

            </div>
            <img className="contactImage" src={contactImage} alt="table with cooking accessories"/>
        </div>
    )
}

export default Contact;