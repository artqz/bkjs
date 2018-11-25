import React, { Component } from 'react';
import './Character.css';

class Character extends Component {
    state = {
        playerInfo: []
    }
    componentDidMount() {
        console.log(this.props.character);
        
        this.setState({ playerInfo: this.props.character })
    }
    render() {
        const pathAvatars = '/assets/avatars/';
        const character = this.state.playerInfo;
        return (
            <div>
                <div className="characterItems">
                    <div className="characterName">{character.name} {character.level}</div>
                    <div className="characterAvatar"><img src={pathAvatars + character.avatar} alt={character.name} /></div>
                    <div className="item itemHelmet">1</div>
                    <div className="item itemArmor">2</div>
                    <div className="item itemBelt">3</div>
                    <div className="item itemPants">4</div>
                    <div className="item itemWeapon">5</div>
                    <div className="item itemSubWeapon">6</div>
                    <div className="item itemGloves">7</div>
                    <div className="item itemShoes">8</div>
                    <div className="item itemEarringOne">9</div>
                    <div className="item itemEarringTwo">11</div>
                    <div className="item itemRingOne">12</div>
                    <div className="item itemRingTwo">13</div>
                    <div className="item itemNecklace">14</div>
                    <div className="item itemBag">15</div>
                </div>              
            </div>
        );
    }
}

export default Character;