import { Header } from "../components/Header";

export const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    );
};