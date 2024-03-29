import 'animate.css';
import emailjs from '@emailjs/browser';
import {useState} from 'react';
const styleForm={
  minWidth:250,
  maxWidth:800,
  margin:'auto'
}
const Contact=()=>{
    //declaration
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
    
    const [isMsgSended,setIsMsgSended]=useState(false);
  const nameReg=/^[a-zA-Z-' ]*$/; 

  const  handleSubmit=(event)=>{
    event.preventDefault();
    
    let isValidForm=true;
    if(firstName.input===""){
      //show erreur
      setFirstName(prevState=>{
        return {...prevState,'erreur':'firstname cannot be blank !'}
      });
      isValidForm=false;
    }else
        if(!nameReg.test(firstName.input)){
          setFirstName(prevState=>{
            return {...prevState,'erreur':'invalid firstname'}
          });
          isValidForm=false;
        }
    if(lastName.input===""){
      //show erreur
      setLastName(prevState=>{
        return {...prevState,'erreur':'lastname cannot be blank !'}
      });
      
      isValidForm=false;
    }else
        if(!nameReg.test(lastName.input)){
          setLastName(prevState=>{
            return {...prevState,'erreur':'invalid lastname'}
          })    
          isValidForm=false;
        }
        
        if(email.input===""){
          //show erreur
          setEmail(prevState=>{
            return {...prevState,'erreur':'email cannot be blank !'}
          });
          isValidForm=false;
        }else
            if(!validateEmail(email.input)){
              setEmail(prevState=>{
                return {...prevState,'erreur':'invalid email address'}
              })    
              isValidForm=false;
            }

    if(message.input===''){
      setMessage(prevState=>{
        return {...prevState,'erreur':'message cannot be blank !'}
      })
      isValidForm=false;
    }

    
    if(isValidForm){
      emailjs.send(
        'service_52vv7t8',
        'contact_form',
        {
          first_name:firstName.input,
          last_name:lastName.input,
          message:message.input,
          user_email:email.input
        },
        'Jq915bLXBOuC0EaC2'
      )
      .then((response)=>{
        setIsMsgSended(true);
        reset()
        console.log('SUCCESS!',response.status,response.text);
      })
      .catch((err)=>{
        console.log('FAILED...',err);
      })
    }

  }

  function reset(){
    setFirstName({
      'input':'',
      'erreur':''
    });
    setLastName({
      'input':'',
      'erreur':''
    });
    setEmail({
      'input':'',
      'erreur':''
    });
    setMessage({
      'input':'',
      'erreur':''
    });
  }
  function validateEmail(email){
    var emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return emailReg.test(email);
  }
  
    return(
        <div id="contactContent" className='pt-5'>
            <div className="container pt-5">
                <section>
                    <header className="text-center">
                        <h1 className="black section_title">Get <span className="yellow">In Touch</span></h1>
                        <p className='sansSerifFont'>FEEL FREE TO GET IN TOUCH WITH ME. I AM ALWAYS OPEN TO DISCUSSING NEW PROJECTS, CREATIVE IDEAS OR OPPORTUNITIES TO BE PART OF YOUR VISIONS.</p>
                    </header>

                    <section className='darckBlue py-3'>
                            <p className='text-center gray sansSerifFont'>If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly.</p> 
                            <form action='' className='p-4 rounded-2 shadow-lg' onSubmit={handleSubmit} style={styleForm}> 
                              {isMsgSended&&<div class="alert alert-success alert-dismissible" role="alert">
                                <div>Your message has been successful send !</div>
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                              </div>}
                                <div className='py-2'>
                                  <label htmlFor='firstName' className='form-label'>First name * <span className='text-danger'>{firstName.erreur}</span></label>
                                  <input name='firstName' id='firstName' value={firstName.input} type='text' placeholder='First Name' className={`form-control ${firstName.erreur!==''?"border-danger":''}`} onChange={e=>{setFirstName({'input':e.target.value,'erreur':''})}}/>
                                </div>

                                <div className='py-2'>
                                  <label htmlFor='lastName' className='form-label'>Last name * <span className='text-danger'>{lastName.erreur}</span></label>
                                  <input name='lastName' id='lastName' value={lastName.input} type='text' placeholder='Last Name' className={`form-control ${lastName.erreur!==''?"border-danger":''}`} onChange={e=>{setLastName({'input':e.target.value,'erreur':''})}}/>
                                </div>
                        
                                <div className='py-2'>
                                  <label htmlFor='email' className='form-label'>Email * <span className='text-danger'>{email.erreur}</span></label>
                                  <input name='email' value={email.input} id="email" type='email' placeholder='Email' className={`form-control ${email.erreur!==''?"border-danger":''}`} onChange={e=>{setEmail({'input':e.target.value,'erreur':''})}}/>
                                </div>

                                <div className='py-2'>
                                  <label htmlFor='message' className='form-label'>Message * <span className='text-danger'>{message.erreur}</span></label>
                                  <textarea name='message' id='message' rows="4" value={message.input} placeholder='Your message' className={`form-control ${message.erreur!==''?"border-danger":''}`} onChange={e=>{setMessage({'input':e.target.value,'erreur':''})}} >
                                  </textarea>
                                </div>
                                <button type='submit' className='btn bg-black w-100 mt-3'>Send Message</button>
                            </form>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default Contact;