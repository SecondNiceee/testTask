import AppRouter from "./AppRouter";
import BaseProviders from "./BaseProviders";
import "./styles/index.css"

const AppEntry = () => {

    return (
        <BaseProviders>
            <AppRouter />
        </BaseProviders>
    );
};

export default AppEntry;