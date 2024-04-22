import { Route, Routes} from 'react-router-dom';
import './App.css';
import Movie from './component/movies';
import Customers from './component/customer';
import Navbar from './component/NavBar';
import NotFound from './component/not-found';

function App() {
  return (
    <main className='container'>
      <Navbar />
      <Routes>
      <Route path='/' element={<Movie />}/>
      <Route path='/customer' element={<Customers />}/>
      <Route path='/not-found' element={<NotFound />}/>
      </Routes>
      
    </main>
  );
}
export default App;
