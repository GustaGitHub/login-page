import styled, {keyframes} from "styled-components";

const titleContent = keyframes`
   0%{
      opacity: 0;
   }
   50%{
      opacity: 0.5;
   }
   100%{
      opacity: 1;
   }
`

export const LeftContent = styled.div`
   background: #323232;
   background: -webkit-linear-gradient(top right, #323232, #FF013D);
   background: -moz-linear-gradient(top right, #323232, #FF013D);
   background: linear-gradient(to bottom left, #323232, #FF013D);
   color: white;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-size: 2.25em;
   width: 60%;
   font-family: 'Nunito Sans', sans-serif;  
   
   h3{
      text-align: center;
   }

   @media (max-width: 930px){
      width: 100%;
   }
`

export const ExampleText = styled.div`
   text-align: center; 
`

export const TextAnimation = styled.span`
   animation: ${titleContent} ease-in-out 1s;
`