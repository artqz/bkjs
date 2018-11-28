import React, { Component } from 'react';
import axios from 'axios';
import Inventory from './Inventory'

class Item extends Component {
    createNewItem (item, userId) {
        axios.post(`http://127.0.0.1:8000/api/items/`, { item: item, user_id: userId }).then(res => {
            console.log(res.data); 
        });
    }
    buyItem (item, playerInfo) {
        console.log(item); 
        this.createNewItem(item, playerInfo.id);       
    }
    render() {
        const { item, playerInfo } = this.props;
        const pathItems = '/assets/items';
        return (
            <div onClick={() => this.buyItem(item, playerInfo)}><img src={pathItems + item.icon} alt={item.name} /> {item.name} - {item.price}</div>
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
    buyItem(id) {
        console.log(id);
        
    }
    render() {
        const { items, shopName } = this.state;
        const { playerInfo } = this.props;
        
        return (
            <div>       
                {shopName}         
                {items.map(item => <Item buyItem={this.buyItem} key={item.id} item={item} playerInfo={playerInfo} />)}   
                <Inventory size={playerInfo.inventory_size} />                        
            </div>
        );
    }
}

export default Shop;