import { Redirect, Route } from 'react-router';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {

    const token = localStorage.getItem('myJWT');
    const isLoggedIn = !! token;
    

    return (
        <Route {...rest}
        render = { (props) => {
            props.token = token;
            return isLoggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to={{
                    pathname: "/login",
                    state: { from: props.location }
                }}
                />
            )
        }}
        />
    )
}

export default AuthenticatedRoute;