const Pilha = require('../src/Pilha');

describe('Pilha', () => {
  let minhaPilha;

  beforeEach(() => {
    minhaPilha = new Pilha();
  });

  test('push adiciona elemento à pilha', () => {
    minhaPilha.push(1);
    expect(minhaPilha.size()).toBe(1);
  });

  test('pop remove elemento do topo da pilha', () => {
    minhaPilha.push(1);
    minhaPilha.push(2);
    const removedItem = minhaPilha.pop();
    expect(removedItem).toBe(2);
    expect(minhaPilha.size()).toBe(1);
  });

  test('peek retorna o elemento no topo da pilha', () => {
    minhaPilha.push(1);
    minhaPilha.push(2);
    const topItem = minhaPilha.peek();
    expect(topItem).toBe(2);
    expect(minhaPilha.size()).toBe(2);
  });

  test('isEmpty verifica se a pilha está vazia', () => {
    expect(minhaPilha.isEmpty()).toBe(true);
    minhaPilha.push(1);
    expect(minhaPilha.isEmpty()).toBe(false);
  });

  test('clear limpa a pilha', () => {
    minhaPilha.push(1);
    minhaPilha.push(2);
    minhaPilha.clear();
    expect(minhaPilha.isEmpty()).toBe(true);
  });
});
