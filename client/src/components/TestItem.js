import React from 'react'
import './Test.css'

const TestItem = ({ data }) => {
    return (
        <div className="test-item">
            <span>
                ({data.id}) {data.name}, {data.value}
            </span>
        </div>
    )
}

export default TestItem
