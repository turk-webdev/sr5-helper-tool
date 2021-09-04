// useEffect = { componentDidMount, componentDidUpdate, componentWillUpdate }
// useState = state constructor
import { useState, useEffect } from 'react'
import TestItem from './TestItem'

const Test = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/api/dbTest')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.error(err))
    }, [])
    // NOTE: useEffect has a second param [dependencies]
    // These dependencies dictate when useEffect will run
    // Empty array means useEffect runs once, otherwise it will run
    // whenever the values to these vars are changed

    return (
        <div class="test">
            {data.map(item => <TestItem data={item} />)}
        </div>
    )
}

export default Test