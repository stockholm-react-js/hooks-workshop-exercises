import React, { useEffect, useState } from 'react';
import { findLanguages } from '../../api';

function LanguageList({ languages }) {
  return (
    <ul>
      {languages.map(lang => <li key={lang}>{lang}</li>)}
    </ul>
  );
}

function LanguageFinder() {
  const [search, setSearch] = useState('');
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    let isCancelled = false;
    findLanguages(search).then(result => {
      if (!isCancelled) {
        setLanguages(result);
      }
    });
    return () => { isCancelled = true };
  }, [search]);

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      <LanguageList languages={languages} />
    </div>
  );
}

export default LanguageFinder;
