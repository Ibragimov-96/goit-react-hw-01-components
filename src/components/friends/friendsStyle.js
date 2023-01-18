import styled from 'styled-components'
export const List = styled.ul`
  
display: flex;

;
`
export const ListPoints = styled.li`
 padding: 20px;
 display: grid;
 justify-content: center;
`
export const Image = styled.img`
 margin: auto;
`
export const Name = styled.p`
 color: ${({isOnline}) => (isOnline ? "green" :"red")};
`