import { colors } from "@atlaskit/theme";
import finnImg from  "./static/1.jpg";
import bmoImg from "./static/4.jpg";
import princessImg from "./static/5.jpg";
import jakeImg from "./static/3.jpg";

const jake = {
  id: "1",
  name: "ترسیم رویاها",
  
  avatarUrl: jakeImg,
  colors: {
    soft: colors.Y50,
    hard: colors.N400A
  }
};

const BMO = {
  id: "2",
  name: "انجام شده ",

  avatarUrl: bmoImg,
  colors: {
    soft: colors.G50,
    hard: colors.N400A
  }
};

const fin = {
  id: "3",
  name: "برنامه های فوری",
 
  avatarUrl: finnImg,
  colors: {
    soft: colors.B50,
    hard: colors.N400A
  }
};

const princess = {
  id: "4",
  name: "برنامه های آینده",

  avatarUrl: princessImg,
  colors: {
    soft: colors.P50,
    hard: colors.N400A
  }
};

export const authors = [jake, BMO, fin, princess];

export const quotes = [
  {
    id: "1",
    content: "افزایش تولیدات شرکت به سه برابر",
    author: fin
  },
  {
    id: "2",
    content:
      "افتتاح شعبه جدید در دبی",
    author: jake
  },
  {
    id: "3",
    content: "همکاری با شرکت های خارجی",
    author:  BMO
  },
  {
    id: "4",
    content: "انجام کارهای عقب افتاده",
    author: fin
  },
  {
    id: "5",
    content: "پیروزی در مناقصه آبان ماه",
    author: BMO
  },
  {
    id: "6",
    content: "راه اندازی دوربین مداربسته",
    author: jake
  },
  {
    id: "7",
    content: "کسب رتبه یک شورایعالی انفورماتیک ",
    author: princess
  },

 
];


let idCount = quotes.length + 1;

export const getQuotes = (count) =>
  Array.from(quotes).map(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];

    const custom = {
      ...random,
      id: `${idCount++}`
    };

    return custom;
  });

export const getAuthors = (count) =>
  Array.from(authors).map(() => {
    const random = authors[Math.floor(Math.random() * 1)];

    const custom = {
      ...random,
      id: `author-${idCount++}`
    };

    return custom;
  });

const getByAuthor = (author, items) =>
  items.filter((quote) => quote.author === author);

export const authorQuoteMap: QuoteMap = authors.reduce(
  (previous, author) => ({
    ...previous,
    [author.name]: getByAuthor(author, quotes)
  }),
  {}
);

export const generateQuoteMap = (quoteCount) =>
  authors.reduce(
    (previous, author) => ({
      ...previous,
      [author.name]: getQuotes(quoteCount / authors.length)
    }),
    {}
  );
