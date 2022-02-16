import React, { useEffect, useState, useRef } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'

const Canvas = (props) => {
  const { width, height } = useWindowSize()
  const canvasRef = useRef(null)
  const [canvas, setCanvas] = useState()
  const [context, setContext] = useState()

  const frameCount = 80
  const currentFrame = (index) =>
    `/anima/${index.toString().padStart(4, 0)}.png`

  /*  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image()
      img.src = currentFrame(i)
    }
  } */

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

      const updateImage = (index) => {
        img.src = currentFrame(index)
        context.drawImage(img, 0, 0, width, 0.5625 * width)
      }

      window.addEventListener('scroll', () => {
        const scrollTop = html.scrollTop
        const maxScrollTop = html.scrollHeight - window.innerHeight
        const scrollFraction = scrollTop / maxScrollTop
        const frameIndex = Math.min(
          frameCount - 1,
          Math.ceil(scrollFraction * frameCount)
        )

        requestAnimationFrame(() => updateImage(frameIndex + 1))
      })
    }
  }, [width])

  /*  preloadImages() */

  return (
    <>
      <canvas ref={canvasRef} {...props} height={height} width={width} />
      {/* <img src="/../public/anima/0001.png" width="1920" height="1080" /> */}
    </>
  )
}

export default Canvas
