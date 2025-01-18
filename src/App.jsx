import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddSentencePage from './pages/AddSentencePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddSentencePage />} />
      </Routes>
    </Router>
  );
}

export default App;
