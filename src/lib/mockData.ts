import { Developer, Award, DeveloperAward } from '../types';

// mock developers data
export const mockDevelopers: Developer[] = [
    {
        id: '1',
        name: 'Farhan Helmy',
        title: 'Software Engineer',
        location: 'Malaysia',
        avatar_url: 'https://www.farhanhelmy.com/farhan.png',
        resignation_count: 5,
        created_at: '2024-01-01'
    },
    {
        id: '2',
        name: 'Ariff Nazhan',
        title: 'Machine Learning Engineer',
        location: 'Malaysia',
        avatar_url: 'https://avatars.githubusercontent.com/u/58643675?v=4',
        resignation_count: 4,
        created_at: '2024-01-15'
    },
    {
        id: '3',
        name: 'Azwan',
        title: 'Senior Data Engineer',
        location: 'Malaysia',
        avatar_url: 'https://media.licdn.com/dms/image/v2/D5603AQFuh-wY3vCAWw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705242889127?e=1755734400&v=beta&t=6ynjX48z1uZdTs8l0SPA0zAlZqyBf522fYg99Y3Kzvo',
        resignation_count: 3,
        created_at: '2024-02-01'
    },
    {
        id: '4',
        name: 'KC',
        title: 'Software Engineer',
        location: 'Malaysia',
        avatar_url: 'https://media.licdn.com/dms/image/v2/D5603AQGB-Ep5Razf3Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1730126533439?e=1745452800&v=beta&t=TaE5jCh6PmNyR9tWWGHrnEOQPDZXAVn4I84WM2Jf32I',
        resignation_count: 1,
        created_at: '2024-02-15'
    },
    {
        id: '5',
        name: 'Hazqeel',
        title: 'Chief Technology Officer',
        location: 'Malaysia',
        avatar_url: 'https://hazqeelafyq.com/assets/img/profile.png',
        resignation_count: 3,
        created_at: '2024-03-01'
    },
    {
        id: '6',
        name: 'Halim Shukor',
        title: 'Machine Learning Engineer',
        location: 'Malaysia',
        avatar_url: 'https://media.licdn.com/dms/image/v2/D5603AQFJIen-mXWHOA/profile-displayphoto-shrink_400_400/B56ZYo664EGcAg-/0/1744443258594?e=1755734400&v=beta&t=QWm0__gbr258xqUn_MIVpXUQ9P6Qlk8gUFZ5O1wQXFw',
        resignation_count: 0,
        created_at: '2024-03-15'
    },
    {
        id: '7',
        name: 'Haikal Tahar',
        title: 'Frontend Developer',
        location: 'Malaysia',
        avatar_url: 'https://media.licdn.com/dms/image/v2/D5603AQHHtY7MJgLOCA/profile-displayphoto-shrink_400_400/B56ZSsEzmnGsAg-/0/1738053729439?e=1755734400&v=beta&t=a575vvtSXueYiVzvr920pQi37xFLnnt36cNri-UlYnY',
        resignation_count: 1,
        created_at: '2025-03-07'
    },
    {
        id: '8',
        name: 'Rafizi Ramli',
        title: 'Minister of Economy',
        location: 'Malaysia',
        avatar_url: 'https://media.licdn.com/dms/image/v2/D5603AQHEWi7VEL8F1A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712638118571?e=1753920000&v=beta&t=trXI5Hu2iYm_SV2RMoMNgH8gnMMZyIaIIhseJK6r32E',
        resignation_count: 1,
        created_at: '2025-05-28'
    },
    {
        id: '9',
        name: 'Nik Nazmi',
        title: 'Minister of Natural Resources and Environmental Sustainability',
        location: 'Malaysia',
        avatar_url: 'https://media.licdn.com/dms/image/v2/D5603AQERwHrjIfTxhg/profile-displayphoto-shrink_800_800/B56Zb3SpHcGoAg-/0/1747905582861?e=1753920000&v=beta&t=ZXm4BTBmdNcr51jyjZgsQJwQM_V4pOKbCJq3CSV9aEM',
        resignation_count: 1,
        created_at: '2025-05-28'
    },
    {
        id: '10',
        name: 'Nuzul Fikrie',
        title: 'Developer',
        location: 'Malaysia',
        avatar_url: 'https://avatars.githubusercontent.com/u/5245744?v=4',
        resignation_count: 1,
        created_at: '2025-05-21'
    },
    {
        id: '11',
        name: 'Hakim Z',
        title: 'Site Reliability Engineer',
        location: 'Malaysia',
        avatar_url: 'https://i.pinimg.com/736x/78/fa/ed/78faed1c22be1a1a4d46a5738762690e.jpg',
        resignation_count: 1,
        created_at: '2025-07-07'
    }
];

// mock awards data
export const mockAwards: Award[] = [
    {
        id: '1',
        name: 'Speedrunner',
        description: 'Resigned within first week',
        icon: '🏃'
    },
    {
        id: '2',
        name: 'Loyalist',
        description: 'Stayed for more than a year before resigning',
        icon: '👑'
    },
    {
        id: '3',
        name: 'Team Player',
        description: 'Resigned with the whole team',
        icon: '🤝'
    },
    {
        id: '4',
        name: 'Silent Quitter',
        description: 'Left without any drama',
        icon: '🤫'
    },
    {
        id: '5',
        name: 'Serial Resigner',
        description: 'Resigned more than 3 times',
        icon: '🔄'
    },
    {
        id: '6',
        name: 'Fresh Start',
        description: 'Just started their resignation journey',
        icon: '🌱'
    }
];

// mock developer awards data
export const mockDeveloperAwards: DeveloperAward[] = [
    {
        id: '1',
        developer_id: '1',
        award_id: '5', // Serial Resigner for Farhan (4 resignations)
        awarded_at: '2024-03-01T00:00:00Z'
    },
    {
        id: '2',
        developer_id: '2',
        award_id: '5', // Serial Resigner for Ariff (5 resignations)
        awarded_at: '2024-03-01T00:00:00Z'
    },
    {
        id: '3',
        developer_id: '3',
        award_id: '5', // Serial Resigner for Azwan (3 resignations)
        awarded_at: '2024-03-01T00:00:00Z'
    },
    {
        id: '4',
        developer_id: '4',
        award_id: '6', // Fresh Start for KC (1 resignation)
        awarded_at: '2024-03-01T00:00:00Z'
    },
    {
        id: '5',
        developer_id: '5',
        award_id: '6', // Fresh Start for Catqeel (1 resignation)
        awarded_at: '2024-03-01T00:00:00Z'
    },
    {
        id: '6',
        developer_id: '7',
        award_id: '6', // Fresh Start for Haikal (0 resignation)
        awarded_at: '2024-03-01T00:00:00Z'
    }
]; 
