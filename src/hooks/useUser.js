import { useCallback, useEffect, useState } from "react";

export const CURRENT_USER_LOCAL_STORAGE_KEY = "user";

const useUser = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const userJson = localStorage?.getItem(CURRENT_USER_LOCAL_STORAGE_KEY);
		const user = userJson && JSON?.parse(userJson);
		setUser(user);
	}, []);

	const updateUser = useCallback((user) => {
		const userJson = JSON?.stringify(user);
		localStorage?.setItem(CURRENT_USER_LOCAL_STORAGE_KEY, userJson);
	}, []);

	const removeUser = useCallback(() => {
		localStorage?.removeItem(CURRENT_USER_LOCAL_STORAGE_KEY);
	}, []);

	return { user, updateUser, removeUser };
};

export default useUser;

// import { useCallback, useEffect, useState } from "react";

// export const CURRENT_USER_LOCAL_STORAGE_KEY = "user";

// const useUser = () => {
// 	const [user, setUser] = useState(null);

// 	useEffect(() => {
// 		const userJson = sessionStorage.getItem(CURRENT_USER_LOCAL_STORAGE_KEY);
// 		const user = userJson && JSON.parse(userJson);
// 		setUser(user);
// 	}, []);

// 	const updateUser = useCallback((user) => {
// 		const userJson = JSON.stringify(user);
// 		sessionStorage.setItem(CURRENT_USER_LOCAL_STORAGE_KEY, userJson);
// 	}, []);

// 	const removeUser = useCallback(() => {
// 		sessionStorage.removeItem(CURRENT_USER_LOCAL_STORAGE_KEY);
// 	}, []);

// 	return { user, updateUser, removeUser };
// };

// export default useUser;
