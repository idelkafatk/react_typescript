import React, {FC, PropsWithChildren, useState} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps extends PropsWithChildren{
    width?: string
    height?: string
    variant?: CardVariant
    onClick: (num: number) => void
}

const Card: FC<CardProps> = ({width, height, onClick, children, variant}: CardProps) => {
    const [state] = useState(0)

    return (
        <div style={{width, height,
            border: variant === CardVariant.outlined ? '1px solid gray' : "none",
        background: variant === CardVariant.primary ? 'lightblue' : 'none'}}
        onClick={() => onClick(state)}>
            {children}
        </div>
    );
};

export default Card;