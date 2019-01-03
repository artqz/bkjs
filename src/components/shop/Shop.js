import React, {useState,useEffect, useContext} from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import { getShopInfo } from '../../actions/ShopAction';

import './Shop.css';

const Shop = () => {
    const { player } = useContext(PlayerContext);
    const [shop, setShop] = useState();
    const [settings, setSetting] = useState({isLoading: true, showItemInfo:false, selectItem: {}})

    useEffect(
		() => {
			getShopInfo(player.location_id).then(res => {               
                setShop(res);  
                setSetting({...settings, isLoading: false});              
			});			
		},
		[]
    );

    const selectItem = item => {
		setSetting({ showItemInfo: true, selectItem: item });
    }   
    
    return !settings.isLoading ? (
        <div className="shop">
            <div className="shopName">{shop.name}</div>
				<div className="shopList">
					{shop.items.map((item, index) => (
						<Item
							selectItem={selectItem.bind(this)}
							key={index}
							item={item}
							targetItem={selectItem.id}
						/>
					))}
				</div>
        </div>
    ) : (
        <div>
            2
        </div>
    );
}

const Item = (props) => {
    const { item, targetItem } = props;
    const pathItems = '/assets/items';

    const selectItem = () => {
        props.selectItem(item);
    }
        
    return item.id ? (
        <div className="shopSlot" onClick={() => selectItem(item)}>
            <div
                className={
                    targetItem === item.id ? 'itemFrame selected' : 'itemFrame'
                }
            />
            <img src={pathItems + item.icon} alt={item.name} />
        </div>
    ) : (
        <div className="shopSlot">
            <img src={pathItems + '/inventory/free_slot.png'} alt="free slot" />
        </div>
    );
};

export default Shop;