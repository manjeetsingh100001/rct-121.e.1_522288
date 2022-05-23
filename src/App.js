import React, { useState,useEffect } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [page,setPage]=useState(1);
  // const [sort,setSort]=useState("asc");
  const [loading,setLoading]=useState(true)
 useEffect(()=>{
   fetchData(page)
       },[page])
 const fetchData=(page)=>{
              setLoading(true)
      return fetch(`https://json-server-mocker-masai.herokuapp.com/candidates?_sort=salary&_order=asc&_page=${page}&_limit=5`)
             .then((res)=>res.json())
             .then((res)=>setData(res))

             .catch((err)=>{
               alert(err)
             })
             .finally(()=>
             {
              setLoading(false)
             })
            
 }
 const prevPage=()=>{
   setPage(page-1)
 }
 const nextPage=()=>{
  
   setPage(page+1)
}
// const sortData=(title)=>{
//   if(sort==true){111111
//     setSort("asc")
//   }else{
//     setSort("desc")
//   }
// // if(title==="Sort by Ascending Salary"){
// //   setSort("asc")
// // }else{
// //   setSort("desc")
// // }
// }
// console.log(data)
  return (
    <div className="App">
      <div>
       {loading && <div id="loading-container">...Loading</div>}
        
        <Button id="SORT_BUTTON" title={`Sort by Ascending Salary`}  />
        <Button title="PREV" id="PREV" disabled={page===1} onClick={prevPage}/>
        <Button id="NEXT" title="NEXT" onClick={nextPage} />
      </div>
      {data.map((item) => <div>{<CandidateCard key={item.id} {...item} /> }</div>)}
    </div>
  );
}
