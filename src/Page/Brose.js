import React from 'react';
import { SelectProfile } from '../Components';
import { useContent } from '../Hooks';
import selectionFilter from '../UTills/selection-filter';
// import { getAuth } from 'firebase/auth';
import { UseAuthListener } from '../Hooks';

export default function Brose() {
  // const { films } = useContent('films');
  const { movies } = useContent('movies');
  const { series } = useContent('series');
  const { user } = UseAuthListener();
  const slides = selectionFilter(series, movies);

  console.log(user.currentUser);
  return (
    <>
      <SelectProfile user={user} />
    </>
  );
}
