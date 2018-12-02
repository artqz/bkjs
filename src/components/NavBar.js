import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class NavBar extends Component {
    render() {       
        const { isAuth } = 1//this.props.auth; 

        const userLinks = (
            <Link to="/game" >Game</Link>
        );

        const guestLinks = (
            <Link to="/login">Login</Link>
        );

        return (
            <nav> 
                {(isAuth) ? userLinks : guestLinks}               
            </nav>            
        );
    }
}

NavBar.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapeStateToProps = (state) => {
    return {
        auth: state.auth
    };
}

export default connect(mapeStateToProps)(NavBar);