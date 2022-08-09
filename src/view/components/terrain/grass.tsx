import { useEffect } from 'react'
import { BaseTexture, Container, Rectangle, Sprite, Texture } from 'pixi.js'

import { uh, uw } from 'configs/resolution.config'
import SPRITE_SHEET from 'static/assets/Serene_Village_32x32.png'

export type GrassProps = {
  container: Container
  x?: number
  y?: number
}

const Grass = ({ container, x = 0, y = 0 }: GrassProps) => {
  useEffect(() => {
    const spriteSheet = BaseTexture.from(SPRITE_SHEET)
    const texture = new Texture(
      spriteSheet,
      new Rectangle(3 * uw, 0 * uh, uw, uh),
    )
    const grass = new Sprite(texture)
    container.addChild(grass)
    return () => {
      grass.destroy()
      texture.destroy()
      spriteSheet.destroy()
    }
  }, [container])

  return null
}

export default Grass
