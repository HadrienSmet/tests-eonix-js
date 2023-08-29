import axios from "axios";

export const axiosEditUser = async (userId, data) => {
    return await axios.patch(
        `http://localhost:3000/api/auth/editUser/${userId}`,
        data,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};
