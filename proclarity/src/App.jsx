import { useState } from 'react';
import './App.css'
import Sidebar from './components/Sidebar';
import Viewport from './components/Viewport';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App grid grid-cols-12 h-screen bg-emerald-100 dark:bg-slate-900 dark:text-emerald-100">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Viewport setIsOpen={setIsOpen} isOpen={isOpen}/>
    </div>
  )
}

export default App;