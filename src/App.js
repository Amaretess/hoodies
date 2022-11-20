import { routesConfig } from "./config/routesConfig";
import { Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <Routes>
      {routesConfig.map(route => <Route key={route.id} element={route.element} path={route.path}/>)}
    </Routes>
);
}

export default App;