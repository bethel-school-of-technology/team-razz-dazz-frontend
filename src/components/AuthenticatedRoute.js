import { Redirect, Route } from 'react-router';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {

    return (
      <Route
        {...rest}
        render={(props) =>
          localStorage.getItem("myJWT") ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
}

export default AuthenticatedRoute;