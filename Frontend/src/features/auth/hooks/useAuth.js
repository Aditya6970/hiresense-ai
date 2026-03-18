import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";

export const useAuth = () => {

    const { user, setUser, loading, setLoading } = useContext(AuthContext);

    // 🔥 LOGIN
    const handleLogin = async ({ email, password }) => {
        setLoading(true);
        try {
            const data = await login({ email, password });

            // ⚠️ safety check (IMPORTANT)
            if (!data || !data.user) {
                return false;
            }

            // ✅ store user in localStorage
            localStorage.setItem("user", JSON.stringify(data.user));

            setUser(data.user);

            return true;   // ✅ must return true
        } catch (err) {
            console.log("Login Error:", err);
            return false;
        } finally {
            setLoading(false);
        }
    };

    // 🔥 REGISTER
    const handleRegister = async ({ username, email, password }) => {
        setLoading(true);
        try {
            const data = await register({ username, email, password });

            if (!data || !data.user) {
                return false;
            }

            localStorage.setItem("user", JSON.stringify(data.user));

            setUser(data.user);

            return true;
        } catch (err) {
            console.log("Register Error:", err);
            return false;
        } finally {
            setLoading(false);
        }
    };

    // 🔥 LOGOUT
    const handleLogout = async () => {
        setLoading(true);
        try {
            await logout();

            localStorage.removeItem("user");
            setUser(null);
        } catch (err) {
            console.log("Logout Error:", err);
        } finally {
            setLoading(false);
        }
    };

    // 🔥 LOAD USER ON REFRESH
    useEffect(() => {

        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setLoading(false);
            return;
        }

        const fetchUser = async () => {
            try {
                const data = await getMe();

                if (data && data.user) {
                    setUser(data.user);
                    localStorage.setItem("user", JSON.stringify(data.user));
                }
            } catch (err) {
                console.log("getMe Error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();

    }, []);

    return { user, loading, handleRegister, handleLogin, handleLogout };
};