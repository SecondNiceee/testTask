import React from 'react';

const EmptyNotation = () => {
    return (
        <div className='h-[200px] w-[100%] flex justify-center items-center'>
        <p className='p opacity-50'>Тут ничего нет</p>
   </div>
    );
};

export default React.memo(EmptyNotation);