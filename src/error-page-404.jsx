import { useRouteError } from 'react-router-dom';

function ErrorPage404() {
    const error = useRouteError();
    console.log(error);

    return <div>
        Hi, page is not found.
    </div>
}

export default ErrorPage404;