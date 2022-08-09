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
  }, [app])

  return null
}

export default Home
