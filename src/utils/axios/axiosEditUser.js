import axios from "axios";

export const axiosEditUser = async (userId, data) => {
    return await axios.patch(
        `${import.meta.env.VITE_API_URL}api/auth/editUser/${userId}`,
        data,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};
