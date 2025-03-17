import { getAuth ,  GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../Firebase.config';
 const signInWithGoogle = async () => {
      try {
        const auth = getAuth()
        const provider = new GoogleAuthProvider()
        const userCredential = await signInWithPopup(auth, provider)
        const user = userCredential.user
        const docRef =  doc(db, "users", user.uid)
        const usersnapshot = await getDoc(docRef)
        if(!usersnapshot.exists()){
          await setDoc(docRef, {
            name : user.displayName,
            email : user.email,
            timeStamp : serverTimestamp()
          })
        }
        return  user
      } catch (error) {
        console.log(error);
      }
  };

  const Oauth = {
    signInWithGoogle
  }

  export default Oauth