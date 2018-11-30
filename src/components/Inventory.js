import React, { Component } from 'react';
import axios from 'axios';
import './Inventory.css';

class Item extends Component {
    equipItem (item, userId) {
        axios.post(`http://127.0.0.1:8000/api/users/equip_item`, { item: item, user_id:userId }).then(res => {
            console.log(item.id);
            console.log(res.data);
        });
    }
    render() {
        const { item, userId } = this.props;
        const pathItems = '/assets/items/';
        let slot;
        if(item.id) {
            slot = (
                <div className="slotItem" onDoubleClick={() => this.equipItem(item, userId)}><img src={pathItems + item.icon} alt={item.name} /></div>
            );
        }
        else {
            slot = (
                <div className="slotFree"></div>
            );
        }

        return (
            <div className="inventorySlot">{slot}</div>
        )
    }
}

class Inventory extends Component {
    render() {
        const { playerInfo } = this.props;
        
        let itemsList = [];
        //Отсеиваем надетые вещи
        const notEquipItems = playerInfo.items.filter(item => item.slot === null || item.itemable_type === 'etc');
        
        //генерируем инвентарь
        for (let i = 0; i < playerInfo.inventory_size; i++) {
            itemsList.push(0);            
        }

        //Добавляем вещи в инвентарь
        notEquipItems.map((item, index) => {
            return itemsList[index] = item;    
        });

        //Отображаем количество золота
        const goldItem = itemsList.filter(item => item.itemable_type === 'etc')[0]
        let goldCount;
        if (goldItem) {
            goldCount = goldItem['count'];
        }
        else goldCount = 0;
        console.log(playerInfo);
        
        return (
            <div className="inventory">
                {itemsList.map((item, index) => (
                    <Item item={item} key={index} userId={playerInfo.id}  />
                ))}
                <div>{goldCount} Gold</div>
            </div>
        );
    }
}

export default Inventory;