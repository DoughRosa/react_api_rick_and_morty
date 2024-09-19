export interface NavigationType {
  url: string;
  label: string;
}

const navigation: NavigationType[] = [
  { url: '/', label: 'Início' },
  { url: '/products', label: 'Produtos' },
  { url: '/contact', label: 'Contato' }
];

export default navigation;
