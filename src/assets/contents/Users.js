export const users = [
    {
        id: "1",
        userId: 'tandrimab',
        password: 'abc123',
        email: 'tandrima@abc.com',
        name: 'Tandrima Bhattacharjee',
        role: 'admin',
        nonAccessibleRoutes: []
    },
    {
        id: "2",
        userId: 'user1',
        password: 'user123',
        email: 'user1@abc.com',
        name: 'User One',
        role: 'user',
        nonAccessibleRoutes: ['/admin']
    },
    {
        id: "3",
        userId: 'user2',
        password: 'user234',
        email: 'user2@abc.com',
        name: 'User Two',
        role: 'user',
        nonAccessibleRoutes: ['/admin']
    }
]