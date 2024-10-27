import { router } from "expo-router"
import { createContext, ReactNode, useContext, useState } from "react"
import * as SecureStore from 'expo-secure-store';
import api from "@/helpers/axios";
import { Alert, ToastAndroid } from "react-native";
import { UserProps } from "@/interfaces/user";

interface IUserLogin {
    email: string
    password: string
}

interface IUserRegister {
    email: string
    password: string
    form: string
    name: string
}

interface IAuthContext {
    isLogged: boolean
    userInfo: UserProps
    user: IUserLogin
    setUser: (user: IUserLogin) => void
    userRegister: IUserRegister
    setUserRegister: (user: IUserRegister) => void
    handleRegister: () => void
    handleLogin: (wAccount?: boolean) => void
    handleLogout: () => void
}

interface IAuthProviderProps {
    children: ReactNode
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [userRegister, setUserRegister] = useState<IUserRegister>({} as IUserRegister);
    const [user, setUser] = useState<IUserLogin>({} as IUserLogin);
    const [data, setData] = useState<UserProps>({} as UserProps);
    const [isLogged, setIsLogged] = useState(false);

    async function handleRegister() {
        if (!userRegister || !userRegister.email || !userRegister.password || !userRegister.form || !userRegister.name)
            return ToastAndroid.showWithGravity('Preencha todos os campos!', ToastAndroid.SHORT, ToastAndroid.TOP);

        await api.post('/registrar',
            { name: userRegister.name, form: userRegister.form, email: userRegister.email, password: userRegister.password })
            .then((res) => {
                if (res.status == 201) {
                    Alert.alert('Sucesso', 'Usuário registrado com sucesso!');
                    router.replace('/');
                    setUserRegister({} as IUserRegister);
                } else {
                    Alert.alert('Erro', 'Falha ao registrar usuário.');
                }
            })
            .catch((e) => {
                const body: string = e.response.data.error;

                if (e.status == 401) {
                    Alert.alert('Erro', body);
                } else {
                    Alert.alert('Erro', 'Erro ao registrar usuário: ' + e);
                }
            });
    }

    const handleLogin = async (wAccount?: boolean) => {
        if (wAccount == true) {
            setData({ ...data, email: 'n/a', name: 'n/a', form: 'n/a' });
            setIsLogged(true);
            router.replace('/main/(tabs)/');
            return;
        }

        if (!user || !user.email || !user.password) return ToastAndroid.showWithGravity('Digite suas credenciais!', ToastAndroid.SHORT, ToastAndroid.TOP);

        await api.post('/login', { email: user.email, password: user.password })
            .then((res) => {
                ToastAndroid.showWithGravity('Login efetuado com sucesso', ToastAndroid.SHORT, ToastAndroid.TOP);

                setData(res.data.user);
                setUser({} as IUserLogin);
                SecureStore.setItemAsync('token', res.data.token);

                setIsLogged(true);
                router.replace('/main/(tabs)/');
            })
            .catch((err) => {
                ToastAndroid.showWithGravity('Erro ao tentar fazer login' + err, ToastAndroid.SHORT, ToastAndroid.TOP);
            });
    }

    const handleLogout = async () => {
        if (data.email != 'n/a') {
            await api.post('/logout', { email: data.email })
                .then((res) => {
                    if (res.status == 200) {
                        setData({} as UserProps);
                        setIsLogged(false);
                        SecureStore.deleteItemAsync('token');

                        router.replace('/');

                        ToastAndroid.showWithGravity(res.data.message, ToastAndroid.SHORT, ToastAndroid.TOP);
                    }
                }).catch((e) => {
                    ToastAndroid.showWithGravity("Erro ao efetuar logout!", ToastAndroid.SHORT, ToastAndroid.TOP);
                });
        }
    }

    return (
        <AuthContext.Provider value={{ userRegister, setUserRegister, user, setUser, handleRegister, handleLogin, handleLogout, userInfo: data, isLogged }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}