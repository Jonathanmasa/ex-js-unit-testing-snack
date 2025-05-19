// IMPORT FUNZIONI
const {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
} = require('./somma');

// 🏆 Snack 1
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."
describe('getInitials', () => {
  test('restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Mario Rossi')).toBe('MR');
    expect(getInitials('Luigi Verdi Bianchi')).toBe('LVB');
  });
});

// 🏆 Snack 2 & 4
// 👉 "La funzione createSlug restituisce una stringa in lowercase."
// 👉 "La funzione createSlug sostituisce gli spazi con -."
describe('createSlug - lowercase e separazione con "-"', () => {
  test('restituisce una stringa in lowercase', () => {
    expect(createSlug('Titolo Di Test')).toBe('titolo-di-test');
  });

  test('sostituisce gli spazi con "-"', () => {
    expect(createSlug('Test con spazi multipli')).toBe('test-con-spazi-multipli');
  });
});

// 🏆 Snack 6
// 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."
describe('createSlug - errori', () => {
  test('lancia un errore se il titolo è vuoto o non valido', () => {
    expect(() => createSlug('')).toThrow('Titolo non valido');
    expect(() => createSlug('    ')).toThrow('Titolo non valido');
    expect(() => createSlug(null)).toThrow('Titolo non valido');
    expect(() => createSlug(123)).toThrow('Titolo non valido');
  });
});

// 🏆 Snack 3
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."
describe('average', () => {
  test('calcola la media aritmetica di un array di numeri', () => {
    expect(average([1, 2, 3])).toBe(2);
    expect(average([10, 20, 30, 40])).toBe(25);
  });
});

// 🏆 Snack 5
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."
describe('isPalindrome', () => {
  test('verifica se una stringa è un palindromo', () => {
    expect(isPalindrome('anna')).toBe(true);
    expect(isPalindrome('AnNa')).toBe(true);
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
    expect(isPalindrome('ciao')).toBe(false);
  });
});

// 🏆 Snack 7
// 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
// + test strutturali
describe('findPostById', () => {
  const posts = [
    { id: 1, title: 'Post Uno', slug: 'post-uno' },
    { id: 2, title: 'Post Due', slug: 'post-due' },
    { id: 3, title: 'Post Tre', slug: 'post-tre' },
  ];

  test('restituisce il post corretto dato l’array di post e l’id', () => {
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: 'Post Due', slug: 'post-due' });
  });

  test('ogni post ha le proprietà id, title e slug', () => {
    for (const post of posts) {
      expect(post).toHaveProperty('id');
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('slug');
    }
  });

  test('viene passato un id numerico', () => {
    const id = 2;
    expect(typeof id).toBe('number');
  });
});
