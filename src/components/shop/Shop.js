import React, { useState, useEffect, useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import { getShopInfo, buyItem } from '../../actions/ShopActions';
import { getPlayerInfo } from '../../actions/PlayerActions';

import './Shop.css';

const Shop = () => {
	const { player, setPlayer } = useContext(PlayerContext);
	const [shop, setShop] = useState();
	const [settings, setSetting] = useState({
		isLoading: true,
		showItemInfo: false,
		selectItem: {},
	});
	const pathItems = '/assets/items';

	useEffect(() => {
		getShopInfo(player.location_id).then(res => {
			console.log(res);

			setShop(res);
			setSetting({ ...settings, isLoading: false });
		});
	}, []);

	const selectItem = item => {
		setSetting({ showItemInfo: true, selectItem: item });
	};

	const getItem = (itemId, userId) => {
		buyItem(itemId).then(res => {
			getPlayerInfo().then(res => {
				setPlayer({ ...player, items: res.items });
			});
		});
	};

	const leftTo6 = num => {
		return Math.ceil(num / 6) * 6 - num;
	};

	//Генерируем список магазина
	const shopList = [];
	if (!settings.isLoading) {
		//Добавляем вещи в список
		shop.items.map((item, index) => {
			return (shopList[index] = item);
		});

		//Дополняем список пустыми ячейками
		for (let i = 0; i < leftTo6(shop.items.length); i++) {
			shopList.push(0);
		}
	}

	return !settings.isLoading ? (
		<div className="shop">
			<div className="shopName">{shop.name}</div>
			<div className="shopList">
				{shopList.map((item, index) => (
					<Item
						selectItem={selectItem.bind(this)}
						key={index}
						item={item}
						targetItem={settings.selectItem.id}
					/>
				))}
			</div>
			{settings.showItemInfo ? (
				<div className="shopItemInfo">
					<div className="shopItemIcon">
						<img
							src={pathItems + settings.selectItem.icon}
							alt={settings.selectItem.name}
						/>
					</div>
					<div className="shopItemDesc">
						<div className="name">{settings.selectItem.name_ru}</div>
						<div className="stats">
							{settings.selectItem.itemable_type === 'weapon' ? (
								<div className="stat">
									<span className="attr">Ф. Атака:</span>
									<span className="value">{settings.selectItem.p_atk}</span>
								</div>
							) : settings.selectItem.itemable_type === 'armor' ? (
								<div className="stat">
									<span className="attr">Ф. Защита:</span>
									<span className="value">{settings.selectItem.p_def}</span>
								</div>
							) : (
								<div className="stat">
									<span className="attr">М. Защита:</span>
									<span className="value">{settings.selectItem.m_def}</span>
								</div>
							)}
						</div>
						<div className="price">
							<span>Цена:</span>{' '}
							<span className="value">{settings.selectItem.price}</span>
						</div>
					</div>
					<div
						className="shopItemBuy"
						onClick={getItem.bind(null, settings.selectItem.id, player.id)}
					>
						Купить
					</div>
				</div>
			) : null}
		</div>
	) : (
		<div>2</div>
	);
};

const Item = props => {
	const { item, targetItem } = props;
	const pathItems = '/assets/items';

	const selectItem = item => {
		console.log(item);

		props.selectItem(item);
	};

	return item.id ? (
		<div className="shopSlot" onClick={selectItem.bind(null, item)}>
			<div
				className={targetItem === item.id ? 'itemFrame selected' : 'itemFrame'}
			/>
			<img src={pathItems + item.icon} alt={item.name} />
		</div>
	) : (
		<div className="shopSlot" data-tip="hello world">
			<img src={pathItems + '/inventory/free_slot.png'} alt="free slot" />
		</div>
	);
};

export default Shop;
