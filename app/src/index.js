import foo from 'foo';

const objA = { boo: 'Boo' };
const objB = { ...objA };
const { boo } = objB;

const $root = document.getElementById('root');
$root.textContent = foo({ str: boo });
