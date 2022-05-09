import React from 'react';
import './Personage.css'
export default function Personage({ name, hair_color, gender, homeworld }) {
    return (
        <div className='personage_card'>
            <div className='personage_info'>
                <img className='personage_img'
                    src="https://fr.shopping.rakuten.com/visuels/2020-12-07-Disney/images/starwars/b_starwars_desk.png" alt="" />
                <h1>{name}</h1>
                <h2>{hair_color}</h2>
                <h3>{gender}</h3>
            </div>
        </div>)
}
