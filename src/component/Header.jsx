import {image}from "../assets/img/img"

function Header() {
  return (
 <>
 <div className="contentHeader">
            <div className="contentHeaderText">
              <p>magni dolores eos qui ratione sequi nesciunt</p>
              <h1>Lorem ipsum dolor sit amet, adipiscing elit</h1>
              <p>magni dolores eos qui ratione voluptatem sequi nesciunt</p>
            </div>
            <div className="contentHeaderImg">
              <img src={image.head} alt="HeadingImage" />
            </div>
          </div>
 
 </>
  )
}

export default Header