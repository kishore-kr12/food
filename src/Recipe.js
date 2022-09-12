import React from 'react'

function Recipe({title,calories,image,ingredients}) {
  return (
    <div className='recipe'>
        <h1 className='title'>Name - {title}</h1>
        <ol>
            {
                ingredients.map(ing=>(
                    <li> Ingredients{ing.text}</li>
                ))
            }
        </ol>
        <p className='cal'>Calories = {calories}</p>
        <img  className='image' src={image}/>
    </div>
  )
}

export default Recipe