import axios from "axios";

export const axiosDeleteUser = async (userId) => {
    return await axios.delete(
        `http://localhost:3000/api/auth/deleteUser/${userId}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};
