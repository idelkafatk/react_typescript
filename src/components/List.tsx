import React from 'react';

interface ListProps<T> {
    items: T[]
    renderItems: (item: T) => React.ReactNode
}

const List = <T,>(props: ListProps<T>) => {
    return (
        <div>
            {props.items.map(props.renderItems)}
        </div>
    );
};

export default List;