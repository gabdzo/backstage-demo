// MyComponent.tsx

import React, { useEffect, useState, PropsWithChildren } from 'react';
import Grid from '@material-ui/core/Grid';
import { InfoCard } from '@backstage/core-components'; // replace with the actual path to the InfoCard component

interface Quote {
    author: string;
    content: string;
}

export const MyComponent: React.FC = () => {
  const [quote, setQuote] = useState<Quote>({ author: '', content: ''});

  useEffect(() => {
    const getQuote = async () => {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        setQuote(data);
    };
    getQuote();
}, []);

  const Wrapper = ({ children }: PropsWithChildren<{}>) => (
    <Grid container spacing={4}>
      <Grid item xs={4}>
        {children}
      </Grid>
    </Grid>
);

  return (
    <Wrapper>
        {quote ?
            <InfoCard title={quote.author}> 
                {quote.content} 
            </InfoCard>
            : 'Click the button to get a quote'}
    </Wrapper>
  );
};

export default MyComponent;
