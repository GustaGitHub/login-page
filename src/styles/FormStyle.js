import styled, {keyframes} from "styled-components"

const focusInput = keyframes`
   0%{
      border: 3px solid rgb(65, 190, 255, 0);
   }
   50%{
      border: 3px solid rgb(65, 190, 255, 0.5);
   }
   100%{
      border: 3px solid rgb(65, 190, 255, 0.85);
   }
`
const hoverBtn = keyframes`
    0%{
      background-color: rgb(255, 80, 80);
   }
   50%{
      background-color: rgb(240, 40, 40);
   }
   100%{
      background-color: rgb(235, 20, 20);
   }
`

export const RightForm = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 45%;
   font-family: 'Raleway', sans-serif;
   
   @media (max-width: 930px){
      width: 100%;
   }
`

export const RegisterLink = styled.div`
   margin: 15px;
   color: rgb(180, 180, 180);
   font-size: 1.15em;
   a{
      text-decoration: none;
      color: red;
   }
`

export const InputDiv = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 25px;
`

export const ElementInput = styled.input`
   background-color: rgb(235, 235, 235);
   border: none;
   padding: 15px;
   font-family: 'Raleway', sans-serif;
   font-size: 12pt;
   width: 60vh;
   border-radius: 5px;
   border: ${props => props.error ? "3px solid red" : "none"};
   margin-top: 45px;
   outline: 0;

   :focus{
      border: 3px solid rgb(65, 190, 255, 0.85);
      animation: ${focusInput} ease-out 800ms;
   }
`

export const ButtonForm = styled.button`
   background-color: rgb(255, 80, 80);
   color: white;
   font-size: 14pt;
   padding: 20px;
   margin-top: 12%;
   width: 60vh;
   border: none;
   border-radius: 5px;
   cursor: pointer;

   :hover{
      background-color: rgb(235, 20, 20);
      animation: ${hoverBtn} ease-out 750ms;
   }
`

export const OtherOptions = styled.div`
   display: flex;
   flex-direction: row;
   margin: 35px 0 25px 0px ;
`

export const LoginWith = styled.div`
   padding: 15px 10px 10px 10px;
   font-size: 1.10em;
`

export const SocialMedias = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   width: 30vh;
   padding-top: 0.5em;
`

export const ImageSocialMedia = styled.input`
   width: 45px;
   height: 45px;
   border-radius: 5px;
`

export const FooterCopy = styled.footer`
   margin-top: 3.5em;
   span{
      color: rgb(180, 180, 180);
   }
`
