import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { Text } from './Filter.styled';

export const Filter = () => {
  const filterStore = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const value = event.currentTarget.value;
    dispatch(setFilter(value));
  };

  return (
    <>
      <Text>Find contacts by name</Text>
      <input
        type="text"
        name="filter"
        value={filterStore}
        onChange={onChange}
      />
    </>
  );
};
