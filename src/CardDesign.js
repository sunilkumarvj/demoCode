import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
const useStyles = makeStyles({
  root: {
    width:780,
    border:'solid 2px black'
  },

  floating:{
      float: 'left'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  buttonflow:{
      float:'right'
  },
  button1:{
      border:'solid 1.5px black',
      borderRadius:0,
      color:'black',
      fontSize:14,
      fontFamily:'Times New Romanial',
      textTransform:'initial',
      '&:hover': {
        background: "red",
        color:'white'
     }
  },
  button2:{
    border:'solid 1.5px gray',
    borderRadius:0,
    color:'white',
    backgroundColor:'gray',
    fontSize:14,
    fontFamily:'Times New Romanial',
    textTransform:'initial',
    '&:hover': {
        background: "green",
     }
  },
 
  Cancelvalue:{
    textAlign: 'left',
    color:'black',
    fontSize:16,
    fontWeight:600
  },
  BCompany:{
      fontSize:10,
      textAlign: 'left',
      color:'black'
  },
  links:{
      position:'relative',
      left:'570px',
      color:'#2F4F4F',
      fontSize:12,
      fontFamily:'Times New Romanial',
      fontWeight:600
  },
  dropdown:{
      position:'relative',
      top:'8px'
  },
  reference:{
      color:'grey',
      fontSize:10,
      textAlign: 'left',
    position:'relative',
    top:10
  },
  reference2:{
    color:'black',
    fontSize:10,
    textAlign: 'left',
  position:'relative',
  top:10,
  fontWeight:600
},
  divvalues:{
      display:'grid',
      gridTemplateColumns:'auto auto auto auto auto',
      position:'relative',
      top:10
  },
  borderline:{
    position:'relative',
    top:13,
    borderLeft: '2px solid #696969',
    height: '25px'
  }
});

export default function OutlinedCard() {
  const classes = useStyles();


  return (
    <Card className={classes.root} >
      <CardContent className={classes.floating}>
        <Typography className={classes.Cancelvalue}>
        Cancel / recall payment, GBP 1,000.00
        </Typography>
        <Typography className={classes.BCompany}>
        1234567890123456 (GB), KUIML Business Company
        </Typography>
        <div className={classes.divvalues}>
       <div>
       <Typography className={classes.reference}>
        Request reference
        </Typography>
        <Typography className={classes.reference2}>
        SET29383ABCH
        </Typography>
       </div>
       <div className={classes.borderline}></div>
       <div>
       <Typography className={classes.reference}>
        Category
        </Typography>
        <Typography className={classes.reference2}>
        Payment
        </Typography>
       </div>
       <div className={classes.borderline}></div>
       <div>
       <Typography className={classes.reference}>
        Request status
        </Typography>
        <Typography className={classes.reference2}>
        Pending authorisation
        </Typography>
       </div>
        </div>

        <Link className={classes.links} href="#">Full details<KeyboardArrowDownIcon className={classes.dropdown}/></Link>
      
      </CardContent>

      <CardActions className={classes.buttonflow}>
        <Button size="small" className={classes.button1}>Reject</Button>
        <Button size="small" className={classes.button2}>Authorise</Button>
     
      </CardActions>
      
    </Card>
  );
}
