import { useSelector } from 'react-redux';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Modal } from './components/modal/Modal';

function App() {
  const state = useSelector(state => state);
  const {
    modal: { visible },
  } = state;
  return (
    <div className='App'>
      <Header />
      <Main />
      {visible ? <Modal /> : null}
    </div>
  );
}

export default App;
