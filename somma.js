// somma.js

function getInitials(fullName) {
  return fullName
    .split(' ')
    .map(word => word[0])
    .join('');
}

function createSlug(title) {
  if (typeof title !== 'string' || title.trim() === '') {
    throw new Error('Titolo non valido');
  }
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-');
}

function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return 0;
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

function findPostById(posts, id) {
  return posts.find(post => post.id === id);
}

// 👇 QUESTO È L'EXPORT
module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
};
