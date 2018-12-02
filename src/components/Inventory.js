import React, { Component } from 'react';
import axios from 'axios';
import './Inventory.css';

class Item extends Component {
    equipItem (item, userId) {
        axios.post(`http://127.0.0.1:8000/api/users/equip_item`, { item: item, user_id:userId }).then(res => {
            this.props.equipItem();
        });
    }
    render() {
        const { item, userId } = this.props;
        const pathItems = '/assets/items/';

        return (
            (item.id)?
                <div className="inventorySlot" onDoubleClick={() => this.equipItem(item, userId)}>
                    <div className="itemFrame"></div>
                    <img src={pathItems + item.icon} alt={item.name} />
                </div>
            :
                <div className="inventorySlot"><img src={pathItems + 'inventory/free_slot.png'} alt="free slot" /></div>
        )
    }
}

class Inventory extends Component {
    equipItem() {
        this.props.changeItem();
    }
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
        
        return (
            <div className="inventory">
                <div className="inventoryTitle">Inventory</div>
                <div className="inventoryList">
                    {itemsList.map((item, index) => (
                        <Item item={item} key={index} userId={playerInfo.id} equipItem={this.equipItem.bind(this)}  />
                    ))}
                </div>                
                <div className="inventoryGold"><div className="count"><span className="coin"></span>{goldCount}</div></div>
            </div>
        );
    }
}

export default Inventory;