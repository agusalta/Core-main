import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { auth, db } from "../config/firebase";
import { addDoc, collection, getDocs } from 'firebase/firestore'

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error('no hay un Auth Provider');
    return context;
}

export function AuthProvider( {children} ) {
    const [login, setLogin] = useState(localStorage.getItem("login") ? true : false);
    const [email, setEmail] = useState('')
    const [nombreCompleto, setNombreCompleto] = useState('')
    const [users, setUsers] = useState([])
    const usersCollectionRef = collection(db, "users")

    // Trae los usuarios desde la base de datos.
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
    
        getUsers();
    }, []);

    useEffect(() => {
        // Aquí puedes agregar un listener para observar los cambios en el estado de autenticación
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // El usuario está logueado
                setEmail(user.email); 
                setNombreCompleto(handleData(user.email))
            } else {
                setLogin(false)
                setNombreCompleto('')
            }
        });

        // Limpia el listener cuando el componente se desmonta
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (users.length > 0) {
          // The users data has been fetched, find the name of the logged-in user
          const name = handleData(email);
          setNombreCompleto(name || ""); // If name is null, set an empty string
        }
    }, [users, email]);

    const handleData = (emailToSearch) => {
        const userWithEmail = users.find((user) => user.email === emailToSearch);
    
        if (userWithEmail) {
          return userWithEmail.nombreCompleto;
        } else {
          return null; // El email no existe en la base de datos
        }
    };

    const handleNombreCompleto = (nombreCompleto) => {
        setNombreCompleto(nombreCompleto)
    }

    const getNombreCompleto = () => {
        return nombreCompleto
    }

    const handleEmail = (email) => {
        setEmail(email)
    }

    const handleLogin = () => {
        localStorage.setItem("login", "true")
        setLogin(true);
    } 

    const handleLogout = () => {
        localStorage.removeItem("login")
        setLogin(false);
    } 

    const registrarUsuario = async (nombreCompleto, email) => {
        handleNombreCompleto(nombreCompleto)
        handleEmail(email)

        await addDoc(usersCollectionRef, {nombreCompleto: nombreCompleto, email: email});
        setUsers((prevUsers) => [...prevUsers, { nombreCompleto: nombreCompleto, email: email }]);
    }

    return (
        <AuthContext.Provider value={{nombreCompleto, handleNombreCompleto, email, login, 
        handleLogin, handleLogout, handleEmail, users, registrarUsuario, handleData, getNombreCompleto }}>
            {children}
        </AuthContext.Provider>
    )
}