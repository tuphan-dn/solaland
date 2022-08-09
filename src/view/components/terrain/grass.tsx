import { useEffect } from 'react'
import { BaseTexture, Container, Rectangle, Sprite, Texture } from 'pixi.js'

import { useApplication } from 'providers/application.provider'
import { uh, uw } from 'configs/resolution.config'
import SPRITE_SHEET from 'static/assets/Serene_Village_32x32.png'

export type GrassProps = {
  container: Container
}

export const offset = {
  w: 3,
  h: 0,
}

const Grass = ({ container }: GrassProps) => {
  const app = useApplication()

  useEffect(() => {
    const spriteSheet = BaseTexture.from(SPRITE_SHEET)
    const texture = new Texture(
      spriteSheet,
      new Rectangle(offset.w * uw, offset.h * uh, uw, uh),
    )
    const grass = new Sprite(texture)
    container.addChild(grass)
    return () => {
      grass.destroy()
      texture.destroy()
      spriteSheet.destroy()
    }
  }, [app, container])

  return null
}

export default Grass
