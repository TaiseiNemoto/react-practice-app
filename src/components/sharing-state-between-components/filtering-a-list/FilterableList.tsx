'use client';

import { foods } from '@/app/sharing-state-between-components/filtering-a-list/data';
import SearchBar from './SearchBar';
import List from './List';

import { useState } from 'react';
import { filterItems } from '../../../app/sharing-state-between-components/filtering-a-list/data';

export default function FilterableList() {
  const [query, setQuery] = useState('');

  const filteredFoods = filterItems(foods, query);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar query={query} handleChange={handleChange} />
      <hr />
      <List items={filteredFoods} />
    </>
  );
}
