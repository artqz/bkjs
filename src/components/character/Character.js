import React from 'react';
import './Character.css';

const Character = props => {
	const { player, target } = props;

	const lineCurrentHp = (player.hp_current / player.hp_max) * 100;
	let lineHpColor;
	if (lineCurrentHp <= 19) {
		lineHpColor = 'red';
	} else if (lineCurrentHp <= 45) {
		lineHpColor = 'yellow';
	} else lineHpColor = 'green';

	const pathAvatars = '/assets/avatars/';
	const pathItems = '/assets/items/';
	const slots = [
		{
			name: 'head',
			className: 'item itemHelmet',
			image: pathItems + '/inventory/helmet.png',
			item: [],
		},
		{
			name: 'chest',
			className: 'item itemArmor',
			image: pathItems + '/inventory/armor.png',
			item: [],
		},
		{
			name: 'belt',
			className: 'item itemBelt',
			image: pathItems + '/inventory/belt.png',
			item: [],
		},
		{
			name: 'legs',
			className: 'item itemPants',
			image: pathItems + '/inventory/pants.png',
			item: [],
		},
		{
			name: 'main_hand',
			className: 'item itemWeapon',
			image: pathItems + '/inventory/main_hand.png',
			item: [],
		},
		{
			name: 'off_hand',
			className: 'item itemSubWeapon',
			image: pathItems + '/inventory/off_hand.png',
			item: [],
		},
		{
			name: 'gloves',
			className: 'item itemGloves',
			image: pathItems + '/inventory/gloves.png',
			item: [],
		},
		{
			name: 'feet',
			className: 'item itemShoes',
			image: pathItems + '/inventory/shoes.png',
			item: [],
		},
		{
			name: 'earringOne',
			className: 'item itemEarringOne',
			image: pathItems + '/inventory/earring.png',
			item: [],
		},
		{
			name: 'earringTwo',
			className: 'item itemEarringTwo',
			image: pathItems + '/inventory/earring.png',
			item: [],
		},
		{
			name: 'ringOne',
			className: 'item itemRingOne',
			image: pathItems + '/inventory/ring.png',
			item: [],
		},
		{
			name: 'ringTwo',
			className: 'item itemRingTwo',
			image: pathItems + '/inventory/ring.png',
			item: [],
		},
		{
			name: 'necklace',
			className: 'item itemNecklace',
			image: pathItems + '/inventory/necklace.png',
			item: [],
		},
		{
			name: 'bag',
			className: 'item itemBag',
			image: pathItems + '/inventory/bag.png',
			item: [],
		},
	];

	//Определяем одеты вещи
	if (player.items) {
		const equipItems = player.items.filter(item => item.slot != null);
		//Заносим вещи в слоты
		slots.forEach((slot, index) => {
			equipItems.forEach(item => {
				if (slot.name === item.slot) slot.item = item;
			});
		});
	}

	return (
		<div className={target ? 'character target' : 'character user'}>
			<div>
				{player.name} [{player.level}]
			</div>
			<div
				className="hp"
				data-progress={player.hp_current + '/' + player.hp_max}
			>
				<span
					className="current"
					style={{ width: lineCurrentHp + '%', backgroundColor: lineHpColor }}
				/>
			</div>
			<div className="avatar">
				<img src={pathAvatars + player.avatar} alt={player.name} />
			</div>
			<div className="slots">
				{slots.map((slot, index) => {
					return <Slot key={index} slot={slot} />;
				})}
			</div>
		</div>
	);
};

const Slot = props => {
	const { slot } = props;
	const pathItems = '/assets/items/';

	return (
		<div className={slot.className}>
			{slot.item.icon ? (
				<img src={pathItems + slot.item.icon} alt={slot.item.name} />
			) : (
				<img src={slot.image} alt={slot.name} />
			)}
		</div>
	);
};

export default Character;
