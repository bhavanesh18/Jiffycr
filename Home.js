import React, { useState, Fragment, useEffect } from 'react';
import QRCode from 'qrcode.react'
import './App.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import trimmer from './trimmer.jpg';
import AC from './ac.jpg'
import WB from './washing.jpg'
import fridge from './fridge.jpeg'
import sha256 from "sha256"
import initJWTService from 'jwt-service'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: '2%',
    borderRadius:25,
    backgroundColor:'white'
  },
  media: {
    flex:1,
    justifyContent:'center',
   height:230,
   width:200,
   alignItems:'center',
      marginTop:20
   
    
  },
});

export default function App() {

  const [item, setItem] = useState();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  async function Fridgesubmit() {
    const jwt = await initJWTService({
      JWT: {
        secret: 'secret',
        duration: '200d',
        tolerance: '2000h',
        algorithms: ['HS256'],
      },
      log: console.log.bind(console),
      time: Date.now.bind(Date),
    });

    const token = await jwt.sign({
      "appliances_name": "LG fridge",
    });
    var CryptoJS = require("crypto-js");
    var ciphertext = CryptoJS.AES.encrypt("LG fridge", "7358236040").toString();
    var test = sha256("7358236040");
    setItem(ciphertext + test)
    console.log(ciphertext + test)
    const body = {
      "mobile_number": "9840591484",
      "data": ciphertext + test
    }
    const regular = {
      url: 'http://localhost:5009/data_create',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(body)
    }
    axios(regular)
      .then(response => {
        console.log(response)
      })
    setOpen(true)
    setOpen3(false)
  }
  async function Trimmersubmit() {
    const jwt = await initJWTService({
      JWT: {
        secret: 'secret',
        duration: '200d',
        tolerance: '2000h',
        algorithms: ['HS256'],
      },
      log: console.log.bind(console),
      time: Date.now.bind(Date),
    });

    const token = await jwt.sign({
      "appliances_name": "Philips trimmer",
    });
    var CryptoJS = require("crypto-js");
    var ciphertext = CryptoJS.AES.encrypt("Philips trimmer", "7358236040").toString();
    var test = sha256("7358236040");
    setItem(ciphertext + test)
    console.log(ciphertext + test)
    setOpen(true)
    setOpen2(false)
    const body = {
      "mobile_number": "9840591484",
      "data": ciphertext + test
    }
    const regular = {
      url: 'http://localhost:5009/data_create',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(body)
    }
    axios(regular)
      .then(response => {
        console.log(response)
      })
  }

  async function ACsubmit() {
    const jwt = await initJWTService({
      JWT: {
        secret: '7358236040',
        duration: '200d',
        tolerance: '2000h',
        algorithms: ['HS256'],
      },
      log: console.log.bind(console),
      time: Date.now.bind(Date),
    });

    const token = await jwt.sign({
      "appliances_name": "O General air conditioner",
    });
    var CryptoJS = require("crypto-js");
    var ciphertext = CryptoJS.AES.encrypt("O General air conditioner", "7358236040").toString();
    var test = sha256("7358236040");
    setItem(ciphertext + test)
    console.log(ciphertext + test)
    setOpen(true)
    setOpen1(false)
    const body = {
      "mobile_number": "9840591484",
      "data": ciphertext + test
    }
    const regular = {
      url: 'http://localhost:5009/data_create',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(body)
    }
    axios(regular)
      .then(response => {
        console.log(response)
      })
  }
  async function WBsubmit() {
    const jwt = await initJWTService({
      JWT: {
        secret: 'secret',
        duration: '200d',
        tolerance: '2000h',
        algorithms: ['HS256'],
      },
      log: console.log.bind(console),
      time: Date.now.bind(Date),
    });

    const token = await jwt.sign({
      "appliances_name": "IFB Washing machine",
    });
    var CryptoJS = require("crypto-js");
    var ciphertext = CryptoJS.AES.encrypt("IFB Washing machine", "7358236040").toString();
    var test = sha256("7358236040");
    setItem(ciphertext + test)
    console.log(ciphertext + test)
    const body = {
      "mobile_number": "9840591484",
      "data": ciphertext + test
    }
    const regular = {
      url: 'http://localhost:5009/data_create',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(body)
    }
    axios(regular)
      .then(response => {
        console.log(response)
      })
    setOpen(true)
    setOpen4(false)
  }
  const classes = useStyles();
  return (
    <div style={{backgroundImage:'linear-gradient(#bdc3c7, #2c3e50)'}}>
      <Grid
        container
        direction="row"
        justify="center"
      >
        <Card className={classes.root}>

          <center>
          <CardMedia
            className={classes.media}
            image={AC}
            title="Air conditioner"
          />
          </center>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              O General air conditioner
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              O General also called Fujitsu General is a Japanese air conditioning brand manufacturing air conditioner with headquarters in Chennai but manufacturing unit in Thailand.
          </Typography>
          </CardContent>
          <CardActions onClick={() => { setOpen1(true) }} style={{flex:1,justifyContent:'flex-end',alignItems:'center',marginRight:30}}>
            <IconButton size="small">
              <h2 style={{backgroundColor:'#f0671d' ,color:'white',padding:5,borderRadius:10,width:100}}> ADD</h2>
            </IconButton>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <center>
          <CardMedia
            className={classes.media}
            image={trimmer}
            title="Trimmer"
          />
          </center>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Philips trimmer
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Trim your stubble beard with our new Lift & Trim system: the comb lifts and guides the hairs to the level of the blades for an even trim.Manufactured in India
          </Typography>
          </CardContent>
          <CardActions onClick={() => { setOpen2(true) }} style={{flex:1,justifyContent:'flex-end',alignItems:'center',marginRight:30}}>
            <IconButton size="small">
              <h2 style={{backgroundColor:'#f0671d' ,color:'white',padding:5,borderRadius:10,width:100}}> ADD</h2>
            </IconButton>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <center>
          <CardMedia
            className={classes.media}
            image={fridge}
            title="Fridge"
          />
          </center>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              LG fridge
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              The new range of LG Refrigerators come with ConvertiblePLUS, Inverter Linear Compressor & Door Cooling+™ features. Explore the unique patterns with LG Refrigerators that are the best in class. Check LG Refrigerator prices online.
          </Typography>
          </CardContent>
          <CardActions onClick={() => { setOpen3(true) }} style={{flex:1,justifyContent:'flex-end',alignItems:'center',marginRight:30}}>
            <IconButton size="small">
              <h2 style={{backgroundColor:'#f0671d' ,color:'white',padding:5,borderRadius:10,width:100}}> ADD</h2>
            </IconButton>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <center>
          <CardMedia
            className={classes.media}
            image={WB}
            title="Washing machine"
          />
          </center>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              IFB Washing machine
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Good things first. One of the commendable entity of IFB washing machine is its quick wash time compared to other premium brands like Samsung or LG. ... Though IFB is pretty reliable and robust brand, it lacks innovative features offered by Samsung or LG washers.
          </Typography>
          </CardContent>
          <CardActions onClick={() => { setOpen4(true) }} style={{flex:1,justifyContent:'flex-end',alignItems:'center',marginRight:30}}>
            <IconButton size="small">
              <h2 style={{backgroundColor:'#f0671d' ,color:'white',padding:5,borderRadius:10,width:100}}> ADD</h2>
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          QR code
        </DialogTitle>
        <DialogContent dividers>
          <QRCode
            id="123456"
            value={item}
            size={290}
            level={"H"}
            includeMargin={true}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog aria-labelledby="customized-dialog-title" open={open1}>
        <DialogTitle id="customized-dialog-title">
          PROCEED TO PAYMENT?
        </DialogTitle>
        <DialogActions>
          <Button autoFocus variant="contained" onClick={ACsubmit} color="secondary">
            PROCEED
          </Button>
          <Button autoFocus onClick={() => setOpen1(false)} color="inherit">
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog aria-labelledby="customized-dialog-title" open={open2}>
        <DialogTitle id="customized-dialog-title">
          PROCEED TO PAYMENT?
        </DialogTitle>
        <DialogActions>
          <Button autoFocus variant="contained" onClick={Trimmersubmit} color="secondary">
            PROCEED
          </Button>
          <Button autoFocus onClick={() => setOpen2(false)} color="inherit">
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog aria-labelledby="customized-dialog-title" open={open3}>
        <DialogTitle id="customized-dialog-title">
          PROCEED TO PAYMENT?
        </DialogTitle>
        <DialogActions>
          <Button autoFocus variant="contained" onClick={Fridgesubmit} color="secondary">
            PROCEED
          </Button>
          <Button autoFocus onClick={() => setOpen3(false)} color="inherit">
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog aria-labelledby="customized-dialog-title" open={open4}>
        <DialogTitle id="customized-dialog-title">
          PROCEED TO PAYMENT?
        </DialogTitle>
        <DialogActions>
          <Button autoFocus variant="contained" onClick={WBsubmit} color="secondary">
            PROCEED
          </Button>
          <Button autoFocus onClick={() => setOpen4(false)} color="inherit">
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
