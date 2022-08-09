import { useEffect, useMemo } from 'react'
import { Container } from 'pixi.js'

import Grass from 'view/components/terrain/grass'

import { useApplication } from 'providers/application.provider'

const Home = () => {
  const app = useApplication()
  const container = useMemo(() => new Container(), [])

  useEffect(() => {
    app.stage.addChild(container)
    return () => {
      if (!container.destroyed) container.destroy()
    }
  }, [app, container])

  return <Grass container={container} />
}

export default Home
