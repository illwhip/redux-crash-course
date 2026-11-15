import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../redux/counterSlice"
import { useGetAllPostsQuery, useGetPostsById } from "../redux/postSlice"

export default function Counter() {

  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  console.log(useGetAllPostsQuery())

  return (
    <div>
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