
// import React, { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';
// import { styled } from '@mui/system';
// import axios from 'axios';

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// const FormContainer = styled(Box)(({ theme }) => ({
//   maxWidth: 450,
//   margin: 'auto',
//   padding: theme.spacing(2),
//   borderRadius: theme.spacing(2),
//   boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
//   backgroundColor: '#fff',
//   transition: 'box-shadow 0.3s ease',
//   '&:hover': {
//     boxShadow: '0 0 30px rgba(0, 0, 0, 0.2)',
//   },
// }));

// function SignUp() {
//   const [open, setOpen] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     try {
//       const response = await axios.post('http://localhost:2014/addusers', {
//         firstName: data.get('firstName'),
//         lastName: data.get('lastName'),
//         email: data.get('email'),
//         password: data.get('password'),
//         allowExtraEmails: data.get('allowExtraEmails') === 'on',
//       });
//       if (response.status === 200) {
//         setOpen(true);
//         event.target.reset(); // Clear form fields
//       }
//     } catch (error) {
//       console.error('Sign-up failed:', error);
//       setError('Failed to sign up. Please try again.');
//     }
//   };

//   return (
//     <Container component="main" maxWidth="sm">
//       <CssBaseline />
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <FormContainer>
//           <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign up
//             </Typography>
//           </Box>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox name="allowExtraEmails" color="primary" />}
//                   label="I want to receive weather related updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <RouterLink to="/signin" variant="body2">
//                   Already have an account? Sign in
//                 </RouterLink>
//               </Grid>
//             </Grid>
//           </Box>
//         </FormContainer>
//       </Box>
//       <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
//         <Alert onClose={() => setOpen(false)} severity="success">
//           Signed up successfully!
//         </Alert>
//       </Snackbar>
//       <Snackbar open={error !== null} autoHideDuration={6000} onClose={() => setError(null)}>
//         <Alert onClose={() => setError(null)} severity="error">
//           {error}
//         </Alert>
//       </Snackbar>
//       <Box mt={5}>
//         <Typography variant="body2" color="textSecondary" align="center">
//           {'Copyright © '}
//           <Link color="inherit" href="https://example.com/">
//            WeatherQuill
//           </Link>{' '}
//           {new Date().getFullYear()}
//           {'.'}
//         </Typography>
//       </Box>
//     </Container>
//   );
// }

// export default SignUp;


// 
import React, { useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const FormContainer = styled(Box)(({ theme }) => ({
  maxWidth: 500,
  margin: 'auto',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  transition: 'box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.2)',
  },
}));

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    allowExtraEmails: false
  });

  // const [message, setMessage] = useState('');
  // const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2014/insertuser', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        allowExtraEmails: formData.allowExtraEmails
      });
      if (response.status === 200) {
        setMessage('Signed up successfully!');
        setOpen(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          allowExtraEmails: false
        });
      }
    } catch (error) {
      console.error('Sign-up failed:', error);
      setError('Sign-up failed. Please try again.');
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <FormContainer>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
          </Box>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox id="allowExtraEmails" checked={formData.allowExtraEmails} onChange={handleCheckboxChange} />}
                  label="I want to receive weather related updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </FormContainer>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success">
          {message}
        </Alert>
      </Snackbar>
      <Box mt={5}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://example.com/">
            WeatherQuill
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Container>
  );
}
