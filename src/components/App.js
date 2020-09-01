import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import {
  ageIncrement,
  ageDecrement,
  setAge,
  fetchFriends,
} from '../reducers/person';
import routes from '../routes';
import MenuLink from './MenuLink';

const App = ({
  name,
  age,
  ageIncrement,
  ageDecrement,
  setAge,
  fetchFriends,
  friends,
  isLoading,
}) => {
  useEffect(() => {
    if (!friends.length) {
      fetchFriends();
    }
  }, [friends]);

  // eslint-disable-next-line no-undef
  const env = __isClientSide__ ? 'client' : 'server';

  return (
    <>
      <p>
        Hello {name}, {env}!
      </p>
      <p>Your age is: {age}</p>
      <p>
        Is fetching:{' '}
        {isLoading ? 'yes, please wait...' : 'no'}
      </p>
      <p>Friends: {friends.join(', ')}</p>
      <p>
        <button type="button" onClick={ageDecrement}>
          younger
        </button>
        <button type="button" onClick={ageIncrement}>
          older
        </button>
        <button type="button" onClick={() => setAge(50)}>
          age = 50
        </button>
      </p>
      <div>
        {routes.map((route) => (
          <MenuLink route={route} />
        ))}
      </div>
      {renderRoutes(routes)}
    </>
  );
};

const mapStateToProps = (state) => ({
  name: state.person.name,
  age: state.person.age,
  friends: state.person.friends.data,
  isLoading: state.person.friends.isLoading,
});

const mapDispatchToProps = {
  ageIncrement,
  ageDecrement,
  setAge,
  fetchFriends,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
