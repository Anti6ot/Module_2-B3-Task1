import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id: 0, value: 5, name: 'ненужная вещь'},
        {id: 1, value: 5, name: 'ложка'},
        {id: 2, value: 0, name: 'тарелка'},
        {id: 3, value: 0, name: 'вилка'},
        {id: 4, value: 5, name: 'набор минималиста'},
    ]
    const [counters, setCounters] = useState(initialState)
    const handleDelete = (id) => {
        const newCounters = counters.filter(c => c.id !== id)
        setCounters(newCounters)
    }
    const handleIncrement = (id) => {
       const n =  counters.map(el => {
            if(el.id === id){
                el.value += 1
            }
            return el
        })
        setCounters(n)
    }
    const handleDecrement = (id) => {
        const n =  counters.map(el => {
            if(el.id === id){
                el.value -= 1
            }
            return el
        })
        setCounters(n)
    }

     return (<>
            {counters.map((count => (<Counter
                        key={count.id}
                        {...count}
                        onDelete={handleDelete}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}

            />)))}
    </>)
}

export default CountersList