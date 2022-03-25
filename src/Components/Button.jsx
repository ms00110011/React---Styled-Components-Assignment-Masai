import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${({type}) => (type === "primary" ? "#2490FE" : "white")};
  padding: 7px 40px 7px 40px;
  border: ${({type}) => (type === "default" ? "1px solid gray" : type==='dashed' ? '1px dashed gray':0)};
  color: ${({type}) => (type === "primary" ? "white" : type==='link' ? '#2490FE':'black')};;
  font-size: 13px;
  margin-right: 10px;
  border-radius:2px;
`;

export { Button };
