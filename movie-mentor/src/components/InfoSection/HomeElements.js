import styled from 'styled-components';

export const HomeContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const BackgroundVideo = styled.video`
  position: relative;
  top: 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  top: 40px;
  left: 0;
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1); 
`;

export const SearchContainer = styled.div`
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  width: 500px;
  font-size: 18px;
  border: 2px solid #fff;
  background-color: transparent;
  color: #fff;
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