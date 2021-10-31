import React from 'react';

const Repository = (props) => {
  const { repositoryOwner } = props;
  return (
    <div>
      <div>
        {repositoryOwner.login} ({repositoryOwner.url})
      </div>
    </div>
  );
};

export default Repository;