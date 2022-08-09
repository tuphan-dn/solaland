import { Container, Sprite, Texture } from 'pixi.js'
import { useEffect } from 'react'

import VILLAGE from 'static/assets/Serene_Village_32x32.png'
import { useApplication } from 'providers/application.provider'
import { useSelector } from 'react-redux'
import { AppState } from 'store'

const Home = () => {
  const app = useApplication()
  const height = useSelector((state: AppState) => state.ui.height)

  useEffect(() => {
    const container = new Container()
    const texture = Texture.from(VILLAGE)
    const village = new Sprite(texture)

    let elapse = 0
    const move = (delta: number) => {
      elapse += delta / 200
      const amplitude = (height - village.height) / 2
      const covariance = Math.sin(elapse)
      village.y = amplitude * (1 + covariance)
    }

    app.stage.addChild(container)
    container.addChild(village)
    app.ticker.add(move)
    return () => {
      app.ticker.remove(move)
      container.destroy()
    }
  }, [app, height])

  return null
}

export default Home
