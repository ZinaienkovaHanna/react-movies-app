import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError() as Error;

    if (!isRouteErrorResponse(error)) {
        return null;
    }

    return (
        <div
            id="error-page"
            style={{ width: '1200px', color: 'white', margin: 'auto' }}
        >
            <h1 style={{ textAlign: 'center' }}>Oops!</h1>
            <p style={{ textAlign: 'center' }}>
                Sorry, an unexpected error has occurred.
            </p>
            <p style={{ textAlign: 'center' }}>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
