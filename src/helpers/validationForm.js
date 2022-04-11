import { toast } from 'react-toastify'

export default function validationForm(email, password, setEmailError, setPasswordError){
   if(email.length == 0 && password.length == 0){
      toast.error('Campos Vazios !', {position: "top-center"})
      setEmailError(true)
      setPasswordError(true)
   }
   else if(email.length == 0){
      toast.error('Campo de E-Mail vazio !', {position: "top-center"})
      setEmailError(true)
      setPasswordError(false)
   }
   else if(password.length == 0){
      toast.error('Campo de Senha vazio !', {position: "top-center"})
      setEmailError(false)
      setPasswordError(true)
   }
   else{
      let emailRegExp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
      let verificationEmail = emailRegExp.test(email)

      if(verificationEmail){
         toast.success('Logado Com Sucesso',  {position: "top-center"})
         setEmailError(false)
         setPasswordError(false)
      }
      else{
         toast.error('E-Mail Inválido', {position: "top-center"})
         setEmailError(true)
         setPasswordError(false)
      }
   }
}