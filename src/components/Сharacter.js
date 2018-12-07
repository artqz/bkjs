import React, { Component } from 'react';
import './Character.css';

class Character extends Component {
	render() {
		const pathAvatars = '/assets/avatars/';
		const pathItems = '/assets/items/';
		const { character } = this.props;
		const slots = [
			{
				name: 'helmet',
				className: 'item itemHelmet',
				image: pathItems + '/inventory/helmet.png',
				item: [],
			},
			{
				name: 'armor',
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
				name: 'pants',
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
				name: 'shoes',
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
		const equipItems = character.items.filter(item => item.slot != null);
		//Заносим вещи в слоты
		slots.forEach((slot, index) => {
			equipItems.forEach(item => {
				if (slot.name === item.slot) slot.item = item;
			});
		});

		return (
			<div>
				<div className="characterItems">
					<div className="characterName">
						{character.name} {character.level}
					</div>
					<div className="characterAvatar">
						<img src={pathAvatars + character.avatar} alt={character.name} />
					</div>
					{slots.map((slot, index) => (
						<div key={index} className={slot.className}>
							{slot.item.icon ? (
								<img src={pathItems + slot.item.icon} alt={slot.item.name} />
							) : (
								<img src={slot.image} alt={slot.name} />
							)}
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Character;
