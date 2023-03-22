import styled from 'styled-components'

export const ListItem = styled.li``

export const TagButton = styled.button`
  border: 1px solid #f3aa4e;
  height: 30px;
  padding: 0 10px;
  border-radius: 30px;
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  color: #fff;
  outline: none;

  cursor: pointer;
`
