import React,{useEffect, useState} from "react";

import { RightForm, RegisterLink, InputDiv, ElementInput, ButtonForm, OtherOptions, LoginWith, SocialMedias, ImageSocialMedia, FooterCopy } from '../styles/FormStyle'

import FacebookLogo from '../styles/images/Facebook-btn-logo.png'
import GoogleLogo from '../styles/images/Google-btn-logo.png'

import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import validationForm from '../helpers/validationForm' 

export default function Form(){
   
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [emailError, setEmailError] = useState(false)
   const [passwordError, setPasswordError] = useState(false)

   toast.configure()
   return(
      <RightForm>
         <ToastContainer/>
            <RegisterLink>
               <span>É novo por Aqui ? | <a href="#">Cadastre - se aqui</a></span>
            </RegisterLink>

            <InputDiv>
               <ElementInput error={emailError} placeholder="E-mail" type="email" name="email" onChange={e => setEmail(e.target.value)}/>
               <ElementInput error={passwordError} placeholder="Senha" type="password" name="password" onChange={e => setPassword(e.target.value)}/>
            </InputDiv>

            <ButtonForm onClick={()=>validationForm(email, password, setEmailError, setPasswordError)}>
               Entrar
            </ButtonForm>

            <OtherOptions>
               <span>
                  OU
               </span>
            </OtherOptions>

            <LoginWith>
               Entre com:
            </LoginWith>

            <SocialMedias>
               <ImageSocialMedia type="image" src={GoogleLogo} alt="Google"/>
               <ImageSocialMedia type="image" src={FacebookLogo} alt="Facebook"/>
            </SocialMedias>

            <FooterCopy>
               <span> &copy;Copyright 2022: Enterprise</span>
            </FooterCopy>
      </RightForm>
   )
}