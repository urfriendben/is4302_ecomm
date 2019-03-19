import * as React from 'react';
import 'sass/components/customerComponents/home.scss';
import carousell1 from 'img/carousell1.jpg';
import carousell2 from 'img/carousell2.jpeg';
class Home extends React.Component {
  render() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={carousell1} alt="First slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={carousell2} alt="Second slide"></img>
                    </div>
                    {/*<div className="carousel-item">*/}
                        {/*<img className="d-block w-100" src="..." alt="Third slide">*/}
                    {/*</div>*/}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div class="row">
                <div class="col-4 col1" ></div>
                <div className="col-4 col2"></div>
                <div className="col-4 col3"></div>
            </div>
        </div>
    );
  }
}

export default Home;
