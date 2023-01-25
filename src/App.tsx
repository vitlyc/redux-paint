import React, { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { currentStrokeSelector } from "./selectors"
import { beginStroke, endStroke, updateStroke } from "./actions"

function App() {
  const dispatch = useDispatch()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const currentStroke = useSelector(currentStrokeSelector)

  const startDrawing = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent
    dispatch(beginStroke(offsetX, offsetY))
  }

  const endDrawing = () => {}
  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) {
      return
    }
    const { offsetX, offsetY } = nativeEvent
    dispatch(updateStroke(offsetX, offsetY))
  }

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={endDrawing}
      onMouseOut={endDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  )
}

export default App
