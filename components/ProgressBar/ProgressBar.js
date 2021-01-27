import React, { useState, useEffect } from 'react'

export default function ProgressBar({ skill, lvl }) {

    const [progresso, setProgresso] = useState(0);

    useEffect(() => {
        if (progresso >= lvl)
            return

        setTimeout(() => {
            setProgresso(progresso + 1);
        }, 10)
    }, [progresso])

    return (
        <label>
            <span style={{ display: "block" }}>{skill}</span>
            <progress value={progresso} max="100" />
        </label>
    )
}
