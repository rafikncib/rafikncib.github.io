import 'animate.css';
import {send} from 'emailjs-com';
import {useState} from 'react';
const styleForm={
  minWidth:250,
  maxWidth:800,
  margin:'auto'
}
const Contact=()=>{
    const [firstName,setFirstName]=useState({
      'input':'',
      'erreur':''
    });
    const [lastName,setLastName]=useState({
      'input':'',
      'erreur':''
    });
    const [email,setEmail]=useState({
      'input':'',
      'erreur':''
    });
    const [message,setMessage]=useState({
      'input':'',
      'erreur':''
    });
    const [isValidForm,setIsValidForm]=useState(true);
    const [toSend,setToSend]=useState({
    first_name:'',
    last_name:'',
    message:'',
    user_email:''
  });

  const nameReg=/^[a-zA-Z-' ]*$/; 

  const  handleSubmit=(event)=>{
    event.preventDefault();
    //reset();
    if(nameReg.test(firstName.input)){
      setFirstName(prevState=>{
        return {...prevState,'erreur':'invalid firstname'}
      });
      setIsValidForm(false);
    }
    if(nameReg.test(lastName.input)){
      setLastName(prevState=>{
        return {...prevState,'erreur':'invalid lastname'}
      })    
      setIsValidForm(false);
    }
    if(!validateEmail(email.input.length)){
      setEmail(prevState=>{
        return {...prevState,'erreur':'invalid email address'}
      })    
      setIsValidForm(false);
    }

    if(message.input===''){
      setMessage(prevState=>{
        return {...prevState,'erreur':'empty message'}
      })
      setIsValidForm(false);
    }
    if(isValidForm){
      setToSend({
        first_name:firstName,
        last_name:lastName,
        message:message,
        user_email:email
      })
      send(
        'service_jqudv51',
        'contact_form',
        toSend,
        'Jq915bLXBOuC0EaC2'
      )
      .then((response)=>{
        console.log('SUCCESS!',response.status,response.text);
      })
      .catch((err)=>{
        console.log('FAILED...',err);
      })
    }

  }

  
  function validateEmail(email){
    var emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return emailReg.test(email);
  }
  function reset(){
    /*setMsgError(
      {name:'',last:'',email:'',message:''}
    )*/
  }
    return(
        <div id="contactContent" className='pt-5'>
            <div className="container pt-5">
                <section>
                    <header className="text-center">
                        <h1 className="black animate__animated animate__fadeInUp section_title">Get <span className="yellow">In Touch</span></h1>
                        <p className='sansSerifFont'>FEEL FREE TO GET IN TOUCH WITH ME. I AM ALWAYS OPEN TO DISCUSSING NEW PROJECTS, CREATIVE IDEAS OR OPPORTUNITIES TO BE PART OF YOUR VISIONS.</p>
                    </header>

                    <section className='darckBlue py-3'>
                            <p className='text-center gray sansSerifFont'>If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly.</p> 
                            <form action='' className='p-4 rounded-2 shadow-lg' onSubmit={handleSubmit} style={styleForm}> 
                                <div>
                                  <label htmlFor='firstName' className='form-label'>First name * <span className='text-danger'>{firstName.erreur}</span></label>
                                  <input name='firstName' id='firstName' value={firstName.input} type='text' placeholder='First Name' className='form-control' onChange={e=>{setFirstName(e.target.value)}}/>
                                </div>

                                <div>
                                  <label htmlFor='lastName' className='form-label'>last name * <span className='text-danger'>{lastName.erreur}</span></label>
                                  <input name='lastName' id='lastName' value={lastName.input} type='text' placeholder='Last Name' className='form-control' onChange={e=>{setLastName({'input':e.target.value,'erreur':''})}}/>
                                </div>
                        
                                <div>
                                  <label htmlFor='email' className='form-label'>email * <span className='text-danger'>{email.erreur}</span></label>
                                  <input name='email' value={email.input} id="email" type='email' placeholder='Email' className='form-control' onChange={e=>{setEmail({'input':e.target.value,'erreur':''})}}/>
                                </div>
                                <div>
                                  <label htmlFor='message' className='form-label'>message * <span className='text-danger'>{message.erreur}</span></label>
                                  <textarea name='message' id='message' rows="4" value={message.input} placeholder='Your message' className='form-control' onChange={e=>{setMessage({'input':e.target.value,'erreur':''})}} >
                                  </textarea>
                                </div>
                                <button type='submit' className='btn w-100 mt-3'>Send Message</button>
                            </form>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default Contact;