import styled, { keyframes } from 'styled-components';
import { css } from 'styled-components';
import { Form, Field } from 'formik';

/* 
* Common styles 
*/

// Media queries
const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

// Button styles
export const buttonStyles = css`
  position: ${props => (props.red || props.purple ? 'absolute' : 'static')};
  top: 5px;
  right: 10px;
  border: solid transparent 0.5px;
  border-radius: 3px;
  width: ${props => (props.red || props.purple ? '35px' : '100px')};
  color: #fff;
  padding: ${props => (props.red || props.purple ? '1px' : '7px')};
  margin: 7px auto;
  cursor: pointer;
  box-shadow: 2px 2px 1px grey;
  background: ${props =>
    props.back
      ? 'purple'
      : props.orange
        ? 'orange'
        : props.red
          ? '#dc143c'
          : 'green'};
`;

export const StyledButton = styled.button`
  ${buttonStyles};
  :hover {
    box-shadow: 1px 1px 0.5px grey;
  }
`;

// App.js
export const StyledAppWrapper = styled.div`
  text-align: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  width: 1200px;
  ${media.giant`width: 1000px;`}
  ${media.desktop`width: 800px;`}
  ${media.tablet`width: auto;`}
  ${media.phone`width: auto;`};
`;

export const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 60px;
`;

export const AppHeader = styled.div`
  background-color: #222;
  height: 110px;
  padding: 10px;
  color: white;
`;

export const AppTitle = styled.h1`
  font-size: 1.5em;
`;

export const StyledTaskHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledList = styled.div`
  position: relative;
  margin: 5px auto;
  border: solid black 0.5px;
  width: 390px;
  border-radius: 5px;
  box-shadow: 3px 3px 2px grey;
  ${media.giant`width: 400px;`}
  ${media.desktop`width: 390px;`}
  ${media.tablet`width: 375px;`}
  ${media.phone`min-width: 200px;`};
`;

export const StyledText = styled.span`
  font-weight: bold;
  font-size: 25px;
`;

export const StyledDescription = styled.span`
  font-size: 18px;
`;

export const StyledForm = styled(Form)`
  width: 50%;
  margin: 0 auto;
`;

export const StyledField = styled(Field)`
  font-weight: bold;
  font-size: 18px;
  border: none;
  border-bottom: 2px solid green;
  border-radius: 4px;

  width: 98%;
  height: 45px;
  padding-left: 15px;
  ::placeholder {
  }
  :focus {
    outline: none;
    border-bottom: 2px solid black;
    ::placeholder {
      color: #d7dce2;
    }
  }
`;

export const StyledLabel = styled.label`
  color: green;
  font-size: 28px;
  font-weight: 900;
`;

export const StyledEditForm = styled(Form)`
  width: 85%;
  margin: 0 auto;
  padding-top: 7px;
`;

export const StyledEditField = styled(Field)`
  font-weight: ${props => (props.editName ? 'bold' : 'normal')};
  font-size: ${props => (props.editName ? '25px' : '18px')};
  border: none;
  border-bottom: 2px solid purple;
  border-radius: 4px;
  width: 80%;
  padding-left: 15px;
  ::placeholder {
  }
  :focus {
    outline: none;
    border-bottom: 2px solid black;
    ::placeholder {
      color: #d7dce2;
    }
  }
`;
