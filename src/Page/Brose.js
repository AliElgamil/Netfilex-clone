import React from 'react';
import { useContent } from '../Hooks';
import selectionFilter from '../UTills/selection-filter';

export default function Brose() {
  const { films } = useContent('films');
  const { series } = useContent('series');

  const slides = selectionFilter(series, films);

  console.log(slides);
  return <div>Brose</div>;
}
