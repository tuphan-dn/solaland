import { useEffect } from 'react'
import {
  AnimatedSprite,
  BaseTexture,
  Container,
  Rectangle,
  Texture,
} from 'pixi.js'

import { uh, uw } from 'configs/resolution.config'
import SPRITE_SHEET from 'static/assets/animated/campfire_32x32.png'

export type GrassProps = {
  container: Container
  x?: number
  y?: number
}

const Fire = ({ container, x = 0, y = 0 }: GrassProps) => {
  useEffect(() => {
    const spriteSheet = BaseTexture.from(SPRITE_SHEET)
    const textures = [
      new Texture(spriteSheet, new Rectangle(0 * uw, 0 * uh, uw, uh)),
      new Texture(spriteSheet, new Rectangle(1 * uw, 0 * uh, uw, uh)),
      new Texture(spriteSheet, new Rectangle(2 * uw, 0 * uh, uw, uh)),
      new Texture(spriteSheet, new Rectangle(3 * uw, 0 * uh, uw, uh)),
    ]
    const fire = new AnimatedSprite(textures)
    fire.animationSpeed = 0.2
    fire.play()
    container.addChild(fire)
    return () => {
      fire.destroy()
      textures.forEach((texture) => texture.destroy())
      spriteSheet.destroy()
    }
  }, [container])

  return null
}

export default Fire
