import React from 'react';
import { makeStyles } from "@material-ui/core";



let CreateAccount = (props)=>{
    
    let [show, setShow]         = React.useState(false);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    
    let UserContext = props.user;
    const ctx = React.useContext(UserContext); 



    const useStyles = makeStyles({
        disable:{
            display:'none',
            color: 'blue'
        }, card:{
            maxWidth:'200px',
            gridColumnStart:'2',
        },
        cardDaddy:{
            display: 'grid',
            gridTemplateColumns: '2fr 2fr 1fr'
        }

        
    })
    const classes = useStyles();

    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        if(label === 'password' && field.length < 8){
            window.alert('password must be at least 8 characters');
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    } 
    let showF = () =>{
        if(name && email && password){
            setShow(true);
        }
        else{
            setShow(false);
        }
    }
    let onSubmit = async ()=>{
        if (!validate(name,     'name')){window.alert('please enter your name');
            return};
        if (!validate(email,    'email')){window.alert('please enter your email');
        return};
        if (!validate(password, 'password')) return;
        
        
        let data = await fetch('/createAccount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({
                name: name, 
                email: email, 
                password:password,
            }),
        })
        let user = await data.json();
        console.log(user)
        ctx.users= user;
        console.log(ctx.users);
        window.alert('Success');


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
        <div class="card-header">Create Account</div>
        <form>
            <label for='name' >Name</label>
            <input type='name' name='name' onChange={(e) => {
                showF();
                return setName(e.target.value)
                }}></input>
            <label for='email'>Email</label>
            <input type='email' name='email' onChange={(e) => {
                showF();
                setEmail(e.target.value)}}></input>
            <label for='password' >Password</label>
            <input type='password' name='password' onChange={(e) => {
                showF();
                setPassword(e.target.value)}}></input>
            <button  type='button' onClick={onSubmit} className={show? null:classes.disable}>Create Account</button>

        </form>
              
        </div>
        </div>
        </>
    )
}

export default CreateAccount;