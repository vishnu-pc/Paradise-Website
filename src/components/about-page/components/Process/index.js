import React from 'react'
import { ProcessNode } from './ProcessNode'

import './index.css'

export function Process({ processes = [] }) {
    return (
        <>
            {processes.map(({ description, backgroundUrl }, index) => (
                <ProcessNode index={index} backgroundUrl={backgroundUrl}>{description}</ProcessNode>
            ))}
        </>
    )
}
