import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router';
import { App } from './App';
import Dashboard from '../components/Dashboard';

const session = {
  isAuthenticated: true,
  firstName: 'firstname',
  lastName: 'lastname',
  userID: 1,
  roles: [4, 3, 9],
  isManager: true,
};

const sessionUnauth = {
  isAuthenticated: false,
  failureMessage: 'Unauthorised user',
};

const userInfo = {
  firstName: 'firstname',
  lastName: 'lastname',
  userID: 1,
  roles: [4, 3, 9],
  isManager: true,
};

describe('Container: App', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('check app class existance', () => {
    expect(wrapper.find('.app').length).toEqual(1);
  });

  it('Check for dashboard routes with authorization', () => {
    const wrapper = shallow(<App session={session} />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
    expect(pathMap['/Dashboard']).toBe(undefined);
  });
});
