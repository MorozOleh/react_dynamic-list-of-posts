import React, { useState } from 'react';
import { PostsList } from './components/PostsList';
import { PostDetails } from './components/PostDetails';
import { Select } from './components/Select';

import './App.scss';
import './styles/general.scss';

export const App = () => {
  const [selectedUser, setSelectedUser] = useState(0);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const selectUser = event => setSelectedUser(+event.target.value);
  const selectUserId = id => setSelectedPostId(id);
  const resetUserId = () => setSelectedPostId(null);

  return (
    <div className="App">
      <header className="App__header">
        <Select
          value={selectedUser}
          onSelectUser={selectUser}
        />
      </header>

      <main className="App__main">
        <div className="App__sidebar">
          <PostsList
            selectedUser={selectedUser}
            onChangeUserId={selectUserId}
            selectedPostId={selectedPostId}
            onResetUserId={resetUserId}
          />
        </div>

        <div className="App__content">
          <PostDetails
            selectedPostId={selectedPostId}
          />
        </div>
      </main>
    </div>
  );
};