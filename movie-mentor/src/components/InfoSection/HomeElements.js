import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 4;
  margin-bottom: -20vh;
`;

export const BackgroundVideo = styled.video`
 position: fixed; /* Use 'fixed' to ensure the video covers the entire viewport */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  background: rgba(0, 0, 0, 0.5);
`;


export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const LargeText = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #fff;  
`;

export const SearchContainer = styled.div`
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  width: 500px;
  color: #fff; 
  font-size: 18px;
  border: 2px solid #fff;
  background-color: transparent;
  border-radius: 25px;
`;
  

export const TransparentButton = styled.button`
  background-color: transparent;
  border: 2px solid #fff; 
  color: #fff; 
  padding: 10px 20px;
  margin: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #fff; 
    color: #000; 
  }
`;