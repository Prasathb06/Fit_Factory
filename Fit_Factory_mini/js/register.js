
const username=document.getElementById('Username')
const email=document.getElementById('exampleInputEmail1')
const password=document.getElementById('exampleInputPassword1')
const confirmpassword=document.getElementById('cfpassword')
const form=document.getElementById('form')

let checkUsername = 'A07@123'
let checkEmail = 'arun@gmail.com';
let checkPassword = 'Arun';
let checkConfirmpassword = 'Arun';

form.addEventListener('submit',e=>{
    e.preventDefault(); 
    validateInputs();
})

const setError=(element,message)=> {
        const inputGroup=element.parentElement;
        const errorDisplay=inputGroup.querySelector('.error')
    
        errorDisplay.innerText=message
        inputGroup.classList.add('.error')
        inputGroup.classList.remove('.sucess')
    }
    function setSucess(element) {
        const inputGroup=element.parentElement
        const errorDisplay=inputGroup.querySelector('.error')
    
        errorDisplay.innerText=''
        inputGroup.classList.add('.sucess')
        inputGroup.classList.remove('.error')
    }
    const validateInputs=()=> {

        if(username.value ==='')
        {
            setError(username,'Username is required');
        }
        else if(username.value !== checkUsername)
        {
            setError(username,'Enter a valid Username');
        }
        else
        {
            setSucess(username); 
        
        }
    
    if(email.value ==='')
    {
        setError(email,'Email is required');
    }
    else if(email.value !== checkEmail)
    {
        setError(email,'Enter a valid email');
    }
    else if(!validateEmail==(email.value))
    {
        setError(email,'Enter a valid email');
    }
    else
    {
        setSucess(email); 
    
    }

    if(password.value==='')
    {
        setError(password,'Password is required');
    }
    else if(password.value !== checkPassword)
    {
        setError(password,'Enter valied password');
    }
    else
    {
        setSucess(password);
    }
    if(confirmpassword.value==='')
    {
        setError(confirmpassword,'Password is required');
    }
    else if(confirmpassword.value !== checkConfirmpassword)
    {
        setError(confirmpassword,'confirmpasswor does not match');
    }
    else
    {
        setSucess(confirmpassword);
        window.location.href="login.html"
    }

    // alert("email",email);
    // alert("checkEmail",checkEmail);
    // alert("password",password);
    // alert("checkPassword",checkPassword);
    console.log("email",email.value)
    console.log("checkEmail",checkEmail)
    console.log("password",password.value)
    console.log("checkPassword",checkPassword)



    // if(email.value == checkEmail ) {
    //     // alert('front-page')

    //     setSucess(email);
    // }
    // else if(email.value !== checkEmail)
    // {                       
    //     // alert('Login failed')
    //     setError(email,'Enter a valid email');
    // }
    // else 
    // {
    //     alert('Login failed')
    //     setError(email,'email is required');
    // }

    // if(password.value == checkPassword)
    // {
    //     setSucess(password);
    //     window.location.assign('./front-page.html');
    // }
    // else if(password.value!== checkPassword)
    // {
    //     // alert('Login failed')
    //     setError(password,'Enter a valid password');
    // }
    // else 
    // {
    //     // alert('Login failed')
    //     setError(password,'Password is required');
    // }
    
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

