import { Fragment, useEffect, useMemo } from 'react'
import { Container } from 'pixi.js'

import Grass from 'view/components/terrain/grass'

import { useApplication } from 'providers/application.provider'
import Fire from 'view/components/fire'

const Home = () => {
  const app = useApplication()
  const container = useMemo(() => new Container(), [])

  useEffect(() => {
    app.stage.addChild(container)
    return () => {
      if (!container.destroyed) container.destroy()
    }
  }, [app, container])

  return (
    <Fragment>
      <Grass container={container} />
      <Fire container={container} />
    </Fragment>
  )
}

export default Home
