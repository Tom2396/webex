import Carousel from 'react-bootstrap/Carousel';
import './banner.css'
var heroData = [
  {
    id: 1,
    image: require('../assets/images/img-hero1.jpg'),
    title: 'The perfect design for your website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: ''
  },
  {
    id: 2,
    image: require('../assets/images/img-hero2.jpg'),
    title: 'Start Your Future Financial Plan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: ''
  },
  {
    id: 3,
    image: require('../assets/images/img-hero3.jpg'),
    title: 'Enjoy the Difference',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: ''
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {
          heroData.map(hero => {
            return (
              <Carousel.Item key={hero.id} className='carousel-item img'>
                <img
                  className="d-block w-100"
                  src={hero.image}
                  alt={"slide " + hero.id}
                />
                <Carousel.Caption className='carousel-caption'>
                  <h2>{hero.title}</h2>
                  <p>{hero.description}</p>
                  <a
                    className="btn btn-primary btn-sm d-block d-md-inline"
                    href={hero.link}
                  >
                    Learn More <i className="fas fa-chevron-right"></i>
                  </a>

                </Carousel.Caption>
              </Carousel.Item>
            );
          })
        }
      </Carousel>
    </section>
  );
}

export default AppHero;