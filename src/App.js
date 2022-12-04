// e.key === 'Enter'
import React, { useState } from 'react';

export default function App() {
  const [keywords, setKeywords] = useState([]);

  const handleKeydown = (e) => {
    if (e.key === 'Enter') {
      setKeywords([...keywords, e.target.value]);
    }
  };

  return (
    <div>
      <input onKeyDown={handleKeydown} />
      <ul>
        {keywords.map((keyword, i) => (
          <li key={i}>{keyword}</li>
        ))}
      </ul>
    </div>
  );
}

// // e.nativeEvent.isComposing
// import React, { useState } from 'react';

// export default function App() {
//   const [keywords, setKeywords] = useState([]);

//   const handleKeydown = (e) => {
//     if (!e.nativeEvent.isComposing && e.key === 'Enter') {
//       setKeywords([...keywords, e.target.value]);
//     }
//   };

//   return (
//     <div>
//       <input onKeyDown={handleKeydown} />
//       <ul>
//         {keywords.map((keyword, i) => (
//           <li key={i}>{keyword}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // e.KeyCode
// import React, { useState } from 'react';

// export default function App() {
//   const [keywords, setKeywords] = useState([]);

//   const handleKeydown = (e) => {
//     if (e.keyCode === 13) {
//       setKeywords([...keywords, e.target.value]);
//     }
//   };

//   return (
//     <div>
//       <input onKeyDown={handleKeydown} />
//       <ul>
//         {keywords.map((keyword, i) => (
//           <li key={i}>{keyword}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
