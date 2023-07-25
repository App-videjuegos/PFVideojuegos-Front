import axios from "axios";

const baseUrl = "https://pfvideojuegos-back-production.up.railway.app/user/login"

const login = async credentials =>{
    const {data} = await axios.post(baseUrl,credentials)
    return data
}




const authLogin = async (user) => {

    
    function generarPasswordDesdeString(str) {
        // Patrón constante para la contraseña
        const patron = "MyPass123!";
      
        // Concatenar el string original con el patrón constante
        const password = str + patron;
      
        return password;
      }

    const credentials = {
        user:user,
        password: generarPasswordDesdeString(user)
    }

    console.log("DESDE LOGIN ",credentials)

    try {
        
        const { data } = await axios.post(baseUrl,credentials)
        console.log(data)

        if(!data.user){
            const response = await axios.post(
                "https://pfvideojuegos-back-production.up.railway.app/user",
                {
                  user: credentials.user.slice(0,5),
                  password: credentials.password,
                  fullname: credentials.user.slice(0,5),
                  email: credentials.user,
                  date:"2020-12-12",
                  tac: true,
                  newsLetter: true,
                  id: 1 + Math.floor(Math.random() * 999),
                  userAdmin: false,

                }
              );
              console.log("Respuesta del servidor:", response.data);
        }
        return data


    } catch (error) {
        console.log(error)
    }
    




      

    

         
}
export default { login, authLogin }