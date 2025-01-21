import BaseProviders from './BaseProviders';
import AppRouter from './AppRouter';
import "./styles/index.css";

const AppEntry = () => {

    return (
        <BaseProviders>
            <AppRouter />
        </BaseProviders>
    );
};

export default AppEntry;