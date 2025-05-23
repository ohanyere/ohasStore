import { useState} from 'react';
import FormInput from '../../components/Form-Input/Form-Input';
import { BUTTON_TYPE_CLASSES } from '../../components/button/Button';
import Button from '../../components/button/Button';
import { getAuth } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Oauth from '../../components/Oauth';
import { useNavigate } from 'react-router-dom';
import './Sign-in-Form.scss';

const defaultFormFields = {
  email: '',
  password: '',
};



const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate()

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

 const signInWithGoogle = async () => {
       await Oauth.signInWithGoogle()
       navigate("/")
   };

 const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth =  getAuth()
      const userCredencial = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredencial.user
      if(user){
        navigate("/")
      }
      resetFormFields()
    } catch (error) {
      console.log(error);
    }
 }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
            
            
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;