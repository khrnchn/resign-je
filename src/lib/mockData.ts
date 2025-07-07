import { Developer, Award, DeveloperAward } from '../types';

// mock developers data
export const mockDevelopers: Developer[] = [
    {
        id: '1',
        name: 'Farhan Helmy',
        title: 'Software Engineer',
        location: 'Malaysia',
        avatar_url: 'https://media.licdn.com/dms/image/v2/D5603AQE3SpKuOBIBaQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731686302044?e=1745452800&v=beta&t=w2l8Rvh7K5z4_VbMe6JGJmANnibEr4HkvW5_MNL8zhY',
        resignation_count: 4,
        created_at: '2024-01-01'
    },
    {
        id: '2',
        name: 'Ariff Nazhan',
        title: 'Machine Learning Engineer',
        location: 'Malaysia',
        avatar_url: 'https://media.licdn.com/dms/image/v2/D5603AQGLyoafFZPO5Q/profile-displayphoto-shrink_400_400/B56ZOuTVuTGgAk-/0/1733796125967?e=1745452800&v=beta&t=RxVckrNO71Lx4-76H5tq_wocNmAO2h0Bn50mX_sZqGA',
        resignation_count: 4,
        created_at: '2024-01-15'
    },
    {
        id: '3',
        name: 'Azwan',
        title: 'Senior Data Engineer',
        location: 'Malaysia',
        avatar_url: 'https://media.licdn.com/dms/image/v2/D5603AQFuh-wY3vCAWw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1705242889127?e=1745452800&v=beta&t=E__vk32xsgqRPJLiYwafzsmyrMZgOmeEBSAz6A9L1Zw',
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
        name: 'Catqeel',
        title: 'AI Engineer',
        location: 'Malaysia',
        avatar_url: 'https://media.licdn.com/dms/image/v2/D5603AQFRDBNcRVWYBQ/profile-displayphoto-shrink_800_800/B56ZUpMoerHsAc-/0/1740152932958?e=1746662400&v=beta&t=4-v_lTebUKyfP2k1o3DwWVjFhifaP6TMMRipNBQW8OM',
        resignation_count: 2,
        created_at: '2024-03-01'
    },
    {
        id: '6',
        name: 'Halim Shukor',
        title: 'Machine Learning Engineer',
        location: 'Malaysia',
        avatar_url: 'https://media.licdn.com/dms/image/v2/D5603AQH8iMXw7q9N-w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724582694562?e=1745452800&v=beta&t=5b9onEHNQu5sbjwaHCx97iXrcfREspDyK0_eU6Fcehw',
        resignation_count: 0,
        created_at: '2024-03-15'
    },
    {
        id: '7',
        name: 'Haikal Tahar',
        title: 'Frontend Developer',
        location: 'Malaysia',
        avatar_url: 'https://media.licdn.com/dms/image/v2/D5603AQHHtY7MJgLOCA/profile-displayphoto-shrink_800_800/B56ZSsEzmnGsAc-/0/1738053729439?e=1746662400&v=beta&t=yXuo8843a_pNXc0sQQm3PKPvMVS4BQZbviGcxbUyYgY',
        resignation_count: 0,
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
