import React, { Component } from 'react';
import './Inventory.css';

class Item extends Component {
    render() {
        const { item } = this.props;
        const pathItems = '/assets/items/';

        if(item.id) {
            var slot = (
                <div className="slotItem"><img src={pathItems + item.icon} alt={item.name} /></div>
            );
        }
        else {
            var slot = (
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
        const { inventory_size, items } = this.props;
        
        //Определяем количество свободных слотов
        const freeSlotsItems = inventory_size - items.length;
        
        //Добавляем пустые слоты в инвентарь
        for (let i = 0; i < freeSlotsItems; i++) {
            items.push(0);            
        }

        //Отображаем количество золота
        const goldItem = items.filter(item => item.itemable_type === 'etc')[0]
        let goldCount;
        if (goldItem) {
            goldCount = goldItem['count'];
        }
        else goldCount = 0;
        
        return (
            <div className="inventory">
                {items.map((item, index) => (
                    <Item item={item} key={index} />
                ))}
                <div>{goldCount} Gold</div>
            </div>
        );
    }
}

export default Inventory;