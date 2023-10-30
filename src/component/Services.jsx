import { services } from "../utils/data";
import Service from "../component/Service";
function Services() {
  return (

  <div className="contentService" id="service" >
            <h1 className="">Our Services</h1>
            <h2 className="aboutTextTitle">The entire cycle of digital transformation effortlessly handled for you.</h2>
            <div className="serviceCard">
              <ul>
                {services.map((service) => (
                  <Service key={service.id} service={service} />
                ))}
              </ul>
            </div>
          </div>
  
  )
}

export default Services