import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const linkStyle = ({isActive} : {isActive: boolean}): React.CSSProperties =>({
    display: 'block',
    padding: '10px 16px',
    textDecoration: 'none',
    color: isActive ? '#fff': '#333',
    backgroundColor: isActive ? '#2563eb': 'transparent',
    borderRadius: 6,
    marginBottom: 4
})

export function DashboardLayout(){
    const {usuario, logout} = useAuth();

    return(
        <div style={{display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif'}}>
            <aside style={{width: 220, borderRight: '1px solid #eee', padding: 16}}>
                <h3 style={{marginBottom: 24}}>Estoque</h3>

                <NavLink to="/" end style={linkStyle}>
                    Inicio
                </NavLink>

                <NavLink to="/categorias" end style={linkStyle}>
                    Categoria
                </NavLink>

                <NavLink to="/produtos" end style={linkStyle}>
                    Produtos
                </NavLink>

                <NavLink to="/movimentacoes" end style={linkStyle}>
                    Movimentações
                </NavLink>
            </aside>

            <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                <header
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    padding: '12px 24px',
                    borderBottom: '1px solid #eee'
                }}
                >
                    <span style={{marginRight: 12}}>Olá, {usuario?.nome}</span>

                    <button onClick={logout}>
                        Sair
                    </button>

                </header>

                <main style={{padding: 24, flex: 1}}>
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}