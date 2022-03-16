import React, {useState,useEffect} from 'react';
import { makeStyles } from "@material-ui/core";


let Deposit = (props)=> {
    

    let UserContext = props.user;
    const ctx = React.useContext(UserContext);
    let user = ctx.users;
    let [up,setup] = useState(0);

    useEffect(()=>{}, [up])
    let balance = null;
    if(user){
        balance = Number(user.balance);
    }
    console.log(ctx.users)
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
    
    
    
    let [deposit, setDeposit] = useState(null);

    const onClick = async (e)=>{
        // e.prevent.default();
        if(deposit <= 0){
            window.alert('please enter a positive number');
            return;
        }
        if(deposit=== 0 ){
            return;
        }
        let depositI = Number(deposit);
        let response = await fetch('/updateBalance', {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
                // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({
                balance: depositI,
                email: user.email
            }),
        })
        let data = await response.json();
        console.log(data)
        
        ctx.users = data;
        console.log(ctx.users, data.user)
        setDeposit(0);
        window.alert('deposit successfully made');




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
        <div class="card-header">Deposit</div>
              <form>
            <h3>{user? balance:'please create an account'} </h3>
            <input type='number' placeholder='deposit amount' onChange={(e)=> {
                setDeposit(e.target.value);
            }}></input>
            <button type='button' onClick={(e) => {onClick(e)
            setup(up+=1)
            }}>Deposit</button>
        </form>  
        </div>
        </div>
        </>
    )
}
 
export default Deposit;