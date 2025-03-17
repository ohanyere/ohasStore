import { useState} from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/Form-Input/Form-Input";
import Button from "../../components/button/Button";
import { db } from "../../Firebase.config";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, serverTimestamp , doc} from "firebase/firestore";
import Oauth from "../../components/Oauth";
import { BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import "./Sign-up-Form.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const navigate = useNavigate()
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    else{
      try {
        const auth = getAuth()
        const userCredencial = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredencial.user
        updateProfile(auth.currentUser, {displayName : displayName})
        const formInput = {...formFields}
        delete formInput.password
        delete formInput.confirmPassword
        formInput.timeStamp = serverTimestamp()
        const docRef = await doc(db, "users", user.uid)
        await  setDoc(docRef, {
          ...formInput
        })
        resetFormFields()
        navigate("/")
      } catch (error) {
        console.log(error)
      }
    }

  };
  const signUpWithGoogle = async () => {
    await Oauth.signInWithGoogle()
    navigate("/")
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
         <div className='buttons-container'>
         <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signUpWithGoogle}
            
            
          >
            Sign Up With Google
          </Button>
         <Button type="submit">Sign Up</Button>
         </div>
      </form>
    </div>
  );
};

export default SignUpForm;