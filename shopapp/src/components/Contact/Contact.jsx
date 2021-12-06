import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '75vh',
      marginTop:'15vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: 'url(https://images.unsplash.com/photo-1508162245510-bf2772371e86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
       backgroundColor:'white'
      },
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      marginBottom:'1vh',
    },
    paper: {
      margin: theme.spacing(6, 6),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      marginBottom:'1vh',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      width: '150px'
    },
  }));

const Contact = () => {
  const { register, errors, handleSubmit, reset } = useForm();
  const classes = useStyles();


  const toastifySuccess = () => {
    toast.success('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      color:'green',
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_01', e.target, 'user_yzkJ41AYpBrZpldOb8ikg')
      .then((result) => {
        reset();
        toastifySuccess();
        console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }




  return (
<Grid container component="main" className={classes.root} fullWidth>


<Grid item xs={12} sm={6} md={6} component={Paper} elevation={0} square>
<ToastContainer/>
  <div className={classes.paper} style={{backgroundColor:'trasparent'}}>
  <Typography component="h2" position="left" variant="h5" style={{marginBottom:'20px',color:'gray'}}>
    Contact message
  </Typography>
  <form id='contact-form' className={classes.form} onSubmit={sendEmail}>
     {/* Row 1 of form */}
     <div className='row formRow'>
                  <div className='col-6'>
                    <TextField
                      type='text'
                      name='name'
                      fullWidth
                      variant="outlined"
                      placeholder='Name'
                    ></TextField>
                  </div>
                  <div className='col-6'>
                  <TextField
                      type='email'
                      name='email'
                      variant="outlined"
                      fullWidth
                      ref={register({
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></TextField>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <TextField
                      type='text'
                      name='subject'
                      variant="outlined"
                      fullWidth
                      ref={register({
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></TextField>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <TextField
                     id="outlined-multiline-static"
                     multiline
                      rows={3}
                      name='message'
                      fullWidth
                      variant="outlined"
                      ref={register({
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></TextField>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>

    <div style={{textAlign:'right'}}>
      <Button
        type="submit"
        variant="contained"
        color="Primary"
        className={classes.submit}
        style={{ color: 'white'}}
      >
        Send
      </Button>
      </div>

    </form>
  </div>
</Grid>

</Grid>

  );
};

export default Contact;