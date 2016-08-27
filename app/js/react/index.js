// Include library
var React     = require('react');
var ReactDOM  = require('react-dom');

var Index = React.createClass({
    render: function() {
        return (
          <div>
            <div className="site-branding-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="logo">
                                <h1><a href="index.html"><span>Panda Store</span></a></h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mainmenu-area">
                <div className="container">
                    <div className="row">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="index.html">Home</a></li>
                                <li><a href="https://www.facebook.com/pandastoretaiwan/shop" target="_blank">Shop on Facebook</a></li>
                                <li><a href="http://m.me/pandastoretaiwan" target="_blank">Contact us via Facebook messenger</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slider-area">
                <div className="zigzag-bottom"></div>
                <div id="slide-list" className="carousel carousel-fade slide" data-ride="carousel">

                    <div className="slide-bulletz">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <ol className="carousel-indicators slide-indicators">
                                        <li data-target="#slide-list" data-slide-to="0" className="active"></li>
                                        <li data-target="#slide-list" data-slide-to="1"></li>
                                        <li data-target="#slide-list" data-slide-to="2"></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <div className="single-slide">
                                <div className="slide-bg slide-one"></div>
                                <div className="slide-text-wrapper">
                                    <div className="slide-text">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-6 col-md-offset-6">
                                                    <div className="slide-content">
                                                        <h2>We are awesome</h2>
                                                        <p>We supply both
                                                          New and SECOND HAND
                                                          exclusively Apple devices
                                                          (iPHONEs, iPAD, iMAC etc...)
                                                          at LOW PRICES to
                                                          all categories of customers.</p>                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-slide">
                                <div className="slide-bg slide-two"></div>
                                <div className="slide-text-wrapper">
                                    <div className="slide-text">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-6 col-md-offset-6">
                                                    <div className="slide-content">
                                                        <h2>We are great</h2>
                                                        <p>We sell the REAL electrical products/books/stuffs:
                                                            <br />  1. Used products with cheap prices.
                                                            <br />  2. Showroom products with lower prices than original.
                                                            <br />  3. 100% NEW FULLBOX products with lower prices.</p>                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-slide">
                                <div className="slide-bg slide-three"></div>
                                <div className="slide-text-wrapper">
                                    <div className="slide-text">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-6 col-md-offset-6">
                                                    <div className="slide-content">
                                                        <h2>We are superb</h2>
                                                        <p>You can bargain and get a discount. You can reserve too.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

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
    <Index />,
    document.getElementById('wrapper')
);
