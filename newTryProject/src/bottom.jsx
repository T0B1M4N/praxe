import { useState, useTransition } from 'react'
import './bottom.css'
import anotherCar from "../images/anotherCar.png"

function Bottom() {
  //const [imageSrc, setImageSrc] = useState(car2);
  return (
    <>
      <div>
        <div className="flexdiv">
            <img src={anotherCar} alt="" className='car' />
            <div className="hello"><h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi praesentium voluptatem libero. Quod atque, perspiciatis in veritatis voluptates doloremque id animi fugit beatae doloribus dicta aut veniam! Officiis, recusandae reprehenderit?</h2></div>
        </div>
        <div className="flexdiv">
            <img src={anotherCar} alt="" className='car' />
            <div className="hello"><h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi praesentium voluptatem libero. Quod atque, perspiciatis in veritatis voluptates doloremque id animi fugit beatae doloribus dicta aut veniam! Officiis, recusandae reprehenderit?</h2></div>
        </div>
      </div>
    </>
  )
}

export default Bottom