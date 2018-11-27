import React, { Component } from 'react';
import axios from 'axios';

class Shop extends Component {
    state = {
        items: []
    }
    getShopInfo() {
        axios.get(`http://127.0.0.1:8000/api/shops/${this.props.location}`).then(res => {
            this.setState({ items: res.data.items });
        })
      }
    componentDidMount() {
       this.getShopInfo();
    }
    render() {
        const { items } = this.state;
        
        return (
            <div>
                {items.map(item => (<div key={item.id}>{item.name}</div>))}
              Shop             
            </div>
        );
    }
}

export default Shop;