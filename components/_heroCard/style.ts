import styled from "styled-components";


export const AboutBox = styled.div`
display: flex;
flex-direction: column;
width: 100%;
font-family: Roboto, sans-serif;
padding:0;
margin: 0;
background-color: rgb(17,17,17);
align-items: center;




.circlebox{
    width: 900px;
    height: 600px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: black;
    justify-content: center;
 

    .circle{
        width: 150px;
        height: 150px;       
        position: relative;
        background: radial-gradient(circle at center, transparent 71%, rgb(17,17,17) 51%);
        z-index: 5;
      
    }

  
    .newimg{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  
    z-index: 4;
    bottom: 600px;

    img{
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 4;
        bottom: 600px;
    }
}

}

hr{
    background-image: linear-gradient(to right, #4776e6, #5870e9, #6968eb, #7c5feb, #8e54e9);
    border: none;
    width: 146px;
    height: 5px;
    margin-top: 50px;
}

h1{
    font-size: 50px;
    color: white;
    margin-top: 40px;
}

p{
    font-size: 20px;
    color: white;
    width: 530px;
    text-align: justify;
    margin: 40px 20px;
}

@media only screen and (max-width: 768px){
    
    img.logo{
        width: 207px;
        height: 105px; 
    }
    .circlebox{
        width: 405px;
    height: 270px;
    border: none;
    background-color: rgb(17,17,17);

    .circle{
        width: 67px;
        height: 67px; 
    }
    .newimg{
        width: 402px;
        height: 267px;
        bottom: 267px;
        right: 0px;
    }
    }
   
    p{
        width: 380px;
    }
    
}


`