var React = require('react');

var Navtoggle = React.createClass({
	componentDidMount: function(){
		// store dom elements here
		this.gfelm = {
			gfApp:document.getElementById('gf-app'),
		}
	},
	onToggle: function(){

		this.gfelm.gfApp.classList.toggle('show-nav');
		var node = this.getDOMNode();

		node.classList.toggle('uac-close');
		node.classList.toggle('uac-dark');
	},
	render: function(){
		var svgString = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">  \
			    	<path class="uac-circle" fill="none" stroke-width="2" stroke-miterlimit="10" d="M16,32h32c0,0,11.723-0.306,10.75-11c-0.25-2.75-1.644-4.971-2.869-7.151C50.728,7.08,42.767,2.569,33.733,2.054C33.159,2.033,32.599,2,32,2C15.432,2,2,15.432,2,32c0,16.566,13.432,30,30,30c16.566,0,30-13.434,30-30C62,15.5,48.5,2,32,2S1.875,15.5,1.875,32"></path> \
			    </svg> ';
		return (
			<div id="gf-nav-toggle" className="uac-toggle-barcircle" onClick={this.onToggle}> 
			  <div className="uac-top"></div>
			  <div dangerouslySetInnerHTML={{__html: svgString }}></div>
			  <div className="uac-bottom"></div> 
			</div>
		)
	}
});

module.exports = Navtoggle;