import React from 'react'
// import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

// function FetchApi({data}) {
//     // const [Data, setData] = useState([]);
//     // const getData = ()=>{
        
//     //     fetch('https://assessment.api.vweb.app/user')
//     //     .then((res)=>res.json())
//     //     .then((res)=>{
//     //         console.log(res);
//     //         setData(res);
//     //         // props.getUser(res);
//     //         console.log("Hiiii",Data);
//     //     });
//     // }
//     // useEffect(() => {
    
//     //   getData();
//     // }, [])
    
//   return (
      
//     <IconButton sx={{ p: 0 , marginLeft: '20px'}}>
//       <Avatar alt="Remy Sharp" src={data.url} />
//     </IconButton>
//   )
// }

// export default FetchApi

class UserProfile extends React.Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    return (
      <IconButton sx={{ p: 0 , marginLeft: '20px'}}>
       <Avatar alt="Remy Sharp" src={this.props.data} />
     </IconButton>
    );
  }
};
export default UserProfile;