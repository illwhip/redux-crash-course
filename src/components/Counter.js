import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../redux/counterSlice"
import { useGetPostsByIdQuery } from "../redux/postSlice"

export default function Counter() {

  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  const {data} = useGetPostsByIdQuery(5)

  return (
    <div>
      {JSON.stringify(data)}
      <h1>Count is {count}</h1>
      <button 
        onClick={() => dispatch(increment())}
      >
          Increment
      </button>
      <button 
        onClick={() => dispatch(decrement())}
      >
          Decrement
      </button>
    </div>
  )
}