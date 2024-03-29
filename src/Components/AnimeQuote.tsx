import { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

const AnimeQuote: FC = () => {
  const [animeQuote, setAnimeQuote] = useState({
    quote: "",
    character: "",
    anime: "",
  });

  interface AnimeQuote {
    quote: string;
    character: string;
    anime: string;
  }

  useEffect(() => {
    fetch("https://animechan.vercel.app/api/quotes/anime?title=toradora")
      .then((response) => response.json())
      .then((quotes: [AnimeQuote]) =>
        setAnimeQuote(quotes[Math.floor(Math.random() * 10)])
      );
  }, []);
  return animeQuote.quote.length === 0 ? (
    <p>Loading quote...</p>
  ) : (
    <AnimeQuoteWrapper>
      <Typography color="text.primary">
        <i>&quot;{animeQuote.quote}&quot;</i>
      </Typography>
      <Typography color="text.secondary">
        {animeQuote.character}, <b>{animeQuote.anime}</b>
        {" [Generated by "}
        <a
          href="https://animechan.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Animechan
        </a>
        {"]"}
      </Typography>
    </AnimeQuoteWrapper>
  );
};

export default AnimeQuote;

const AnimeQuoteWrapper = styled.div`
  margin: 10px 20px;
`;
