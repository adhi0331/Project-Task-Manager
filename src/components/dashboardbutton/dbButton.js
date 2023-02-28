import './dbButton.css';
import React from 'react';

class DashboardButton extends React.Component {



    render() {
        return(<button type="button" onClick={this.props.clickHandler}> 
                Dashboard
         </button>);
    }
}

export default DashboardButton