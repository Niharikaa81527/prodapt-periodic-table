import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Legend from './components/Legend';
import PeriodicGrid from './components/PeriodicGrid';
import Modal from './components/Modal';
import { elements, groups } from './data/elements';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedElement, setSelectedElement] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (element) => {
    setSelectedElement(element);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedElement(null);
  };

  return (
    <div className="App">
      <SearchBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />

      <Legend groups={groups} />

      <PeriodicGrid 
        elements={elements}
        searchQuery={searchQuery}
        onElementClick={openModal}
      />

      <Modal 
        isOpen={isModalOpen}
        element={selectedElement}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;