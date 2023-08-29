import { useState } from "react";
import { axiosGetUsers } from "../../utils/axios/axiosGetUsers";
import { useEffect } from "react";
import { axiosSearchUser } from "../../utils/axios/axiosSearchUser";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const useSearchDivision = (handleUsers) => {
    const [searchValue, setSearchValue] = useState("");
    const labelRef = useRef(null);
    const handleSearchValue = (e) => setSearchValue(e.target.value);
    const handleSearchAll = () => {
        axiosGetUsers()
            .then((res) => handleUsers(res.data))
            .catch((error) => console.log(error));
    };
    const handleSearchUser = () => {
        if (searchValue.length > 1) {
            axiosSearchUser(searchValue)
                .then((res) => {
                    setSearchValue("");
                    if (res.data.length !== 0) {
                        handleUsers(res.data);
                    } else {
                        handleUsers([]);
                    }
                })
                .catch((err) => console.log(err));
        }
    };

    useEffect(() => {
        if (searchValue !== "") labelRef.current.classList.add("fill");
        if (searchValue === "") labelRef.current.classList.remove("fill");
    }, [searchValue]);

    return {
        searchValue,
        labelRef,
        handleSearchAll,
        handleSearchUser,
        handleSearchValue,
    };
};

const SearchDivision = ({ handleUsers }) => {
    const {
        searchValue,
        labelRef,
        handleSearchAll,
        handleSearchUser,
        handleSearchValue,
    } = useSearchDivision(handleUsers);
    return (
        <div className="search-row">
            <h2>Fais une recherche!</h2>
            <div className="search-user-div">
                <div className="input-division">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        value={searchValue}
                        onChange={handleSearchValue}
                    />
                    <label ref={labelRef} htmlFor="search">
                        Rechercher...
                    </label>
                </div>
                <button onClick={handleSearchUser}>
                    <FaSearch />
                </button>
            </div>
            <button onClick={handleSearchAll}>
                Voir tous les utilisateurs
            </button>
        </div>
    );
};

export default SearchDivision;
