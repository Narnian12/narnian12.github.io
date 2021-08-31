import styled from 'styled-components';

const Card = styled.div`
  box-shadow: 5px 5px 5px powderblue;
  padding: 3px;
  margin: 10px;
  max-width: 400px;
`

const CardLayout = styled.div`
  margin: 10px 0px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const CardText = styled.p`
  min-width: 200px;
  margin: 20px;
  text-align: center;
`

export { Card, CardLayout, CardText }