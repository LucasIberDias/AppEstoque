import type { Categoria, Produto, Movimentacao, Usuario } from '../types';

export const usuariosMock: (Usuario & { senha: string })[] = [
    {
        id: 1,
        nome: "Lucas",
        email: "Lucas@Example.com",
        senha: "12345678"
    }
];

export let categorias: Categoria[] = [
    {
        id: 1,
        nome: "Armas"
    },
    {
        id: 2,
        nome: "Armaduras"
    }
];

export let produtos: Produto[] = [
    {
        id: 1,
        nome: "Blaster E-11",
        preco: 260,
        quantidade: 26,
        categoria: categorias[0]
    },
    {
        id: 2,
        nome: "Peitoral Stormtrooper - Plastoide",
        preco: 325,
        quantidade: 19,
        categoria: categorias[1]
    },
    {
        id: 3,
        nome: "Blaster DL-44",
        preco: 300,
        quantidade: 15,
        categoria: categorias[0]
    },
    {
        id: 4,
        nome: "Capacete Stormtrooper - Plastoide",
        preco: 255,
        quantidade: 24,
        categoria: categorias[1]
    }
];

export let movimentacoes: Movimentacao[] = [];

export let proximoIdCategoria = 3;
export let proximoIdProduto = 5;
export let proximoIdMovimentacao = 1;

export function gerarIdCategoria(){
    return proximoIdCategoria++;
}

export function gerarIdProduto(){
    return proximoIdProduto++;
}

export function gerarIdMovimentacao(){
    return proximoIdMovimentacao++;
}