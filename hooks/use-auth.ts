import useSWR from "swr";
import { PublicConfiguration } from "swr/dist/types";
import { authApi } from "../apiClient";

export function useAuth(options?: Partial<PublicConfiguration>): any {
    const {data: profile, error, mutate} = useSWR('/profile', {
        dedupingInterval: 60000,
        revalidateOnFocus: false,
        ...options
    })
    const firstLoading = profile === undefined && error === undefined
    async function login() {
        await authApi.login({
            username: 'usertest1',
            password: '112342'
        })
        await mutate()
    }

    async function logout() {
        await authApi.logout()
        mutate({}, false)
    }

    return {
        profile,
        error,
        login,
        logout,
        firstLoading
    }
}