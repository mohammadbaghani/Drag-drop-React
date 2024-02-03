import React from 'react';
import styled from '@xstyled/styled-components';
import { grid } from './constants';



const imageSize = 40;

const CloneBadge = styled.div`
  background: red;
  bottom: ${grid / 2}px;
  border: 2px solid #57d9a3;
  border-radius: 50%;
  box-sizing: border-box;
  font-size: 10px;
  position: absolute;
  right: -${imageSize / 3}px;
  top: -${imageSize / 3}px;
  transform: rotate(40deg);
  height: ${imageSize}px;
  width: ${imageSize}px;
  display: flex;
  justify-content: center;
  alig Wrappern-items: center;
`;

export const getBackgroundColor = (isDraggingOver, isDraggingFrom) => {
  if (isDraggingOver) {
    return 'blue';
  }
  if (isDraggingFrom) {
    return 'red';
  }
  return 'white';
};
const Container = styled.a`



background-color: ${(props) => getBackgroundColor(props.isDraggingOver, props.isDraggingFrom)};
    border: 2px solid #1a1515;
    border-color: transparent;
  

    box-sizing: border-box;
    border-radius: 7px;
    margin-bottom: 40px;
    color: #000000;

    display: flex;
    position: relative;
    right: -5px;
 
    flex-direction: row;
   
    -ms-flex-pack: center;
    justify-content: center;
 
    -ms-flex-align: center;
    align-items: center;
    width: 250px;
    text-align: center;
    height: 270px;
    color: #091e42;
overflow:hidden;
    display: flex;
    padding-right: 198px;
    padding-left: 3px;
    padding-top: 130px;
top:10px;

box-shadow: 1px 1px 5px 1px #a9adaf;

  &:hover,
  &:active {
    color: #091e42;
    text-decoration: none;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.colors.hard};
    box-shadow: none;
  }

 
  display: flex;
`;

const Avatar = styled.img`
width: 240px;
height: 145px;
border-top-right-radius: 5%;
border-top-left-radius: 5%;
margin-right: auto;
margin-left: auto;
position: relative;

flex-shrink: 0;

flex-grow: 0;
top: -122px;
left: 164px;


`;

const Content = styled.div`
 
  flex-grow: 1;

  flex-basis: 100%;

  display: flex;
  flex-direction: column;


`;

const BlockQuote = styled.div`
  &::before {
    content: open-quote;
  }
  &::after {
    content: close-quote;
  }
`;

const Footer = styled.div`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
margin-top: 19px;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
margin-right: 134px;

`;

const Author = styled.small`
color: white;
 
    flex-grow: 0;
    width: 150px;
    margin: 0;
    left: 0px;
    right: 0px;
    position: absolute;
    margin-right: auto;
    margin-left: auto;
    background-color: rgb(98 109 129);
    border-radius: 7px;
    font-weight: normal;
    padding: 4px;
    border: 1px solid #bdbdbd;
    font-size: 14px;
    margin-top: -17px;
    height: 35px;

    display: flex;
  
  
    justify-content: center;


    align-items: center;
    top: 240px;

`;

const QuoteId = styled.small`
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0;
  font-weight: normal;
  text-overflow: ellipsis;
  text-align: right;
  align-items: center;
  margin-right: -100px;

`;

function getStyle(provided, style) {
  if (!style) {
    return provided.draggableProps.style;
  }

  return {
    ...provided.draggableProps.style,
    ...style,
  };
}

function QuoteItem(props) {
  const { quote, isDragging, isGroupedOver, isDraggingFrom, provided, style, isClone, index } = props;

  return (
    <Container
      href={quote.author.url}
      isDragging={isDragging}
      isGroupedOver={isGroupedOver}

      isDraggingFrom={isDraggingFrom}

      isClone={isClone}
      colors={quote.author.colors}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={getStyle(provided, style)}
      data-is-dragging={isDragging}
      data-testid={quote.id}
      data-index={index}
      aria-label={`${quote.author.name} quote ${quote.content}`}
    >
      <Avatar src={quote.author.avatarUrl} alt={quote.author.name} />
      {isClone ? <CloneBadge>Clone</CloneBadge> : null}
      <Content>
        <p>{quote.content}</p>
        <Footer>
          <Author colors={quote.author.colors}>{quote.author.name}</Author>
          <QuoteId>
        
        
          </QuoteId>
        </Footer>
      </Content>
    </Container>
  );
}

export default React.memo(QuoteItem);













