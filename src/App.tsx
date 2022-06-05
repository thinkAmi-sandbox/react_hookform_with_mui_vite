import {Route, Routes} from 'react-router-dom'
import SingleForm from "./components/pages/react-hook-form/mui/single-form/SingleForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path="react-hook-form">
            <Route path="mui">
              <Route path="single-form">
                <Route index element={<SingleForm />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
