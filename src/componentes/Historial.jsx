

// // Función para obtener datos del historial desde localStorage
// const getHistoryFromLocalStorage = () => {
//  const history = localStorage.getItem('history');
//  return history ? JSON.parse(history) : [];
// };

// // Función para guardar datos del historial en localStorage
// const saveHistoryToLocalStorage = (history) => {
//  localStorage.setItem('history', JSON.stringify(history));
// };

// // Componente para agregar nuevos elementos al historial
// const AddToHistory = () => {
//  const [history, setHistory] = useState(getHistoryFromLocalStorage());
//  const [newItem, setNewItem] = useState('');

//  const handleAddToHistory = () => {
//     const updatedHistory = [...history, newItem];
//     setHistory(updatedHistory);
//     saveHistoryToLocalStorage(updatedHistory);
//  };

//  return (
//     <div>
//       <input value={newItem} onChange={(e) => setNewItem(e.target.value)} />
//       <button onClick={handleAddToHistory}>Agregar al historial</button>
//     </div>
//  );
// };

// // Componente para mostrar el historial
// const HistoryDisplay = () => {
//  const [history, setHistory] = useState(getHistoryFromLocalStorage());

//  useEffect(() => {
//     setHistory(getHistoryFromLocalStorage());
//  }, []);

//  return (
//     <div>
//       <h2>Historial</h2>
//       <ul>
//         {history.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//  );
// };

// export { AddToHistory, HistoryDisplay };


// // // En este ejemplo, hemos creado dos componentes, AddToHistory y HistoryDisplay. 
// // El primero permite agregar nuevos elementos al historial, mientras que el segundo muestra los elementos actuales del historial.

// // // Tanto el componente AddToHistory como el componente HistoryDisplay utilizan 
// // las funciones getHistoryFromLocalStorage y saveHistoryToLocalStorage para interactuar con localStorage.

// // // Puedes utilizar estos componentes en diferentes páginas para agregar elementos 
// // al historial y mostrarlos en el historial. Por ejemplo, en App.js:




// import { useState, useEffect } from 'react';
// import { AddToHistory, HistoryDisplay } from './HistoryFunctions';

// function App() {
//  return (
//     <div className="App">
//       <h1>Agregar al historial</h1>
//       <AddToHistory />
//       <h1>Historial</h1>
//       <HistoryDisplay />
//     </div>
//  );
// }

// export default App;



