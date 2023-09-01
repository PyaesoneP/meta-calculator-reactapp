import { useState, useRef } from 'react'
import "./App.css"

const Heading = () => <><h1>Simplest Working Calculator</h1></>

const Form = () => {
  const [result, setResult] = useState(0);
  const inputRef = useRef(null);

  const handlePlus = (e) => {
    e.preventDefault();
    setResult(result + Number(inputRef.current.value))
    }

  const handleResetResult = (e) => {
    e.preventDefault();
    setResult(0);
  }

  const handleMinus = (e) => {
    e.preventDefault()
    setResult(result - Number(inputRef.current.value))
  }

  const handleMultiply = (e) => {
    e.preventDefault()
    setResult(result * Number(inputRef.current.value))
  }

  const handleDivide = (e) => {
    e.preventDefault()
    setResult(result / Number(inputRef.current.value))
  }

  const handleResetInput = (e) => {
    e.preventDefault()
    inputRef.current = 0
  }

return (
  <form>
    <p>{result}</p>
    <Input inputRef = {inputRef}/>
    <Button
    operationType = "add"
    operation = {handlePlus}
    />
    <Button
    operationType = "substract"
    operation = {handleMinus}
    />
    <Button
    operationType = "multiply"
    operation = {handleMultiply}
    />
    <Button
    operationType = "divide"
    operation = {handleDivide}
    />
    <Button
    operationType = "reset input"
    operation = {handleResetInput}
    />
    <Button
    operationType = "reset result"
    operation = {handleResetResult}
    />
  </form>
)
}

const Input = (props) => {
  return(
    <input
    ref = {props.inputRef}
    pattern="[0-9]" 
    type="number" 
    placeholder="Type a number"
    />
  )
}

const Button = (props) => {
  return (
    <button onClick={props.operation}>
      {props.operationType}
    </button>
  )
}

function App() {
  return(
    <>
    <Heading />
    <Form />
    </>
  )
}

export default App
