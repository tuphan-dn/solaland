import { Application } from 'pixi.js'
import { createContext, useContext, ReactNode, useRef, useEffect } from 'react'

const Context = createContext<Application>({} as Application)
const app = new Application({ resizeTo: window })

/**
 * Application Context Provider
 */
const ApplicationContextProvider = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) ref.current.replaceWith(app.view)
  }, [ref])

  return (
    <Context.Provider value={app}>
      <div ref={ref} />
      {children}
    </Context.Provider>
  )
}
export default ApplicationContextProvider

/**
 * Application Hook
 */
export const useApplication = () => {
  return useContext<Application>(Context)
}
