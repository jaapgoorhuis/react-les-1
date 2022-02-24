import React from "react";

function Products({label, title, price, imageurl}) {
    return (
       <article>
           <img src={imageurl} alt={title}/>
           <span>
                {label}
           </span>
           <p>
               {title}
           </p>
           <h4>
               {price}
           </h4>
       </article>
    )
}

export default Products;