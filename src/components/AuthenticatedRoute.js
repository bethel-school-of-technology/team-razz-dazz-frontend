import { Redirect, Route } from 'react-router';

const AuthenticatedRoute = ({ container: Container, ...rest }) => {

    const token = localStorage.getItem('myJWT');
    const isLoggedIn = !! token;
    

    return (
        <Route {...rest}
        render = { (props) => {
            props.token = token;
            return isLoggedIn ? (
                <Container {...props} />
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