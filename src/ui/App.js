import * as React from 'react';
import Navbar from "./Navbar/Navbar";
import Container from '@mui/material/Container';
import HomeBody from './HomeBody/HomeBody';
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
  getData = async ()=>{
      
      let response = await fetch('https://assessment.api.vweb.app/user');
      let res = await response.json();
          console.log(res);
          this.setState({user: res});
          // props.getUser(res);
          console.log("Hiiii",this.state.user);

  }

  async componentDidMount(){
      await this.getData();
  }

  render(){
    return(
      <Container fixed className="App" style={{backgroundColor: '#444'}}>
        <Navbar user={this.state.user}></Navbar>
     {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
     {console.log()}
       <HomeBody stationCode = {this.state.user.station_code}></HomeBody>
      </Container>
    );
  }
}

export default App;
