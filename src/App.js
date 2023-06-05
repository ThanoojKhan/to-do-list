import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  // Get the current day
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

  const handleAddToDo = () => {
    if (toDo.trim() !== '') {
      setToDos([...toDos, { id: Date.now(), text: toDo, status: false, delete: false }]);
      setToDo('');
    }
  };

  const handleDeleteToDo = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  const handleToggleStatus = (id) => {
    setToDos(
      toDos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      })
    );
  };

  const activeItems = toDos.filter((todo) => todo.status);

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>It's {currentDay}. Wassup 4 2day </h2>
      </div>
      <div className="centre">
        <div className="input">
          <input
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
            type="text"
            placeholder="🖊️ Add List..."
          />
          <i onClick={handleAddToDo} className="fas fa-plus"></i>
        </div>
      </div>
      <div className="todos">
        {toDos.map((value) => {
          return (
            <div className="todo" key={value.id}>
              <div className="left">
                <input
                  onChange={() => handleToggleStatus(value.id)}
                  checked={value.status}
                  type="checkbox"
                />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i onClick={() => handleDeleteToDo(value.id)} className="fas fa-times"></i>
              </div>
            </div>
          );
        })}
      </div>
      {activeItems.length > 0 && (
        <div className="mainHeading">
          <br />
          <br />
          <h1>Active List</h1>
        </div>
      )}
      {activeItems.map((value) => {
        return (
          <div key={value.id}>
            <div className="centre">
              <div className="input">{value.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;



// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [toDos, setToDos] = useState([])
//   const [toDo, setToDo] = useState('')
//   return (
//     <div className="app">
//       <div className="mainHeading">
//         <h1>ToDo List</h1>
//       </div>
//       <div className="subHeading">
//         <br />
//         <h2>Yaayy, it's Wednesday 🌝 ☕ </h2>
//       </div>
//       <div className='centre'>
//         <div className="input">
//           <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
//           <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false, delete: false }])} className="fas fa-plus"></i>
//         </div>
//       </div>
//       <div className="todos">
//         {
//           toDos.map((value) => {
//             return (
//               <div className="todo">
//                 <div className="left">
//                   <input onChange={(e) => {
//                     setToDos(toDos.filter(obj => {
//                       if (obj.id === value.id) {
//                         obj.status = e.target.checked
//                       }
//                       return obj
//                     }))
//                   }} value={value.status} type="checkbox" name="" id="" />
//                   <p>{value.text}</p>
//                 </div>
//                 <div className="right">
//                   <i className="fas fa-times"></i>
//                 </div>
//               </div>
//             )
//           })
//         }
//       </div>
//       <div className="mainHeading"><br /><br />
//         <h1>Active List</h1>
//       </div>
//       {
//         toDos.map((value) => {
//           if (value.status) {
//             return (
//               <div>
//                 <div className='centre'>
//                   <div className="input">{value.text}
//                   </div>
//                 </div>
//               </div>
//             )
//           }
//           return null
//         })
//       }
//     </div>
//   );
// }

// export default App;