import React from 'react'
import pic from "../assets/Rectangle 164.jpg"
import pic2 from "../assets/Rectangle 169.png"
import pic3 from "../assets/Group 467.png"

const carousel = () => {
  return (
    <div >
        <div className="groud">
            <img src={pic} alt=""/>
            <img src={pic2} alt="" className='up'/>
            <img src={pic3} alt="" className='center'/>
            <h2>Ecotiles donne vie à votre habitation.</h2>
            <p>
             Explorez notre collection variée et laissez-vous inspirer par les possibilités <br /> infinies de design et de style.
             Que vous recherchiez une solution moderne,<br />
             classique ou audacieuse, nous sommes là pour vous accompagner dans la <br /> réalisation de vos projets.
            </p>
        </div>
         

    </div>
  )
}

export default carousel