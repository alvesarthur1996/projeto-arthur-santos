import React from 'react'

export default function Background({ minTop, color }) {

    let bubblesN = Math.floor(Math.random() * 15) + 1;
    let elements = [];

    for (let i = 0; i < bubblesN; i++) {
        let dimension = Math.floor(Math.random() * 350) + 50;
        let positionY = Math.floor(Math.random() * 100) + minTop;
        let positionX = Math.floor(Math.random() * 100);

        positionY = positionY > 100 ? 100 : positionY;
        positionX = positionX > 100 ? 100 : positionX;
        

        elements.push(
            <div key={elements.length}
                className="floating-bg"
                style={{
                    width: dimension + 'px',
                    height: dimension + 'px',
                    backgroundColor: color,
                    top: positionY + "%",
                    left: positionX + "%"
                }}>

            </div>
        );

    }



    return (
        <div>
            {
                elements.map(div => {
                    return div
                })
            }
        </div>
    )
}