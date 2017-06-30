var Link      = require('react-router-dom').Link;
var React     = require('react');

class Menu extends React.Component {
 
  constructor() {
    super();
  }

  render() {

    return (
     <div>
      <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
              <div className="navbar-header page-scroll">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <Link className="navbar-brand page-scroll" to="#page-top">SweetCake</Link>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                      <li className="hidden">
                          <Link to="#page-top"></Link>
                      </li>
                      <li>
                          <Link className="page-scroll" to="/">Home</Link>
                      </li>
                      <li>
                          <Link className="page-scroll" to="/menu">Menu</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
      <header className="container">
      <p className="text-center">Monday - Friday <strong>11AM to 2PM</strong>, Saturday - Sunday <strong>9Am to 2PM</strong></p>

      <div className="row">
        
        <img src="images/banner2.jpg" alt="..." />
        <div className="header-text hidden-xs header-text">
          <h1>Great taste</h1><br />
          <p>Eat cake and learn React ;) <br />Nulla hendrerit risus auctor, sodales lacus in, facilisis enim. Curabitur iaculis lacus leo,
      ut consequat tellus posuere vel.</p>
        </div>
      </div>	

       
      </header>


      <div id="page-content">
      <div id="main-content">
        <div className="container">
          <article>
            <div className="heading">
              <h2>
                <span className="hr">Cupcakes</span>
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-9.jpg" />
                  </Link>
                </div>
                <div className="item-container">
                  <Link to="#">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-10.jpg" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-2.jpg" />
                  </Link>
                </div>
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-6.jpg" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="item-container">
                  <Link to="./panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-11.jpg" />
                  </Link>
                </div>
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-12.jpg" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-6.jpg" />
                  </Link>
                </div>
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-9.jpg" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
          <hr />
          <article>
            <div className="heading">
              <h2>
                <span className="hr">Donuts</span>
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-13.jpg" />
                  </Link>
                </div>
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-14.jpg" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-1.jpg" />
                  </Link>
                </div>
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-15.jpg" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-16.jpg" />
                  </Link>
                </div>
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-12.jpg" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-15.jpg" />
                  </Link>
                </div>
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-9.jpg" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      </div>

      <footer>

      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p>Copyright 2015</p>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li><Link to="#"><i className="fa fa-twitter"></i></Link>
                </li>
                <li><Link to="#"><i className="fa fa-facebook"></i></Link>
                </li>
                <li><Link to="#"><i className="fa fa-linkedin"></i></Link>
                </li>
                <li><Link to="#"><i className="fa fa-pinterest"></i></Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li><Link to="#">Privacy Policy</Link>
                </li>
                <li><Link to="#">Terms of Use</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </footer>
    </div>
    );

  }

}

module.exports = Menu;