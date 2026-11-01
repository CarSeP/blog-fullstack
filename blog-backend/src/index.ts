import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const PORT = process.env.PORT || "4000"

const posts = [
  {
    id: "37a4e841-d609-11f1-a500-a3940c7a539f",
    title: "Introduction to Modern JavaScript",
    subtitle: "Everything you need to know to get started with ES6+",
    tags: ["javascript", "programming", "web"],
    photo_url: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQGHXG5jLDHSytgGCJGbKa52m9JUDpzsXhCh-HvbAK7hIIZB1ySMFXfNuIYll2sBv9YyzTorLZeFl3HCYY",
    content: "JavaScript has evolved tremendously over recent years. With the arrival of ES6, developers gained powerful tools like arrow functions, destructuring, and promises...",
    published_at: "2026-06-01T10:00:00Z",
  },
  {
    id: "84f1b290-e518-11f1-8214-53940c7a881b",
    title: "The Ultimate Guide to CSS Grid",
    subtitle: "Design complex layouts in minutes",
    tags: ["css", "web design", "frontend"],
    photo_url: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSrcB44Snz3AbGL4qVKedCXEaiLACFe1S1EmkPZd2dy2LRv33DdPVVl_PCNatsvZvuQIBRUu6DKku28bdE",
    content: "CSS Grid Layout is a two-dimensional layout system for the web. It lets you divide a page into major regions or define relationships in terms of size, position, and layer...",
    published_at: "2026-06-05T14:30:00Z",
  },
  {
    id: "b2c3d4e5-f6a7-11f1-9123-c7a539fa3940",
    title: "Best Practices in React",
    subtitle: "Write clean, maintainable, and scalable code",
    tags: ["react", "javascript", "frontend"],
    photo_url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRwM0nZbcMb9qumm-lbiDlUVF3GbqSrXE090Bqx8NjatjjA2amqxkzqHUszdq805EFxredoynAlaqNFZ5g",
    content: "When working with React, it is easy to lose control of state and components if you do not follow a clear structure. Today we will look at how to organize files and use custom hooks...",
    published_at: "2026-06-10T09:15:00Z",
  },
];

const typeDefs = `#graphql
    type Post {
        id: String!
        title: String!
        subtitle: String
        tags: [String]
        photo_url: String
        content: String!
        published_at: String!
    }

    type Query {
        posts: [Post]
    }
`;

const resolvers = {
  Query: {
    posts: () => posts,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: Number(PORT) },
});

console.log(`🚀  Server ready at: ${url}`);
