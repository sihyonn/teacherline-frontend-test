import styled from "@emotion/styled";
import { FILTER_OPTION } from "@/src/constants/FILTER_OPTION";
import { FilterOption } from "@/src/types/todo";

interface SelectBoxProps {
  setFilter: (filter: FilterOption) => void;
}

export default function ToDoFilterDropdown({ setFilter }: SelectBoxProps) {
  const handleChangeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = e.target.value as FilterOption;
    setFilter(selectedFilter);
  };

  return (
    <S.SelectBox onChange={handleChangeOption}>
      <option value={FILTER_OPTION.ALL}>전체</option>
      <option value={FILTER_OPTION.COMPLETE}>완료된 할 일</option>
      <option value={FILTER_OPTION.INCOMPLETE}>미완료된 할 일</option>
    </S.SelectBox>
  );
}

const S = {
  SelectBox: styled.select`
    margin-top: 2rem;
  `,
};
