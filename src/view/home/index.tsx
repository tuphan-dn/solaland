import { Container, Sprite, Texture } from 'pixi.js'
import { useEffect } from 'react'

import VILLAGE from 'static/assets/Serene_Village_32x32.png'
import { useApplication } from 'providers/application.provider'

const Home = () => {
  const app = useApplication()

  useEffect(() => {
    const container = new Container()
    app.stage.addChild(container)
    const texture = Texture.from(VILLAGE)
    const village = new Sprite(texture)
    container.addChild(village)
    let elapsed = 0
    app.ticker.add((delta) => {
      elapsed += delta
      container.y = 100 * (1 + Math.cos(elapsed / 100))
      console.log(1 + Math.cos(elapsed / 100))
    })
    return () => {
      console.log('chay')
      container.destroy()
    }
  }, [app])

  return null
}

export default Home
