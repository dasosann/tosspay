import React, { useState } from 'react';
import S from "./style"
import MenuComponent from './MenuComponent';
const SelectMenu = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 표시 여부
    const [sortType, setSortType] = useState("좋아요순"); // 선택된 스트림 유형
    const selectSortType = (type) => {
        setSortType(type); // 선택된 유형 저장
        setIsDropdownOpen(false); // 드롭다운 닫기
      };
      const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev); 
      };
    return (
        <S.SortWrapper>
          <input
            readOnly
            value={sortType}
            onClick={toggleDropdown}
          />    
          {isDropdownOpen && (
        <div >
          <MenuComponent
            type="좋아요순"
            onClick={() => selectSortType("좋아요순")}
          />
          <MenuComponent
            type="최근순"
            onClick={() => selectSortType("최근순")}
          />
        </div>
      )} 
    </S.SortWrapper>
    );
};

export default SelectMenu;