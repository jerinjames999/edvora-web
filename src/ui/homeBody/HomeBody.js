import * as React from 'react';
import RideTabs from './RideTabs';
import Box from '@mui/material/Box';
import RideData from './RideData';
// const ResponsiveTabs = () => {
//     return (
//         <Box>
//             <Tabs>

//             </Tabs>
// <RideData></RideData>
//         </Box>
        
//     );
//   };
// export default ResponsiveTabs;
class HomeBody extends React.Component{

  state = {rides : []};
  getData(){
      
      fetch('https://assessment.api.vweb.app/rides')
      .then((res)=>res.json())
      .then((res)=>{
          console.log(res);
          this.setState({rides: res});
          // props.getUser(res);
          console.log("how are you",this.state.rides);
      });

  }

  componentDidMount(){
      this.getData();
  }
  render(){
    return(
      <Box>
        <RideTabs upcomming = {this.state.rides.length} pastrides={this.state.rides.length}></RideTabs>
        <RideData data={this.state.rides}></RideData>
      </Box>
    );
  }
}

export default HomeBody;
