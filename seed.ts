import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const fantasy = await prisma.genre.create({ data: { name: 'Fantasy' } });
  const scifi   = await prisma.genre.create({ data: { name: 'Science Fiction' } });
  const mystery = await prisma.genre.create({ data: { name: 'Mystery' } });
  const history = await prisma.genre.create({ data: { name: 'History' } });

  await prisma.book.createMany({
    data: [
      { title: 'The Hobbit', author: 'J.R.R. Tolkien', genreId: fantasy.id },
      { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genreId: fantasy.id },
      { title: 'A Wizard of Earthsea', author: 'Ursula K. Le Guin', genreId: fantasy.id },
      { title: 'The Name of the Wind', author: 'Patrick Rothfuss', genreId: fantasy.id },
      { title: 'Dune', author: 'Frank Herbert', genreId: scifi.id },
      { title: 'Ender\'s Game', author: 'Orson Scott Card', genreId: scifi.id },
      { title: 'The Martian', author: 'Andy Weir', genreId: scifi.id },
      { title: 'Neuromancer', author: 'William Gibson', genreId: scifi.id },
      { title: 'And Then There Were None', author: 'Agatha Christie', genreId: mystery.id },
      { title: 'The Hound of the Baskervilles', author: 'Arthur Conan Doyle', genreId: mystery.id },
      { title: 'Gone Girl', author: 'Gillian Flynn', genreId: mystery.id },
      { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', genreId: mystery.id },
      { title: 'Sapiens', author: 'Yuval Noah Harari', genreId: history.id },
      { title: 'Guns, Germs, and Steel', author: 'Jared Diamond', genreId: history.id },
      { title: 'The Silk Roads', author: 'Peter Frankopan', genreId: history.id },
      { title: 'SPQR', author: 'Mary Beard', genreId: history.id },
    ],
  });
}

main().finally(() => prisma.$disconnect());