import Withdraw from "../Withdraw/Withdraw";
import React from 'react';
import { makeStyles } from "@material-ui/core";



let AllData = (props) =>{
    const useStyles = makeStyles({
        card:{
            maxWidth:'200px',
            gridColumnStart:'2',
        },
        cardDaddy:{
            display: 'grid',
            gridTemplateColumns: '2fr 2fr 1fr'
        }

        
    })
    const classes = useStyles();
    
    let UserContext = props.user;
    const ctx = React.useContext(UserContext);
    console.log(ctx.users)
    return(
        <>
        <link rel="stylesheet" 
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
        crossorigin="anonymous">
        </link>
        {ctx.users.map((ele,i)=>{
        return(
            
        <div key={i}>
        
        
        <div className={classes.cardDaddy}>

        
        <div class="card border-primary mb-3" className={classes.card} >
        <div class="card-header">{`Transaction Number:${i +1}`}</div>
            
            <p>{`Name: ${ele.name}`}</p>
            <p>{`Email: ${ele.email}`}</p>
            <p>{`Password: ${ele.password}`}</p>
            <p>{`Balance: ${ele.balance}`}</p>
        </div>
        </div>
            
            
            
        </div>
        )
        })}
        </>
    )
}

export default AllData;