import axios from "axios";

export const axiosSearchUser = async (data) => {
    return await axios({
        method: "get",
        url: `${import.meta.env.VITE_API_URL}api/auth/searchUser/${data}`,
        headers: {
            "Content-Type": "application/json",
        },
    });
};
