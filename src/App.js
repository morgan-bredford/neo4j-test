import { useEffect, useState } from 'react';
import './main.css';

function App() {
  const [numOfRows, setNumOfRows] = useState()
  const [rows, setRows] = useState([])
  const [pyramid, setPyramid] = useState([])
  const [showPyramid, setShowPyramid] = useState(false)
  const [result, setResult] = useState()
  const [inputError, setInputError] = useState(false)
  const input_check = new RegExp(/^(?!.* {2})(?=\S)(?=.*\S$)[0-9 ]+$/)
  
  useEffect(() => inputRows(),[numOfRows])

  //creates input rows for inputing the pyramid values 
  const inputRows = () => {
    let temp_rows = []
    for(let i=0;i<numOfRows;i++){
      temp_rows.push(<div key={i}>Enter {i+1} values seperated by spaces: <input type="text" /></div>)
    }
    setRows(temp_rows)
  }

  //creates the pyramid from the input values and sets it to be displayed on the page
  const createPyramid = (e) => {
    e.preventDefault()
    setInputError(false)
    let temp_pyramid = []
    let error = false

      for(let i=0;i<numOfRows;i++){
        //checks that the inputed values for the pyramid is correct
        if(!input_check.test(e.target[i].value)){
          error = true
          break
        }
        else{
        let row = e.target[i].value.split(' ')
        temp_pyramid.push(row)
        }
      }

      //if there was an input error diplay an error message
      if(error){
        setInputError(true)
      }
      //if not then show the pyramid on the page
      else{
        setPyramid(temp_pyramid)
        setShowPyramid(true)
      }
  }

  const startSlide = () => {
    let position_array = []
    let slide_results = []
    //creates a position array that is used to move through the slide 
    position_array.length = pyramid.length
    position_array.fill(0,0,pyramid.length)

    function runSlide() {
      //the position array checks from the bottom of the pyramid and up so it has to be reversed before mapping it to the pyramid array
      const map_pos_array = [...position_array].reverse()
      let result = 0
      for(let p=0;p<map_pos_array.length;p++){
        //adds the value in the pyramid array by using the position from the position array 
        result += +pyramid[p][map_pos_array[p]]
      }

      slide_results.push(result)

      //checks position values from the bottom up. The top layer never changes so it stops at the second layer from the top
      for(let i=0;i<pyramid.length-1;i++){
        //if the position value isn't bigger than the position value of the layer on top of it then increment it by 1 and then restart the slide
        if(position_array[i] <= position_array[i+1]){
          position_array[i]++
          runSlide()
        }
      }
    }
    runSlide()

    //sort the results from lowest to highest
    slide_results.sort((a, b) => a - b)
 
    setResult(slide_results[0])
  }

  const restart = () => {
    setNumOfRows(null)
    setRows([])
    setPyramid([])
    setShowPyramid(false)
    setResult(null)
  }

  return (
    <main className="App">
      {!showPyramid &&
      <>
        <h2>Enter how many layers for the pyramid:</h2>
        <input type="number" min="0" className="layer_input" onChange={(e) => setNumOfRows(e.target.value)} />
        <form onSubmit={e => createPyramid(e)}>
          {rows}
          <button className="create_pyramid_btn">Create pyramid</button>
        </form>
      </>
      }
      {inputError && <div className="input_error">Sorry, there was and input error. Only digits and single spaces between digits is allowed.</div>}
      {showPyramid && 
        <>
          {pyramid.map((layer, index) => {
            return(
              <div key={index}>
                {layer.map(value => <span className="pyramid_block">{value}</span>)}
              </div>
            )
          })}
          <button className="start_btn" onClick={startSlide}>Start</button>
        </>
      }
      {result && 
        <>
          <h1>Fastest path: {result}</h1>
          <button onClick={restart}>Restart</button>
        </>
      }
    </main>
  );
}

export default App; 
