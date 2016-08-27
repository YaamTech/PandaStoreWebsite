// Include library
var React     = require('react');
var ReactDOM  = require('react-dom');

var BeforeSlider = React.createClass({
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

          </div>

        );
    }
});

ReactDOM.render(
    <BeforeSlider />,
    document.getElementById('before-slider')
);
