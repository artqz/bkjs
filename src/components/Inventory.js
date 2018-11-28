import React, { Component } from 'react';

class Inventory extends Component {

    render() {
        const { size } = this.props;
        const pathItems = '/assets/items/';

        let items = [];
        for (let i = 0; i < size; i++) {
            items[i] = i;            
        }
        return (
            <div>{items.map(item => (
                <div>{item}</div>
            ))}</div>
        );
    }
}

export default Inventory;