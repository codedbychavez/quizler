import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import NotFound from './pages/NotFound';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/quiz/math" element={<Quiz />}></Route>
          <Route path="*" element={<NotFound />} />

        </Routes>

     

      </BrowserRouter>


     
    </div>
  );
}

export default App;