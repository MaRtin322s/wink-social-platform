const baseUrl = 'http://localhost:5000/publications';

export const create = (accessToken, publicationData) => {
    return fetch(`${baseUrl}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(publicationData)
    })
        .then(res => res.json());
}