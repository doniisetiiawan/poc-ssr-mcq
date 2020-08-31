import React from 'react';
import { connect } from 'react-redux';
import {
  ageIncrement,
  ageDecrement,
  setAge,
} from '../reducers/person';

const App = ({
  name,
  age,
  ageIncrement,
  ageDecrement,
  setAge,
}) => {
  const env = __isClientSide__ ? 'client' : 'server';

  return (
    <>
      <p>
        Hello {name}, {env}!
      </p>
      <p>Your age is: {age}</p>
      <p>
        <button type="button" onClick={ageDecrement}>younger</button>
        <button type="button" onClick={ageIncrement}>older</button>
        <button type="button" onClick={() => setAge(50)}>age = 50</button>
      </p>
      <img src="/static/kitten.jpg" alt="kitten" />
    </>
  );
};

const mapStateToProps = (state) => ({
  name: state.person.name,
  age: state.person.age,
});

const mapDispatchToProps = {
  ageIncrement,
  ageDecrement,
  setAge,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
