import './App.css';
import BookContextProvider from './contexts/BookContext';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
