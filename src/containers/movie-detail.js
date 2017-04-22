import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {

    render() {
        if (!this.props.movie) {
            return <div></div>;
        }

        return ( 
        	<div className = "col-md-6">
	            <div className = "panel panel-default" >
		            <div className = "panel-body" >
			            <div className = "row" >
				            <div className = "col-xs-12" >
					            <img src = { this.props.movie.imagePath }
					            width = "100"
					            height = "100"
					            alt = ""
					            className = "img-responsive" />
				            </div> 
			            </div> 
			            <div className="row">
				            <div className="col-xs-12" >
				            	<h1> { this.props.movie.name }({ this.props.movie.year }) </h1> 
				            </div> 
			            </div>
		            </div>
	            </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        movie: state.activeMovie
    };
}

export default connect(mapStateToProps)(MovieDetail);