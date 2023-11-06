import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

export type User = {
	email: string;
	id: number;
	name: string;
	password: string;
	role: string;
};

type UserContextType = {
	user: User | null;
	setUser: Dispatch<SetStateAction<User | null>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUserContext must be used within a UserProvider");
	}
	return context;
};

type UserProviderProps = {
	children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<User | null>(null);

	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
