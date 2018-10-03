import styled from "styled-components";

export const Shelf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: wrap;
  padding: 0 50px;
  margin-bottom: 20px;
  
  img {
    width: 100%;
    height: 230px;
    padding: 20px;
  }
`;

export const Desc = styled.div`
  width: 80%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;

  p {
    font-size: 0.8em;
  }

  small {
    color: grey;
    font-size: 0.7em;
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 25px;
  right: 25px;
  background-color: #2ed573;
  border: none;
  background-image: url('');
  cursor: pointer;
`;
