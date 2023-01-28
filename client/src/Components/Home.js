import { Carousel } from "react-bootstrap"

const Home=()=>{
    return(
        <div className="Carousel">
          <Carousel>
      <Carousel.Item>
        <img
          className="imgCaro"
          src="https://cache.marieclaire.fr/data/photo/w1000_ci/5f/brocante-vide-grenier-vaisselle-vintage.jpg"
          alt="First slide"
        />

        <Carousel.Caption>
          <h2>SPECIAL ACCESSOIRES DE LA VIE</h2>
          <p>Le meilleur de la vaisselle pour votre camping-car</p>
        </Carousel.Caption>
        </Carousel.Item>
         

      
      <Carousel.Item>
        <img
          className="imgCaro"
          src="https://i2-prod.gloucestershirelive.co.uk/incoming/article2388909.ece/ALTERNATES/s1200/1_Poundland-Promotion.jpg"
          alt="Second slide"
        />
           <Carousel.Caption>
          <h2>Choosing Cleaning Products</h2>
        </Carousel.Caption>
      
       
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgCaro"
          src="https://twicpics.tefal.be/https://dam.groupeseb.com/m/6a2c1de42dc658c1/original/Digital-Generous-Cook-Ciotat-06ID-jpg.jpg"
          alt="Third slide"
        />
        
         <Carousel.Caption>
          <h3>TEFAL DEALER</h3>
          <p>THE FUTURE OF HEALTHY COOKING</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="imgCaro"
          src="https://www.brandssecurity.com/assets/images/food-and-beverage.jpg?"
          alt="Second slide"
        />

          <Carousel.Caption>
            <h1>BIENVENUE</h1>
           <p>FRESH ORGANIC 100%</p>
        </Carousel.Caption>
        </Carousel.Item>
       
     
    </Carousel>
        </div>
    )
}

export default Home