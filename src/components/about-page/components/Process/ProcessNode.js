import React, { useState, useEffect } from 'react'

export function ProcessNode({ index, children, backgroundUrl = './person1.jpg' }) {
    const [showText, setShowText] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log('test')
        }, 1000);

        return () => {
            clearTimeout(timeout)
        }
    }, [showText])


    return (
        <div className='process-node' onClick={() => setShowText(x => !x)}>
            <div className='process-icon' style={{ backgroundImage: `url(${backgroundUrl})` }}>
                <div>{index}</div>
            </div>
            {showText && <p>{children}</p>}
        </div>
    )
}
