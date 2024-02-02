import React from 'react';
import styled from '@xstyled/styled-components';
import { borderRadius, grid } from './constants';

const getBackgroundColor = (isDragging, isGroupedOver, authorColors) => {
  if (isDragging) {
    return authorColors.soft;
  }

  if (isGroupedOver) {
    return '#EBECF0';
  }

  return '#FFFFFF';
};

const getBorderColor = (isDragging, authorColors) =>
  isDragging ? authorColors.hard : 'transparent';

const imageSize = 40;

const CloneBadge = styled.div`
  background: #79f2c0;
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
  align-items: center;
`;

const Container = styled.a`
    border: 2px solid #1a1515;
    border-color: transparent;
    background-color: #ffffff;

    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 10px;
    color: #000000;

    display: flex;
    position: relative;
    right: -5px;
 
    flex-direction: row;
   
    -ms-flex-pack: center;
    justify-content: center;
 
    -ms-flex-align: center;
    align-items: center;
    width: 199px;
    text-align: center;
    height: 241px;
    color: #091e42;
overflow:hidden;
    display: flex;
    padding-right: 198px;
    padding-left: 3px;
    padding-top: 130px;
top:10px;

box-shadow: 1px 1px 5px 1px #555;

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
width: 195px;
    height: 125px;
    border-top-right-radius: 5%;
    border-top-left-radius: 5%;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    top: -118px;
    left:180px;


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
  color: red;
  flex-grow: 0;
  width:95px;
  margin: 0;
  left:190px;
  background-color: ${(props) => props.colors.soft};
  border-radius:3px;
  font-weight: normal;
  padding: ${grid / 2}px;
font-size:13px;

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
  const { quote, isDragging, isGroupedOver, provided, style, isClone, index } = props;

  return (
    <Container
      href={quote.author.url}
      isDragging={isDragging}
      isGroupedOver={isGroupedOver}
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
        <BlockQuote>{quote.content}</BlockQuote>
        <Footer>
          <Author colors={quote.author.colors}>{quote.author.name}</Author>
          <QuoteId>
            id:
            {quote.id}
          </QuoteId>
        </Footer>
      </Content>
    </Container>
  );
}

export default React.memo(QuoteItem);













