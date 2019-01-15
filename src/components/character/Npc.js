import React from 'react';

import './Npc.css';

const Npc = props => {
  const { npc } = props;
  const pathNpc = '/assets/npc/';
  const lineCurrentHp = (npc.hp_current / npc.hp_max) * 100;
	let lineHpColor;
	if (lineCurrentHp <= 19) {
		lineHpColor = 'red';
	} else if (lineCurrentHp <= 45) {
		lineHpColor = 'yellow';
  } else lineHpColor = 'green';
  
  return (
    <div className="npc">
    <div>
				{npc.name_ru} [{npc.level}]
			</div>
      <div
				className="hp"
				data-progress={npc.hp_current + '/' + npc.hp_max}
			>
				<span
					className="current"
					style={{
						width: lineCurrentHp + '%',
						backgroundColor: lineHpColor,
					}}
				/>
			</div>
      <div className="avatar">
				<img src={pathNpc + npc.avatar} alt={npc.name_ru} />
			</div>
    </div>
  );
}

export default Npc;