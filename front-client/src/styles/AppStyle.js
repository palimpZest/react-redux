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
  position: ${props => (props.delete || props.update ? 'absolute' : 'static')};
  top: 5px;
  right: 10px;
  border: solid transparent 0.5px;
  font-size: 18px;
  font-style: ${props => (props.edit || props.update ? 'italic' : 'normal')};
  border-radius: 3px;
  width: ${props => (props.delete || props.update ? '35px' : '100px')};
  color: #fff;
  padding: ${props => (props.delete || props.update ? '1px' : '7px')};
  margin: 7px auto;
  cursor: pointer;
  box-shadow: 2px 2px 1px grey;
  background: ${props =>
    props.back
      ? 'purple'
      : props.edit
        ? '#3D7EEE'
        : props.update
          ? '#3D7EEE'
          : props.delete
            ? '#25292A'
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

export const StyledTitle = styled.div`
  font-size: 40px;
  margin: 10px auto;
  background: ${props => (props.edittitle ? 'purple' : 'green')};
  font-style: ${props => (props.edittitle ? 'italic' : 'normal')};
  width: 265px;
  color: white;
`;

export const StyledPlaceholder = styled.div`
  height: 208px;
  border-radius: 50px;
  img {
    height: 200px;
    border-radius: 50px;
  }
`;

export const StyledTaskHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  margin: 5px auto;
  min-height: 80px;
  max-height: 80px;
  width: 325px;
  border-radius: 5px;
  box-shadow: 3px 3px 2px grey;
  padding: 20px 55px 5px 15px;
  overflow-wrap: break-word;
  background: #F0F8FF;
  /* ${media.giant`width: 400px;`}
  ${media.desktop`width: 390px;`}
  ${media.tablet`width: 375px;`}
  ${media.phone`min-width: 200px;`}; */
`;

export const StyledText = styled.span`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 15px;
`;

export const StyledDescription = styled.span`
  font-size: 18px;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledForm = styled(Form)`
  width: 50%;
  margin: 0 auto;
`;

export const StyledField = styled(Field)`
  font-weight: bold;
  font-size: 33px;
  border: none;
  border-bottom: 2px solid green;
  border-radius: 4px;
  width: 98%;
  margin: 15px 0;
  height: 50px;
  height: 45px;
  background: #f9f9f9;
  ::placeholder {
    color: green;
  }
  :focus {
    outline: none;
    border-bottom: 2px solid #98fbb1;
    ::placeholder {
      color: white;
      background: palegreen;
      height: 100%;
    }
  }
`;

export const StyledEditForm = styled(Form)`
  min-height: 80px;
  max-height: 80px;
`;

export const StyledEditField = styled(Field)`
  position: relative;
  font-weight: ${props => (props.editname ? 'bold' : 'normal')};
  font-size: ${props => (props.editname ? '25px' : '18px')};
  font-style: italic;
  border: none;
  resize: none;
  font-family: 'Roboto';
  overflow: hidden;
  border-radius: 4px;
  width: 100%;
  margin: 0 0 12px -1px;
  background: #f0f8ff;
  color: #25292a;
  :focus {
    outline: none;
    border-bottom: 1.5px solid #98fbb1;
    height: ${props => (props.editdescription ? '60px' : '30px')};
    background: palegreen;
    position: ${props => (props.editdescription ? 'absolute' : 'static')};
    top: 55px;
    left: 15px;
    width: ${props => (props.editdescription ? '93%' : '100%')};
    z-index: 1;
    ::placeholder {
      color: #d7dce2;
    }
  }
`;
