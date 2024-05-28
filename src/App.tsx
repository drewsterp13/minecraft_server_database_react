import { HashRouter, Routes, Route } from "react-router-dom";
import routes from "./config/routes"
import Navbar from "./components/Navbar"
import TopPixels from "./components/TopPixels"
import BottomPixels from "./components/BottomPixels"
import AuthChecker from "./auth/AuthChecker"
import { Provider } from "react-redux"
import store from "./redux/store"

function App() {
  return (
    <HashRouter>
      <Navbar />
      <TopPixels />
      <Provider store={store}>
        <Routes>
          {
            routes.map((route: any, index: any) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.protected ? (
                    <AuthChecker>
                      <route.component />
                    </AuthChecker>
                  ) : (
                    <route.component />
                  )
                } />
            ))
          }
        </Routes>
      </Provider>
      <BottomPixels />
    </HashRouter>
  )
}

export default App
