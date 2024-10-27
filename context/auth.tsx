import { router } from "expo-router"
import { createContext, ReactNode, useContext, useState } from "react"
import * as SecureStore from 'expo-secure-store';
import api from "@/helpers/axios";
import { ToastAndroid } from "react-native";

interface UserProps {
    name: string
    email: string
    form: string
}

interface IUserLogin {
    email: string
    password: string
}

interface IAuthContext {
    userInfo: UserProps
    user: IUserLogin
    setUser: (user: IUserLogin) => void
    handleLogin: () => void
}

interface IAuthProviderProps {
    children: ReactNode
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<IUserLogin>({} as IUserLogin);
    const [data, setData] = useState<UserProps>({} as UserProps);

    const handleLogin = async () => {
        if (!user || user.email == '' || user.password == '') {
            ToastAndroid.showWithGravity('Digite suas credenciais!', ToastAndroid.SHORT, ToastAndroid.TOP);
            return;
        }

        await api.post('/login', { email: user.email, password: user.password })
            .then((res) => {
                ToastAndroid.showWithGravity('Login efetuado com sucesso', ToastAndroid.SHORT, ToastAndroid.TOP);
                
                setData(res.data.user);
                SecureStore.setItemAsync('token', res.data.token);
                
                router.replace('/main/(tabs)/');
            })
            .catch((err) => {
                ToastAndroid.showWithGravity('Erro ao tentar fazer login' + err, ToastAndroid.SHORT, ToastAndroid.TOP);
            });
    }

    return (
        <AuthContext.Provider value={{ user, setUser, handleLogin, userInfo: data }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}