import * as React from "react";
import useState from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import UserProfile from "./UserProfile";

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const ResponsiveAppBar = () => {
//   const [User, setUser] = useState();

//   const getUser = (res)=>{
//     setUser(res);
//   }

//   return (
//     // <React.Fragment>
//     //   <AppBar sx={{background:"black"}}>
//     //     <Toolbar>
//     //     <Typography
//     //         variant="h6"
//     //         noWrap
//     //         component="div"
//     //       >
//     //         Edvora
//     //       </Typography>
//     //     </Toolbar>
//     //   </AppBar>
//     // </React.Fragment>

//     <AppBar sx={{background:"black"}} position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//           >
//             Edvora
//           </Typography>
//           <Typography
//             variant="h6"
//             component="div" sx={{ marginLeft: 'auto' }}
//           >
//           {/* {User.name} */}
//           </Typography>
//           <UserProfile >
//           </UserProfile>

//           {/* <Box  sx={{ flexGrow: 0, marginLeft: 'auto' }}>
//             <Tooltip title="Open settings">

//             </Tooltip>
//           </Box> */}

//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default ResponsiveAppBar;

class Navbar extends React.Component {
  render() {
    return (
      <AppBar sx={{ background: "#222" }} position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="div">
              Edvora
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ marginLeft: "auto" }}
            >
              {this.props.user.name}
            </Typography>
            <UserProfile data={this.props.user.url}></UserProfile>

            {/* <Box  sx={{ flexGrow: 0, marginLeft: 'auto' }}>
                    <Tooltip title="Open settings">
                    
                    
                    </Tooltip>
                </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}

export default Navbar;
