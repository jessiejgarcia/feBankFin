import React, {useEffect,useState} from "react";
import { makeStyles } from "@material-ui/core";
import cat from './ForestCat.jpeg';


let  Home = (props) => {

    let UserContext = props.user;
    const ctx = React.useContext(UserContext); 
    let user = ctx.users;
    let [up,setup] = useState(0);

    useEffect(()=>{}, [up])
    const useStyles = makeStyles({
        card:{
            maxWidth:'50rem',
            gridColumnStart:'2',
        },
        cardDaddy:{
            display: 'grid',
            gridTemplateColumns: '2fr 4fr 2fr'
        }, 
        none: {
            display: 'none'
        },
        items: {
            justifyContent: 'space-between',
        }

        
    })

    const classes = useStyles();
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');

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

    let onSubmit = async ()=>{
        
        if (!validate(email,    'email')){window.alert('please enter your email');
        return};
        if (!validate(password, 'password')) return;
        ;
        let response = await fetch('/Login', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({
                email: email, 
                password:password,
            }),
        })
        let data = await response.json()
        let userL = data[0];
        ctx.users= userL;
        setup(up +=1);
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
        <div class="card-header">Jesse Garcia's Bank</div>
        <p>Welcome to the Jungle</p>
        <img src={cat}
         alt='why don"t you work' />
         <div className={classes.cardDaddy}>

        
<div class="card border-primary mb-3" className={user.email?classes.none:classes.card} >
    <div class="card-header">Login</div>
        <form>
            <div className={classes.items}>
                <label for='email'>Email:</label>
            </div>
            <div>
                <input type='email' name='email' onChange={(e) => {
                    setEmail(e.target.value)}}></input>
            </div>
            <div>
                 <label for='password' >Password: </label>
            </div>
            <div>
            <input type='password' name='password' onChange={(e) => {
                setPassword(e.target.value)}}></input>
            </div>
           
            <button  type='button' onClick={onSubmit} >Login</button>

        </form>
    </div>
</div>
<div
className={user.email?classes.card:classes.none}>
    <h1>{`Welcome ${user.name}`}</h1>
</div>
             
        </div>
        </div>
        </>
    )
}
export default Home;