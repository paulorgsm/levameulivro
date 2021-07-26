export const isAuthenticated = () => sessionStorage.getItem('token') !== null;
export const getToken = () => sessionStorage.getItem('token');
export const getName = () => sessionStorage.getItem('nome');
export const login = (data) => {
    sessionStorage.setItem('token', data.token)
    sessionStorage.setItem('foto', data.foto)
    sessionStorage.setItem('nome', data.nome)
};
export const logout = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('foto')
    sessionStorage.removeItem('nome')
};