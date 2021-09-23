// import React, { useEffect, useState } from "react";
// import "./Detail.css";
// import DATA from "../../components/Cards/Data";

// const Detail = ({ match }) => {
//   const [Value, setValue] = useState({});

//   useEffect(() => {
//     // eslint-disable-next-line
//     DATA.filter((data) => {
//       if (data.id === match.params.id) {
//         return setValue(data);
//       }
//     });
//   });

//   return (
//     <div className="DetailsContainer">
//       <img src={Value.DetailimgUrl} alt="" />
//       <div className="left">
//         <div className="Title">{Value.DetailTitle}</div>
//         <div className="Paragraph">{Value.DetailParagraph}</div>
//       </div>
//       <div className="right"></div>
//     </div>
//   );
// };

// export default Detail;
