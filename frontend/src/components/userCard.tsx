import { useEffect, useState } from "react";
import axios from "axios";
import {IconUserCircle} from "@tabler/icons-react";
import {useNavigate} from "react-router-dom";

interface User {
    _id: string;
    name: string;
    email: string;
}

const UserCard = () => {
    const [users, setUsers] = useState<User[]>([]);

    const token = localStorage.getItem("token");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/user/get-all-user", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, [token]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 justify-items-center">
            {users.map((user) => (
                <div
                    key={user._id}
                    className="flex flex-col items-center text-center border rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-72"
                >
                    <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                        <IconUserCircle size={30} />
                    </div>

                    <h2 className="font-semibold text-lg text-gray-800 mb-1">{user.name}</h2>

                    <p className="text-sm text-gray-600 mb-4 break-words">{user.email}</p>

                    <button
                        onClick={() => navigate(`/tasks/user/${user._id}`)}
                        className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                        View Tasks
                    </button>
                </div>
            ))}
        </div>
    );
};

export default UserCard;
