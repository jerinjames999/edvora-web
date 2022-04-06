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
  // constructor(props) {
  //   super(props);
  //   this.getData = this.getData.bind(this);
  // }
  state = {rides : [], tabvalue: "1", customrides:[]};

  // getData =  ()=>{
  //     fetch('https://assessment.api.vweb.app/rides')
  //     .then((res)=>res.json())
  //     .then((res)=>{
  //       console.log("The values",this.props.stationCode);
  //         for (let i = 0; i < res.length; i++) {
            
  //           res[i].station_path.unshif(-1e5);
  //           res[i].station_path.push(1e5);

  //           let min_v, l = 0, r=res[i].station_path.length-2, pos;
            
  //           while(l<=r){
  //             let mid = Math.floor((l+r)/2);
  //             if(res[i].station_path[mid]<=this.props.stationCode && res[i].station_path[mid+1]>=this.props.stationCode){
  //               pos = mid;break;
  //             }else if(res[i].station_path[mid]>this.props.stationCode){
  //               r=mid-1;
  //             }else{
  //               l = mid+1;
  //             }
  //           }
  //           min_v = Math.min(Math.abs(this.props.stationCode-res[i].station_path[pos]), Math.abs(this.props.stationCode-res[i].station_path[pos+1]));
  //           res[i].station_path.pop();
  //           res[i].station_path.shift();

  //           // let min_v = 1e5;
  //           // for(let j = 0; j<res[i].station_path.length; j++){
  //           //   if(min_v>Math.abs(res[i].station_path[j]-this.props.stationCode)){
  //           //     min_v = Math.abs(res[i].station_path[j]-this.props.stationCode);
  //           //   }
  //           // }
  //           res[i].distance = min_v;
  //         }
  //         this.setState({rides: res});
  //         this.state.rides.sort(function(a,b){return a.distance-b.distance;})
  //         this.setState({customrides: this.state.rides});
  //     });

  // }
  getData =  async ()=>{
    let response = await fetch('https://assessment.api.vweb.app/rides');
    let res = await response.json();
      console.log("The values",this.props.stationCode);
        for (let i = 0; i < res.length; i++) {
          
          res[i].station_path.unshif(-1e5);
          res[i].station_path.push(1e5);

          let min_v, l = 0, r=res[i].station_path.length-2, pos;
          
          while(l<=r){
            let mid = Math.floor((l+r)/2);
            if(res[i].station_path[mid]<=this.props.stationCode && res[i].station_path[mid+1]>=this.props.stationCode){
              pos = mid;break;
            }else if(res[i].station_path[mid]>this.props.stationCode){
              r=mid-1;
            }else{
              l = mid+1;
            }
          }
          min_v = Math.min(Math.abs(this.props.stationCode-res[i].station_path[pos]), Math.abs(this.props.stationCode-res[i].station_path[pos+1]));
          res[i].station_path.pop();
          res[i].station_path.shift();

          // let min_v = 1e5;
          // for(let j = 0; j<res[i].station_path.length; j++){
          //   if(min_v>Math.abs(res[i].station_path[j]-this.props.stationCode)){
          //     min_v = Math.abs(res[i].station_path[j]-this.props.stationCode);
          //   }
          // }
          res[i].distance = min_v;
        }
        this.setState({rides: res});
        this.state.rides.sort(function(a,b){return a.distance-b.distance;})
        this.setState({customrides: this.state.rides});

}
  handleTabChange(event, tval){
    const Today = new Date();
    console.log("Date",Today);
    this.setState({tabvalue:tval});
    if(tval==="1"){
      this.setState({customrides:this.state.rides})
    }else if(tval==="2"){
      
      this.setState({customrides:this.state.rides.filter((ele)=>{
        console.log("How are you",ele);
        var dt = new Date(`${ele.date.slice(6,10)}-${ele.date.slice(0,2)}-${ele.date.slice(3,5)} ${ele.date.slice(17,19)==="PM"? parseInt(ele.date.slice(11,13))+12: ele.date.slice(11,13)}:${ele.date.slice(14,16)}:00`);
        // var jun3 = new Date("2016-06-03 0:00:00");
        console.log("Check this date",dt);
        return Today <= dt;

      })})
    }else if(tval==="3"){
      this.setState({customrides:this.state.rides.filter((ele)=>{
        console.log("How are you",ele);
        var dt = new Date(`${ele.date.slice(6,10)}-${ele.date.slice(0,2)}-${ele.date.slice(3,5)} ${ele.date.slice(17,19)==="PM"? parseInt(ele.date.slice(11,13))+12: ele.date.slice(11,13)}:${ele.date.slice(14,16)}:00`);
        // var jun3 = new Date("2016-06-03 0:00:00");
        console.log("Check this date",dt);
        return Today > dt;

      })})
    }
  }
  getUpComming = ()=>{
    const Today = new Date();
    let arr = this.state.rides.filter((ele)=>{
      console.log("How are you",ele);
      var dt = new Date(`${ele.date.slice(6,10)}-${ele.date.slice(0,2)}-${ele.date.slice(3,5)} ${ele.date.slice(17,19)==="PM"? parseInt(ele.date.slice(11,13))+12: ele.date.slice(11,13)}:${ele.date.slice(14,16)}:00`);
      // var jun3 = new Date("2016-06-03 0:00:00");
      console.log("Check this date",dt);
      return Today <= dt;

    })
    return arr.length;
  }

  async componentDidMount(){
      await this.getData();
      console.log("thi data ",this.state.rides);
      
  }
  render(){
    return(
      <Box>
        <RideTabs upcomming = {this.getUpComming()} pastrides={this.state.rides.length-this.getUpComming()} tabvalue = {this.state.tabvalue} handleTabChange={(event, newvalue)=>this.handleTabChange(event, newvalue)}></RideTabs>
        <RideData data={this.state.customrides}></RideData>
      </Box>
    );
  }
}

export default HomeBody;
