import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import { CardInfo } from '../utils/interfaces';
import PropTypes from 'prop-types';

interface ProfileProps {
  cards: CardInfo[];
}

const Cards: FC<ProfileProps> = ({ cards }) => {
  const cardStyle = {
    backgroundColor: '#212121',
    minWidth: 300,
    maxWidth: 400,
    margin: 1,
  };

  return (
    <CardLayout>
      {cards.map((card) => {
        return (
          <React.Fragment key={card.header}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="h5" color="text.primary">
                  {card.link ? (
                    <a href={card.link} target="_blank" rel="noreferrer">
                      {card.header}
                    </a>
                  ) : (
                    card.header
                  )}
                </Typography>
                <Typography color="text.secondary">{card.body}</Typography>
              </CardContent>
              <>
                {card.footer ? (
                  <Typography color="text.primary" gutterBottom={true}>
                    <b>Tech Stack: </b>
                    {card.footer}
                  </Typography>
                ) : (
                  <></>
                )}
              </>
            </Card>
          </React.Fragment>
        );
      })}
    </CardLayout>
  );
};

export default Cards;

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
};

const CardLayout = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
