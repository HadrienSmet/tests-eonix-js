import axios from "axios";

export const axiosDeleteUser = async (userId) => {
    return await axios.delete(
        `${import.meta.env.VITE_API_URL}api/auth/deleteUser/${userId}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};
