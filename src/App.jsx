import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./screen/Main.jsx";
import '@aws-amplify/ui-react/styles.css';

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Main level="private" />} />
          <Route exact path="/public" element={<Main level="public" />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
