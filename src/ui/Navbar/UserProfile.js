import React from 'react'
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

class UserProfile extends React.Component{
  
  render(){
    return (
      <IconButton sx={{ p: 0 , marginLeft: '20px'}}>
       <Avatar alt="Remy Sharp" src={this.props.data} />
     </IconButton>
    );
  }
};
export default UserProfile;