
import React, {useState,useEffect} from 'react';
import { makeStyles } from "@material-ui/core";



let Withdraw = (props)=>{
    let UserContext = props.user;
    const ctx = React.useContext(UserContext);
    let user = ctx.users;

    let [up,setup] = useState(0);

    useEffect(()=>{}, [up])
    let balance = null;
    if(user){
        balance = Number(user.balance);
    }
    console.log(user);
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
    
    
    
    let [deposit, setDeposit] = useState(0);

    const onClick = async(e)=>{
        // e.prevent.default();
        if(deposit >= 0){
            window.alert('please enter a positive number');
            return;
        }
        
        user.balance += Number(deposit);
        if(user.balance < 0 ){
            window.alert('account overdrawn')
        }
        console.log(user.balance);
        balance = user.balance;
        setup(up+=1);
        console.log(up)
        let response = await fetch('/updateBalance', {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
                // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({
                balance: deposit,
                email: user.email
            }),
        })
        let data = await response.json();
        console.log(data)
        ctx.users = data; 
        
        console.log(up);
        console.log(ctx.users);

        setDeposit(0);
        window.alert('withdraw successfully made');




    }
    return(
        <>
        <link rel="stylesheet" 
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
        crossorigin="anonymous">
        </link>
        
        <div className={classes.cardDaddy}>

        
        <div class="card border-primary mb-3" className={classes.card} >
        <div class="card-header">Withdraw</div>
              <form>
            <h3>{user? user.balance:'please create an account'} </h3>
            <input type='number' placeholder='withdraw amount' onChange={(e)=> {
                setDeposit( -1 * e.target.value);
                console.log(deposit)
            }}></input>
            <button type='button' onClick={(e) => {onClick(e)}}>Withdraw</button>
        </form>  
        </div>
        </div>
        </>
    )
}

export default Withdraw;