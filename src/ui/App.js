import * as React from 'react';
import Navbar from "./Navbar/Navbar";
import Container from '@mui/material/Container';
import HomeBody from './homeBody/HomeBody';
// function App() {
//   return (
    
//     <Container fixed className="App">
//       <Navbar></Navbar>
//     {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
//       <ResponsiveTabs></ResponsiveTabs>
//   </Container>

//   );
// }

// export default App;

class App extends React.Component{
  state = {user : []};
  getData(){
      
      fetch('https://assessment.api.vweb.app/user')
      .then((res)=>res.json())
      .then((res)=>{
          console.log(res);
          this.setState({user: res});
          // props.getUser(res);
          console.log("Hiiii",this.state.user);
      });

  }

  componentDidMount(){
      this.getData();
  }

  render(){
    return(
      <Container fixed className="App" style={{backgroundColor: '#000'}}>
        <Navbar user={this.state.user}></Navbar>
     {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
       <HomeBody stationCode = {this.state.station_code}></HomeBody>
      </Container>
    );
  }
}

export default App;
