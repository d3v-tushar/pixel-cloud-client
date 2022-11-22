export const setJsonToken = (user) =>{
        const currentUser = {
            email: user.email
        };
        fetch('https://pixel-cloud-server.vercel.app/jwt',{
            method: 'POST',
            headers: {
            'content-type' : 'application/json',
            },
            body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data =>{
            localStorage.setItem('auth-token', data.token);
        })
    }