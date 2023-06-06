import Carousel from 'react-bootstrap/Carousel';

function CarouselHome() {
    return (
        <Carousel className='carouselHome'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <h3 className="carousel-title">Elige tus desafíos</h3>
                    <p className="carousel-description">Encuentra la ropa perfecta para cada ocasión.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2017/04/27/08/29/man-2264825_1280.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className="carousel-title">Supera tus límites</h3>
                    <p className="carousel-description">Descubre prendas diseñadas para maximizar tu rendimiento.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2022/06/06/05/06/parkour-7245313_1280.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="carousel-title">Eleva tu estilo</h3>
                    <p className="carousel-description">Encuentra la combinación perfecta entre moda y deporte.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselHome;