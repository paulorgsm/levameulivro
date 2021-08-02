export const isAuthenticated = () => sessionStorage.getItem('token') !== null;
export const getToken = () => sessionStorage.getItem('token');
export const getName = () => sessionStorage.getItem('nome');

export function logout (){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('foto')
    sessionStorage.removeItem('nome')
};

export function login(data){
    sessionStorage.setItem('token', data?.token)
    sessionStorage.setItem('foto', data.foto)
    sessionStorage.setItem('nome', data.nome)
};

export function getPhoto(){
    const foto = sessionStorage.getItem('foto')
    if (foto == "undefined") {
        return null
    } else {
        return foto
    }
}