import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, .1) -50%, rgba(255, 255, 255, 0) 150%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, .01);
  box-shadow: 0 .5rem 1rem 0 rgba(0, 0, 0, .2);
  border-radius: 10px;
  padding: 10px;

  
  img {
    position: relative;
    max-width: 100%;
    display: block;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 .5rem .5rem 0 rgba(0, 0, 0, .1);
    transition: transform .3s ease-in-out, scale .3s ease-in-out;
  }
  
  &:hover img {
    transform: translateY(-.5rem);
    scale: 1.03;
  }

`;