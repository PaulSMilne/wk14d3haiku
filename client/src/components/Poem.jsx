import React from 'react'

const Poem = ({title, line1, line2, line3}) => {

     return (
          <div className="singlepoem">
               <h3>{title}</h3>
               <p>
                    {line1}<br />
                    {line2}<br />
                    {line3}
               </p>
          </div>
     )
}

export default Poem