import React, { Component } from 'react';
import axios from 'axios';

class Item extends Component {

    render() {
        const { item } = this.props;
        const pathItems = '/assets';
        return (
            <div><img src={pathItems + item.icon} /> {item.name} - {item.price}</div>
        );
    }
}

class Shop extends Component {
    state = {
        shopName: null,
        items: []
    }
    getShopInfo() {
        axios.get(`http://127.0.0.1:8000/api/shops/location/${this.props.location}`).then(res => {
            this.setState({ items: res.data.items, shopName: res.data.name });
        })
      }
    componentDidMount() {
       this.getShopInfo();
    }
    render() {
        const { items, shopName } = this.state;
        
        return (
            <div>       
                {shopName}         
                {items.map(item => <Item key={item.id} item={item} />)}                           
            </div>
        );
    }
}

export default Shop;