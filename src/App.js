import React from 'react';
import './App.css';
import Buttons from "./Buttons";
import Products from "./Products";

import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import our_story from "./assets/our_story.png";
import brand from "./assets/brand.png";

import Tiles from "./Tiles";


function App() {
  return (
<>
    <header>
        <h1>Handbags & Purses</h1>
           <nav>
            <Buttons
               title="to the collection"
            />
            <Buttons
                title="shop all bags"
            />
            <Buttons
                title="pre-orders"
                disabled="disabled"
            />
          </nav>
    </header>

      <main>
        <Products
            imageurl={bag_1}
            label="Best seller"
            title="The handy bag"
            price="€400,-"
        />
          <Products
              imageurl={bag_2}
              label="Best seller"
              title="The handy bag"
              price="€400,-"
          />
          <Products
              imageurl={bag_3}
              label="Best seller"
              title="The handy bag"
              price="€400,-"
          />
          <Products
              imageurl={bag_4}
              label="Best seller"
              title="The handy bag"
              price="€400,-"
          />
      </main>
    <footer>
        <Tiles>
            <h2>The brand</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda,
             inventore ipsam necessitatibus temporibus tenetur.</p>

             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda,
                 inventore ipsam necessitatibus temporibus tenetur.</p>
        </Tiles>

        <Tiles>
           <img src={brand} alt="brand"/>
        </Tiles>
        <Tiles>
            <h2>Our story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda,
                inventore ipsam necessitatibus temporibus tenetur.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda,
                inventore ipsam necessitatibus temporibus tenetur.</p>
        </Tiles>

        <Tiles>
            <img src={our_story} alt="brand"/>
        </Tiles>
    </footer>
</>
  );
}

export default App;



