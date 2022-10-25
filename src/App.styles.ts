import styled from 'styled-components';

export const Container = styled.div`
  color: #FFF;
  min-height: 100vh;
  background: linear-gradient(90deg, rgba(2,1,15,1) 0%, rgba(10, 47, 64, 1) 190%);
`;

export const Area = styled.div`
  display: grid;
  row-gap: 2rem;
  margin: auto;
  max-width: 980px;
  padding: 30px 0;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  text-align: initial;
`;

export const ScreenWarning = styled.div`
  text-align: center;
  
  .emoji {
    font-size: 50px;
    margin-bottom: 20px;
  }
`;

export const EmptyWarning = styled.div`
  text-align: center;
`;

export const PhotoList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const UploadForm = styled.form`
  background: linear-gradient(135deg, rgba(255, 255, 255, .1) -50%, rgba(255, 255, 255, 0) 150%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, .01);
  box-shadow: 0 .5rem 1rem 0 rgba(0, 0, 0, .2);
  padding: 15px;
  border-radius: 10px;

  input[type=submit] {
    background-color: #488991;
    border: 0;
    color: #FFF;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    margin: 0 20px;
    cursor: pointer;
    transition: all .3s;

    &:hover {
      opacity: .9;
    }
  }
`;