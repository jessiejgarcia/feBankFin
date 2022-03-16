import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { makeStyles } from "@material-ui/core";
import "./navBar.css";
import createMixins from '@material-ui/core/styles/createMixins';
// import { logout } from "../../redux/actions/AuthActions";
function Navbar(props) {
    let UserContext = props.user;
    const ctx = React.useContext(UserContext);
    let user = ctx.users;
    let [up,setup] = useState(0);

    useEffect(()=>{}, [up]);

    const useStyles = makeStyles({
        lnkBox:{
            width:"10rem"
        },
        none:{
            display: 'none',
        },
        header:{
            display:'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr',
            backgroundColor: 'black',
            height:"50px",
            paddingBottom: '5px',
            paddingTop: '5px'
        },
        link:{
            color:"white",
            fontSize:"1rem",
            fontWeight: '600',
            textDecoration: 'none',
            paddingRight: '20px'
        },
        btnBox:{
            gridColumnStart:'2',
            display: 'flex',
            flexDirection:'row-reverse',

        },
        logo:{
            gridColumnStart: '1',
            color:'white',
            fontSize:'26px',
            paddingLeft:'30px'
        },
        marginDown:{
            marginBottom:'100px'
        }
        
    })
    // const dispatch = useDispatch();
    // const auth = useSelector((state)=> state.auth)
    const classes = useStyles();
    let [showH, setShowH] = useState(false);
    let [showC, setShowC] = useState(false);
    let [showD, setShowD] = useState(false);
    let [showW, setShowW] = useState(false);
    let [showA, setShowA] = useState(false);
    let [showLogout, setShowLogout] = useState(false);
  return (
        <nav className={classes.marginDown}>
            {/* <link rel="stylesheet" src="../../App.css" /> */}
            <div className={classes.header}>
                <div className={classes.logoBox}>
                    <h3 className={`${classes.logo} hover` }>Bank of Jesse</h3>
                </div>
                <div className={`${classes.btnBox}`}>
                    <div
                    className={classes.lnkBox}
                    
                    >
                        <NavLink to="/" className={`${classes.link} hover`} 
                        onMouseEnter={(e)=> setShowH(true)}
                        onMouseLeave={(e)=> setShowH(false)}

                         activeclass="active">Home</NavLink>
                        <p className={`des ${showH?null:'none'}`}>This is the Home page</p>
                    </div>
                    <div
                    className={user.email? classes.lnkBox:classes.none}
                    
                    >
                        <NavLink to="/" className={`${classes.link} hover`} 
                        onMouseEnter={(e)=> setShowLogout(true)}
                        onMouseLeave={(e)=> setShowLogout(false)}
                        onClick= {()=> {ctx.users ={};
                        setup(up+=1);
                        }}

                         activeclass="active">Logout</NavLink>
                        <p className={`des ${showLogout?null:'none'}`}>This is the Logout Button</p>
                    </div>
                    <div
                    className={user.email? classes.none:classes.lnkBox}
                    
                    >
                        <NavLink to="/createAccount" className={`${classes.link} hover`} 
                        onMouseEnter={(e)=> setShowC(true)}
                        onMouseLeave={(e)=> setShowC(false)}

                         activeclass="active">Create Account</NavLink>
                        <p className={`des ${showC?null:'none'}`}>
                            This page is where you create your Account</p>
                    </div>
                    <div
                    className={user.email? classes.lnkBox:classes.none}>
                        <NavLink to="/deposit" className={`${classes.link} hover`} 
                        onMouseEnter={(e)=> setShowD(true)}
                        onMouseLeave={(e)=> setShowD(false)}

                         activeclass="active">Deposit</NavLink>
                        <p className={`des ${showD?null:'none'}`}>
                            This is the page to deposit to your account</p>
                    </div>
                    <div
                    className={user.email? classes.lnkBox:classes.none}>
                        <NavLink to="/withdraw" className={`${classes.link} hover`} 
                        onMouseEnter={(e)=> setShowW(true)}
                        onMouseLeave={(e)=> setShowW(false)}

                         activeclass="active">Withdraw</NavLink>
                        <p className={`des ${showW?null:'none'}`}>
                            The page for you to withdraw from your account</p>
                    </div>
                    {/* <div
                    className={classes.lnkBox}>
                        <NavLink to="/AllData" className={`${classes.link} hover`} 
                        onMouseEnter={(e)=> setShowA(true)}
                        onMouseLeave={(e)=> setShowA(false)}

                         activeclass="active">All Data</NavLink>
                        <p className={`des ${showA?null:'none'}`}>
                            Show all the data of the transactions you've made</p>
                    </div> */}
                 </div>
            </div>
        </nav>
  );
}

export default Navbar;
