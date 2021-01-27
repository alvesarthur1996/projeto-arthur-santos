import React from 'react'

export default function ProgressBar({ skill, lvl }) {
    return (
        <label style={{display: "block"}}>
            <span style={{ display: "block" }}>{skill}</span>
            <progress value={lvl} max="100" />
        </label>
    )
}
