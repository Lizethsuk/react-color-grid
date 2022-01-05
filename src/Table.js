import React, { useState } from 'react';


const functMatriz = (n, m)=> {
const initValue= [];
const color = 'gray';
for (let i= 0; i< n; i++) {
    initValue.push([]);
    for(let j = 0; j<m; j++) {
        initValue[i].push(color);
    }

}
return initValue
}


function Table() {

    const [longTable, setLongTable] = useState(functMatriz(6 ,6));
    const [newColor, setNewColor] = useState('gray');

    const handleClick = (n, m) => {
        const newTable = [...longTable];
        for (let i= 0; i< longTable.length; i++) {
            for(let j = 0; j<longTable[i].length; j++) {
                if(n === i && m === j) {
                    newTable[n][m] = newColor
                }
            }      
        }; 
        console.log(newTable);
        setLongTable(newTable)
    }

  return (
  
    <div>
        <table>
        <tbody>
            {longTable.map((row, n) => {
                return (
                <tr key={n}>{
                    row.map((col, m) => {
                        return (
                            <td key={m} style={{ backgroundColor: col }} onClick={()=>handleClick(n, m)} >
                                {m}
                            </td>
                        )
                    })
                }</tr>
                )
            })}
        </tbody>
    </table>
    <ul>
        <li style={{backgroundColor: 'green'}} onClick={(e)=>{setNewColor('green'); e.setAttribute = ('id', 'active');}}></li>
        <li style={{backgroundColor: 'blue'}} onClick={(e)=>{setNewColor('blue'); e.target.className = "active";}}></li>
        <li style={{backgroundColor: 'purple'}} onClick={(e)=>{setNewColor('purple'); e.target.className = "active";}}></li>
    </ul>
    </div>
  )
}

export default Table;
