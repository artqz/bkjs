import React, { Component } from 'react';
import axios from 'axios';
import './Shop.css';

class Item extends Component {
	selectItem(item) {
		this.props.selectItem(item);
	}
	render() {
		const { item, targetItem } = this.props;
		const pathItems = '/assets/items';

		return item.id ? (
			<div className="shopSlot" onClick={() => this.selectItem(item)}>
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
	}
}

class Shop extends Component {
	state = {
		shopName: null,
		items: [],
		showItemInfo: false,
		selectItem: [],
	};
	getShopInfo() {
		axios
			.get(`http://127.0.0.1:8000/api/shops/location/${this.props.location}`)
			.then(res => {
				this.setState({ items: res.data.items, shopName: res.data.name });
			});
	}
	componentDidMount() {
		this.getShopInfo();
	}
	selectItem(item) {
		this.setState({ showItemInfo: true, selectItem: item });
	}
	buyItem(itemId, userId) {
		axios
			.post(`http://127.0.0.1:8000/api/items/`, {
				item_id: itemId,
				user_id: userId,
			})
			.then(res => {
				this.props.buyItem();
			});
	}
	leftTo6(num) {
		return Math.ceil(num / 6) * 6 - num;
	}
	render() {
		const { items, shopName, showItemInfo, selectItem } = this.state;
		const { playerInfo } = this.props;
		const pathItems = '/assets/items';

		//Генерируем список магазина
		const shopList = [];

		//Добавляем вещи в список
		items.map((item, index) => {
			return (shopList[index] = item);
		});

		//Дополняем список пустыми ячейками
		for (let i = 0; i < this.leftTo6(items.length); i++) {
			shopList.push(0);
		}

		return (
			<div className="shop">
				<div className="shopName">{shopName}</div>
				<div className="shopList">
					{shopList.map((item, index) => (
						<Item
							selectItem={this.selectItem.bind(this)}
							key={index}
							item={item}
							targetItem={selectItem.id}
						/>
					))}
				</div>
				{showItemInfo ? (
					<div className="shopItemInfo">
						<div className="shopItemIcon">
							<img src={pathItems + selectItem.icon} alt={selectItem.name} />
						</div>
						<div className="shopItemDesc">
							<div className="name">{selectItem.name}</div>
							<div className="stat">
								physical attack:{' '}
								<span className="value">{selectItem.p_atk}</span>
							</div>
							<div className="price">
								price: <span className="value">{selectItem.price}</span>
							</div>
						</div>
						<div
							className="shopItemBuy"
							onClick={() => this.buyItem(selectItem.id, playerInfo.id)}
						>
							Buy
						</div>
					</div>
				) : null}
			</div>
		);
	}
}

export default Shop;
