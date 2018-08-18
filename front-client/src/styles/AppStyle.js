import styled, { keyframes } from 'styled-components';
import { Form, Field } from 'formik';

// App.js
export const StyledAppWrapper = styled.div`
  text-align: center;
`;

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 60px;
`;

export const AppHeader = styled.div`
  background-color: #222;
  height: 120px;
  padding: 20px;
  color: white;
`;

export const AppTitle = styled.h1`
  font-size: 1.5em;
`;

export const StyledBackButton = styled.button`
  border: solid black 0.5px;
  border-radius: 3px;
  width: 100px;
  color: #fff;
  background: blue;
  margin: 3px;
  padding: 3px;
`;

export const StyledEditButton = styled.button`
  position: relative;
  top: -5px;
  left: 192px;
  border: solid black 0.5px;
  border-radius: 3px;
  width: 35px;
  color: #fff;
  background: orange;
`;

export const StyledDeleteButton = styled.button`
  position: relative;
  top: -60px;
  left: 157px;
  border: solid black 0.5px;
  border-radius: 3px;
  width: 35px;
  color: #fff;
  background: #dc143c;
`;

export const StyledList = styled.li`
  list-style: none;
  margin: 0 auto;
  border: solid black 1px;
  width: 400px;
  border-radius: 5px;
`;

export const StyledText = styled.span`
  font-weight: bold;
  font-size: 25px;
`;

// EditComponent.js
export const StyledUpdateButton = styled.button`
  border: solid black 0.5px;
  border-radius: 3px;
  width: 100px;
  color: #fff;
  background: green;
  margin-bottom: 1px;
  padding: 3px;
`;

export const StyledForm = styled(Form)`
  list-style: none;
  margin: 0 auto;
  border: solid black 1px;
  width: 400px;
  border-radius: 5px;
`;

export const StyledField = styled(Field)`
  font-weight: bold;
  font-size: 25px;
`;
