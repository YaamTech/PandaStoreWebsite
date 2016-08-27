// Include library
var React     = require('react');
var ReactDOM  = require('react-dom');

var AfterSlider = React.createClass({
    render: function() {
        return (
          <div>
              <div className="promo-area">
                  <div className="zigzag-bottom"></div>
                  <div className="container">
                      <div className="row">
                          <div className="col-md-3 col-sm-6">
                              <div className="single-promo">
                                  <i className="fa fa-refresh"></i>
                                  <p>1 week minimum warranty</p>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-6">
                              <div className="single-promo">
                                  <i className="fa fa-truck"></i>
                                  <p> Shipping via cash on delivery available</p>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-6">
                              <div className="single-promo">
                                  <i className="fa fa-lock"></i>
                                  <p> Payments via ATM, cash on delivery and soon 7-11</p>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-6">
                              <div className="single-promo">
                                  <i className="fa fa-gift"></i>
                                  <p>Discounts and free gifts available</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="maincontent-area">
                  <div className="zigzag-bottom"></div>
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="latest-product">
                                  <h2 className="section-title">Latest Products</h2>
                                  <h3>We will post here soon. But you can still shop on Facebook <a href="https://www.facebook.com/pandastoretaiwan/shop" target="_blank">here</a>.</h3>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="brands-area">
                  <div className="zigzag-bottom"></div>
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="brand-wrapper">
                                  <h2 className="section-title">Partners</h2>
                                  <div className="brand-list">
                                      <img src="img/taibaysell.jpg" alt="" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="footer-top-area">
                  <div className="zigzag-bottom"></div>
                  <div className="container">
                      <div className="row">
                          <div className="col-md-3 col-sm-6">
                              <div className="footer-about-us">
                                  <h2><span>Panda Store</span></h2>
                                  <p></p>
                                  <div className="footer-social">
                                      <a href="https://www.facebook.com/pandastoretaiwan" target="_blank"><i className="fa fa-facebook"></i></a>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-3 col-sm-6">

                          </div>

                          <div className="col-md-3 col-sm-6">

                          </div>

                          <div className="col-md-3 col-sm-6">

                          </div>
                      </div>
                  </div>
              </div>

              <div className="footer-bottom-area">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-8">
                              <div className="copyright">
                                  <p>&copy; 2016 Panda Store. All Rights Reserved</p>
                              </div>
                          </div>

                          <div className="col-md-4">

                          </div>
                      </div>
                  </div>
              </div>
            </div>
      );
    }
});

ReactDOM.render(
    <AfterSlider />,
    document.getElementById('after-slider')
);
