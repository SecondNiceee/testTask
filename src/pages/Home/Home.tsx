import TodoList from './components/TodoList';

const Home = () => {
    return (
        <section className='container flex items-center flex-col gap-4'>
            <header className='h2 text-black'>Todo List</header>
            <TodoList />
        </section>
    );
};

export default Home;    