import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.review.deleteMany();
  await prisma.book.deleteMany();
  await prisma.genre.deleteMany();

  const fantasy = await prisma.genre.create({ data: { name: 'Fantasy' } });
  const scifi = await prisma.genre.create({ data: { name: 'Science Fiction' } });
  const mystery = await prisma.genre.create({ data: { name: 'Mystery' } });
  const history = await prisma.genre.create({ data: { name: 'History' } });

  await prisma.book.createMany({
    data: [
      { title: 'The Hobbit', author: 'J.R.R. Tolkien', isbn: '9780000000001', totalCopies: 3, genreId: fantasy.id },
      { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', isbn: '9780000000002', totalCopies: 4, genreId: fantasy.id },
      { title: 'A Wizard of Earthsea', author: 'Ursula K. Le Guin', isbn: '9780000000003', totalCopies: 2, genreId: fantasy.id },
      { title: 'The Name of the Wind', author: 'Patrick Rothfuss', isbn: '9780000000004', totalCopies: 3, genreId: fantasy.id },
      { title: 'Dune', author: 'Frank Herbert', isbn: '9780000000005', totalCopies: 2, genreId: scifi.id },
      { title: "Ender's Game", author: 'Orson Scott Card', isbn: '9780000000006', totalCopies: 3, genreId: scifi.id },
      { title: 'The Martian', author: 'Andy Weir', isbn: '9780000000007', totalCopies: 2, genreId: scifi.id },
      { title: 'Neuromancer', author: 'William Gibson', isbn: '9780000000008', totalCopies: 2, genreId: scifi.id },
      { title: 'And Then There Were None', author: 'Agatha Christie', isbn: '9780000000009', totalCopies: 3, genreId: mystery.id },
      { title: 'The Hound of the Baskervilles', author: 'Arthur Conan Doyle', isbn: '9780000000010', totalCopies: 2, genreId: mystery.id },
      { title: 'Gone Girl', author: 'Gillian Flynn', isbn: '9780000000011', totalCopies: 2, genreId: mystery.id },
      { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', isbn: '9780000000012', totalCopies: 2, genreId: mystery.id },
      { title: 'Sapiens', author: 'Yuval Noah Harari', isbn: '9780000000013', totalCopies: 2, genreId: history.id },
      { title: 'Guns, Germs, and Steel', author: 'Jared Diamond', isbn: '9780000000014', totalCopies: 2, genreId: history.id },
      { title: 'The Silk Roads', author: 'Peter Frankopan', isbn: '9780000000015', totalCopies: 2, genreId: history.id },
      { title: 'SPQR', author: 'Mary Beard', isbn: '9780000000016', totalCopies: 2, genreId: history.id }
    ]
  });
}

main()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });