import React from 'react'
import { image } from '../assets/img/img'

function Portfolio() {
  return (
 <>
    <div className="contentPortfolio" id='portfolio'>
            <div className="portfolioText">
              <h1>Our Portfolio</h1>
              <p className="portfolioTitle">
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                vitae
              </p>
              <p className="portfolioTitle">Want to see our projects? Click on the Button!</p>
              <p className="portfolioDescription">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
              <p className="portfolioButton">Lets go</p>
            </div>
            <div className="portfolioImg">
              <img src={image.portfolio} alt="portfolio" />
            </div>
          </div>
 
 
 
 
 
 </>
  )
}

export default Portfolio