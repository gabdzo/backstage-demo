import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import React, { useEffect, useState, PropsWithChildren } from 'react';
import { LinkButton } from '@backstage/core-components';
import { ItemCardGrid } from '@backstage/core-components';
import { ItemCardHeader } from '@backstage/core-components';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';


interface Quote {
    author: string;
    content: string;
}


export const Trainings = () => {
  const [quote, setQuote] = useState<Quote>({ author: '', content: ''});

  useEffect(() => {
    const getQuote = async () => {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        setQuote(data);
    };
    getQuote();
}, []);


    return (
    <ItemCardGrid>
      {[...Array(10).keys()].map(index => (
        <Card key={index}>
          <CardMedia>
            <ItemCardHeader title={`Card #${index}`} subtitle="Subtitle" />
          </CardMedia>
          <CardContent>
            { quote.content
              .split(' ')
              .slice(0, 5 + Math.floor(Math.random() * 30))
              .join(' ')}
          </CardContent>
          <CardActions>
            <LinkButton color="primary" to="/catalog">
                { quote.author }
            </LinkButton>
          </CardActions>
        </Card>
      ))}
    </ItemCardGrid>
    );
};

export default Trainings;
