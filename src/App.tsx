import { Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './layouts/HomePage/HomePage';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Route path='/'>
        <HomePage />
      </Route>
      <Route path='/search'>
        <SearchBooksPage />
      </Route>
      <Footer />
    </div>
  );
}
