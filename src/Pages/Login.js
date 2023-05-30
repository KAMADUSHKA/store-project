import { React,useState} from 'react'
import '../Style/Style.css'
import AdeonaLogo from '../componant/AdeonaLogo.png'
import TextField from '@mui/material/TextField';
import { FormControl, Grid, Paper, Button, Avatar, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';


export default function Login() {

 const paperStyle = {padding:20, height:'70vh', width:280, margin:"40px auto" }


  return (
             <>
                <Grid>
                  <Paper elevation={10}  style={paperStyle} sx={{borderRadius: 8}}

>
                    <Grid align={'center'} marginTop={8}>
                    <img alt='' src={AdeonaLogo}  height={70} width={110}/> 
                    <h1>Login</h1><br/>
                    <TextField id="outlined-basic" label="User Name" placeholder='Enter Your UserName' variant="outlined" fullWidth/><br/><br/><br/>
                    <TextField id="outlined-basic" label="Password" placeholder='Enter your Password' variant="outlined" fullWidth /><br/><br/><br/>
                    <Button variant="contained" fullWidth>Contained</Button>
                    </Grid>
                  </Paper>
                </Grid> 
             </>
  )
}






// const [showPassword, setShowPassword] = useState(false)
//  const handleClickShowPassword = () => {
//   setShowPassword(!showPassword);
// }


// {/* <form>

// <FormControl fullWidth
//      >
//     <InputLabel htmlFor="">Email</InputLabel>
//     <OutlinedInput
//      id="login-email"
//      type="text"
//     //  value={values.username}
//      name="username"
//     //  onBlur={handleBlur}
//     //  onChange={handleChange}
//      label="Email / Username"
//      inputProps={{}}
//      sx={{borderRadius: 4}}
//  />
// </FormControl>

// <FormControl fullWidth
//      >
//     <InputLabel htmlFor="">Password</InputLabel>
//     <OutlinedInput
//      id="login-password"
//      type={showPassword ? 'text' : 'password'}
//     //  value={values.username}
//      name="password"
//     //  onBlur={handleBlur}
//     //  onChange={handleChange}
//     endAdornment={
//             <InputAdornment>
//               <IconButton
//                         aria-label="toggle password visibility"
//                         onClick={handleClickShowPassword}
//                         // onMouseDown={handleMouseDownPassword}
//                         edge="end"
//                         size="large"
//                     >
//                         {/* {showPassword ? <Visibility/> : <VisibilityOff/>} */}
//                     </IconButton>
//             </InputAdornment>
//     }
//      label="Password"
//      inputProps={{}}
//      sx={{borderRadius: 4}}
//  />
// </FormControl>

// </form> */}