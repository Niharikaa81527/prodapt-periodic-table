import React, { useMemo } from 'react';

const layout = [
  [0, null, null, null, null, null, null, null, null, 1],
  [4, 44, null, null, null, null, null, null, null, 42],
  [2, 5, 40, 43, null, null, 41, 7, 8, 3],  
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 38],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 39],
  [30, 31, 32, 33, 34, 35, 36, 9, 19, 29]
];

function PeriodicGrid({ elements, searchQuery, onElementClick }) {
  // Group elements by category and assign to columns
  const groupedElements = useMemo(() => {
    const groups = ['pmtools', 'codereview', 'unittesting', 'testingtool', 'cicdtools'];
    const groupBuckets = {};
    
    groups.forEach(g => groupBuckets[g] = []);
    elements.forEach(el => {
      if (el.group && groupBuckets[el.group]) {
        groupBuckets[el.group].push(el);
      }
    });

    const colWiseGroupedElements = [];
    const numCols = 10;

    // Alternating column assignment
    for (let col = 0; col < numCols; col++) {
      const groupForColumn = groups[col % groups.length];
      
      for (let row = 0; row < layout.length; row++) {
        const idx = layout[row][col];
        if (idx !== null && groupBuckets[groupForColumn] && groupBuckets[groupForColumn].length > 0) {
          colWiseGroupedElements[idx] = groupBuckets[groupForColumn].shift();
        }
      }
    }

    // Fill remaining spots
    const remainingElements = Object.values(groupBuckets).flat();
    layout.forEach(row => {
      row.forEach(idx => {
        if (idx !== null && !colWiseGroupedElements[idx] && remainingElements.length > 0) {
          colWiseGroupedElements[idx] = remainingElements.shift();
        }
      });
    });

    return colWiseGroupedElements;
  }, [elements]);

  const filteredElements = useMemo(() => {
    if (!searchQuery) return groupedElements;
    
    return groupedElements.map((el, i) => {
      if (el && (
        el.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        el.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (el.desc && el.desc.toLowerCase().includes(searchQuery.toLowerCase()))
      )) {
        return el;
      }
      return null;
    });
  }, [groupedElements, searchQuery]);

  return (
    <main id="grid-container">
      {layout.map((row, rowIndex) => 
        row.map((idx, colIndex) => {
          const key = `${rowIndex}-${colIndex}`;
          
          if (idx === null || !filteredElements[idx]) {
            return <div key={key} className="empty-box"></div>;
          }

          const element = filteredElements[idx];
          return (
            <div
              key={key}
              className={`box ${element.group}`}
              onClick={() => onElementClick(element)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") onElementClick(element);
              }}
            >
              <div className="symbol">{element.symbol}</div>
              <div className="subtitle">{element.subtitle}</div>
            </div>
          );
        })
      )}
    </main>
  );
}

export default PeriodicGrid;