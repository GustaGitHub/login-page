import React from "react";
import { LeftContent, ExampleText, TextAnimation } from "../styles/ContentStyle"

export default function Content(){
   return(
      <LeftContent>
         <TextAnimation>
            <h3>Bem - Vindo !</h3>
            <ExampleText>
               Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit
            </ExampleText>
         </TextAnimation>
      </LeftContent>
   )
}