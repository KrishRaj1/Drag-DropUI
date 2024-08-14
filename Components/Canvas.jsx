
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import Modal from '../Components/Modal';

const Canvas = () => {
  const [cards, setCards] = useState([]);
  const [inputText, setInputText] = useState("");
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState(""); 

  const addCard = () => {
    setCards([...cards, { id: Date.now(), text: inputText }]);
    setInputText('');
  };

  const handleShowMore = (text) => {
    setModalText(text); 
    setModal(true); 
  };

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'scroll', color: 'white', backgroundColor: 'Teal' }}>
      <textarea
        value={inputText}
        placeholder='Enter your text here'
        onChange={(e) => setInputText(e.target.value)}
        style={{ top: '1rem', left: '1rem', width: '30%', height: '20%', padding: '0.5rem', borderRadius: '0.375rem', zIndex: 1, marginLeft: '5rem', marginTop: '3rem', color: 'black' }}
      />
      <button
        onClick={addCard}
        style={{ position: "absolute", top: '3rem', left: '1rem', padding: '2vh 2vh', color: 'white', borderRadius: '0.375rem', backgroundColor: 'lightblue', zIndex: 1 }}
      >
        Add Card
      </button>
      <div style={{ position: 'relative', height: '100%', width: '100%', backgroundColor: '' }}>
        {cards.map((card) => (
          <Draggable key={card.id}>
            <div style={{ position: 'absolute', top: '100px', left: '100px' }}>
              <ResizableBox width={150} height={200} minConstraints={[100, 100]} maxConstraints={[400, 400]}>
                <div style={{ backgroundColor: 'skyblue', border: '1px solid #4b5563', padding: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '100%', height: '100%', resize: 'both', overflow: 'hidden' }}>
                  <p style={{ marginTop: "1rem" }}>{card.text.slice(0, Math.ceil(card.text.length / 2))}...</p>
                  <button
                    onClick={() => handleShowMore(card.text)} 
                    style={{ color: 'white', backgroundColor: 'slategray', width: '3rem', height: '3rem', margin: '0.5rem', borderRadius: '0.375rem', border: 'none', margin: "5rem" }}
                  >
                    Show More
                  </button>
                </div>
              </ResizableBox>
            </div>
          </Draggable>
        ))}
        {modal && (
          <Modal
            text={modalText} 
            onClose={() => setModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Canvas;
