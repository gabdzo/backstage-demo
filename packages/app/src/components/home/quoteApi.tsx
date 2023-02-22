import React, { useEffect, useState } from 'react';
import { getRandomQuote, Quote } from './test';

import { InfoCard, Props } from '@backstage/core-components';


function QuoteDisplay() {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    getRandomQuote().then((quote) => {
      setQuote(quote);
    });
  }, []);

  if (!quote) {
    const QuoteCard = <div>Loading...</div>;
  } else {
        const QuoteCard = (args: Props) => (
        <Wrapper>
            <InfoCard >Dezo</InfoCard>
        </Wrapper>
    );
        }
    return QuoteCard;
}  


export default QuoteCard;

