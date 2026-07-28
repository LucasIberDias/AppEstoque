import {
    categorias,
    produtos,
    movimentacoes,
    gerarIdCategoria,
    gerarIdProduto,
    gerarIdMovimentacao,
    usuariosMock
} from './mockData';

import type { Categoria, Produto, TipoMovimentacao, Movimentacao, LoginResponse, Usuario } from '../types';
import { data } from 'react-router-dom';

function simularDelay<T>(valor: T): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(valor), 300);
    });
}

export const authApi = {
    login: async (email: string, senha: string): Promise<LoginResponse> => {
        const usuario = usuariosMock.find(u => u.email === email && u.senha === senha);

        if (!usuario || usuario.senha !== senha) {
            return Promise.reject({
                Response: { data: { message: 'Email ou senha inválidos' } }
            });
        }
        const tokenFalso = `mock-token-${usuario.id}-${Date.now()}`;

        return simularDelay({
            accessToken: tokenFalso,
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            }
        });
    }
};