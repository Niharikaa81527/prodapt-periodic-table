import React from 'react';

function Legend({ groups }) {
  return (
    <div className="legend" id="legend">
      {groups.map((group) => (
        <span key={group.group} className="legend-item">
          <span className={`legend-box ${group.group}`}></span>
          {group.label}
        </span>
      ))}
    </div>
  );
}

export default Legend;