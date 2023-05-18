import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';

export const Searchbar = ({ onSubmit }) => {
  const [inputData, setInputData] = useState('');

  const handleChange = e => {
    setInputData(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputData);
    setInputData('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn>
          <ImSearch size="22" />
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={inputData}
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
