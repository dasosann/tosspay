import React from 'react';
import S from './style'

const MenuComponent = ({type,onClick}) => {
    return (
        <S.TypeBoxWrapper style={{cursor:'pointer'}} onClick={onClick}>
            <S.TypeText>{type}</S.TypeText>
        </S.TypeBoxWrapper>
    );
};

export default MenuComponent;