import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
    const { login } = useAuth();

    const navigate = useNavigate();

    //Variaveis de dados para Login
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    //Variaveis de erro e carregamento
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    //Função onde realiza o login ao sistema
    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();

        //Vai limpar qualquer erro ocorrido anteriormente, e "ativa" a tela de carregamento
        setErro('');
        setCarregando(true);

        try {
            //Usa o Login exportado do AuthContext
            await login(email, senha);

            //Navega para o dashboard caso o login seja um sucesso
            navigate('/', { replace: true });
        } catch (err: any) {
            setErro(err.response?.data.message ?? 'Erro ao realizar Login');
        } finally {
            //Desativa a tela de carregamento ao final do try
            setCarregando(false);
        }
    }

    return (
        //Div que vai servir de "Body" já estilizada
        <div style={{
            maxWidth: 360,
            margin: '80px auto',
            padding: 24,
            border: '1px solid #ccc',
            borderRadius: 8,
            fontFamily: 'sans-serif',
        }}>
            <h2>Sistemas de Controle de Estoque</h2>

            <p style={{ color: '#666', marginTop: -8 }}>
                Entre com suas credenciais
            </p>

            <form onSubmit={handleSubmit}>
                <div style={{
                    marginBottom: 12
                }}>
                    <label>E-mail</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required

                        style={{
                            width: '100%',
                            padding: 8
                        }}
                    />
                </div>

                <div style={{
                    marginBottom: 12
                }}>
                    <label>Senha</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required

                        style={{
                            width: '100%',
                            padding: 8
                        }}
                    />
                </div>

                {erro && <p style={{ color: 'red' }}>{erro}</p>}

                <button
                    type="submit"
                    disabled={carregando}
                    style={{
                        width: '100%',
                        padding: 12
                    }}>
                    {carregando ? 'Entrando...' : 'Entrar'}
                </button>
            </form>
            <p style={{
                fontSize: 12,
                color: '#999',
                marginTop: 16
            }}>
                Use Lucas@Example.com | 12345678
            </p>
        </div>
    );
}