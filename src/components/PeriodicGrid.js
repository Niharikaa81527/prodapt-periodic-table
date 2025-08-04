import React, { useMemo } from 'react';

// Layout - Your specified layout
const layout = [
  [0, null, null, null, null, null, null, null, null, 1],
  [4, 44, null, null, null, null, null, null, null, 42],
  [2, 5, 40, 43, null, null, 41, 32, 8, 3],  
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 38],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 39],
  [30, 31, 7, 33, 34, 35, 36, 9, 19, 29]
];

function PeriodicGrid({ elements, groups, searchQuery, onElementClick }) {
  // Column-wise alternating grouping logic
  const groupedElements = useMemo(() => {
    // Filter elements based on search query first
    const filteredElements = searchQuery 
      ? elements.filter(element => 
          element.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
          element.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (element.desc && element.desc.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      : elements;

    const groupBuckets = {};
    groups.forEach(g => groupBuckets[g.group] = []);
    filteredElements.forEach(el => {
      if (el.group && groupBuckets[el.group]) {
        groupBuckets[el.group].push(el);
      } else {
        if (!groupBuckets[el.group]) {
          groupBuckets[el.group] = [];
        }
        groupBuckets[el.group].push(el);
      }
    });

    console.log('Elements per group:', Object.keys(groupBuckets).map(g => ({group: g, count: groupBuckets[g].length})));

    const colWiseGroupedElements = [];
    const numCols = Math.max(...layout.map(row => row.length)); // 10 columns
    const groupOrder = groups.map(g => g.group);

    // Alternating column assignment - each column gets different group
    for (let col = 0; col < numCols; col++) {
      // Assign group to column using alternating pattern
      const groupForColumn = groupOrder[col % groupOrder.length];
      
      console.log(`Column ${col} assigned to group: ${groupForColumn}`);
      
      // Fill this entire column from top to bottom with elements from the assigned group
      for (let row = 0; row < layout.length; row++) {
        const idx = layout[row][col];
        if (idx !== null && groupBuckets[groupForColumn] && groupBuckets[groupForColumn].length > 0) {
          colWiseGroupedElements[idx] = groupBuckets[groupForColumn].shift();
        }
      }
    }

    // Fill remaining spots with any leftover elements
    const remainingElements = Object.values(groupBuckets).flat();
    console.log('Remaining elements after column grouping:', remainingElements.length);

    layout.forEach(row => {
      row.forEach(idx => {
        if (idx !== null && !colWiseGroupedElements[idx] && remainingElements.length > 0) {
          colWiseGroupedElements[idx] = remainingElements.shift();
        }
      });
    });

    return colWiseGroupedElements;
  }, [elements, groups, searchQuery]);

  return (
    <main id="grid-container">
      {(() => {
        let gridNumber = 1; // Counter for grid numbering
        return layout.map((row, rowIndex) => 
          row.map((idx, colIndex) => {
            const key = `${rowIndex}-${colIndex}`;
            
            if (idx === null || !groupedElements[idx]) {
              return <div key={key} className="empty-box"></div>;
            }

            const element = groupedElements[idx];
            const currentGridNumber = gridNumber++; // Assign current number and increment
            
            // DEBUG: Log element details
            console.log(`Element ${element.symbol}: group=${element.group}, position=${idx}`);
            
            return (
              <div
                key={key}
                className={`box ${element.group} row-${rowIndex} col-${colIndex}`}
                onClick={() => onElementClick(element)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") onElementClick(element);
                }}
              >
                <div className="element-number">{currentGridNumber}</div>
                <div className="symbol">{element.symbol}</div>
                <div className="subtitle">{element.subtitle}</div>
              </div>
            );
          })
        );
      })()}
    </main>
  );
}

export default PeriodicGrid;