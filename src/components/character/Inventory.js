import React, { useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import { equipItem, getPlayerInfo } from '../../actions/PlayerActions';

import './Inventory.css';

const Inventory = () => {
	const { player, setPlayer } = useContext(PlayerContext);

	let itemsList = [];
	//Отсеиваем надетые вещи
	const notEquipItems = player.items.filter(item => item.slot === null);

	//генерируем инвентарь
	for (let i = 0; i < player.bag_size; i++) {
		itemsList.push(0);
	}

	//Добавляем вещи в инвентарь
	notEquipItems.map((item, index) => {
		return (itemsList[index] = item);
	});

	//Отображаем количество золота
	const goldItem = itemsList.filter(item => item.itemable_type === 'etc')[0];
	let goldCount;
	if (goldItem) {
		goldCount = goldItem['count'];
	} else goldCount = 0;

	const handleEquipItem = item => {
		equipItem(item.id).then(res => {
			getPlayerInfo().then(res => {
				setPlayer({ ...player, items: res.items });
			});
		});
	};

	return (
		<div className="inventory">
			<div className="inventoryTitle">Inventory</div>
			<div className="inventoryList">
				{itemsList.map((item, index) => (
					<Item
						item={item}
						key={index}
						equipItem={() => handleEquipItem(item)}
					/>
				))}
			</div>
			<div className="inventoryGold">
				<div className="count">
					<span className="coin" />
					{goldCount}
				</div>
			</div>
		</div>
	);
};

const Item = props => {
	const { item } = props;
	const pathItems = '/assets/items/';

	const equipItem = item => {
		props.equipItem(item);
	};

	return item.id ? (
		<div className="inventorySlot" onDoubleClick={() => equipItem(item)}>
			<div className="itemFrame" />
			<img src={pathItems + item.icon} alt={item.name} />
		</div>
	) : (
		<div className="inventorySlot">
			<img src={pathItems + 'inventory/free_slot.png'} alt="free slot" />
		</div>
	);
};

export default Inventory;
