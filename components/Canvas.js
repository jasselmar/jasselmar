import React, { useEffect, useState, useRef } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'

const Canvas = (props) => {
  const { width, height } = useWindowSize()
  const canvasRef = useRef(null)
  const [canvas, setCanvas] = useState()
  const [context, setContext] = useState()

  const frameCount = 140
  const currentFrame = (index) =>
    `/animation/${index.toString().padStart(4, 0)}.jpg`

  useEffect(() => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image()
      img.src = currentFrame(i)
    }
  })

  useEffect(() => {
    const canvas = canvasRef.current
    setCanvas(canvas)
    const context = canvas.getContext('2d')
    setContext(context)
  }, [])

  useEffect(() => {
    const img = new Image()
    img.src = currentFrame(1)
    if (width > 0) {
      const html = document.documentElement
      img.onload = () => {
        context.drawImage(img, 0, 0, width, 0.5625 * width)
      }

      const updateImage = async (index) => {
        img.src = currentFrame(index)
        await context.drawImage(img, 0, 0, width, 0.5625 * width)
      }

      window.addEventListener('scroll', () => {
        const scrollTop = html.scrollTop
        const maxScrollTop = html.scrollHeight - 0.5625 * width
        const scrollFraction = scrollTop / maxScrollTop
        const frameIndex = Math.min(
          frameCount - 1,
          Math.ceil(scrollFraction * frameCount)
        )

        requestAnimationFrame(() => updateImage(frameIndex + 1))
      })
    }
  }, [width])

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        {...props}
        height={0.5625 * width}
        width={width}
      />
    </div>
  )
}

export default Canvas
