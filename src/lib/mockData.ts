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
        title: 'Software Engineer',
        location: 'Malaysia',
        avatar_url: 'https://media.licdn.com/dms/image/v2/D5603AQGLyoafFZPO5Q/profile-displayphoto-shrink_400_400/B56ZOuTVuTGgAk-/0/1733796125967?e=1745452800&v=beta&t=RxVckrNO71Lx4-76H5tq_wocNmAO2h0Bn50mX_sZqGA',
        resignation_count: 5,
        created_at: '2024-01-15'
    },
    {
        id: '3',
        name: 'Azwan',
        title: 'Software Engineer',
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
        title: 'Software Engineer',
        location: 'Malaysia',
        avatar_url: 'https://media.licdn.com/dms/image/v2/C5103AQEK823gfleTdQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1576129961129?e=1745452800&v=beta&t=d1gtAFCi3XupWhrVcrIas10r19-jVR3_iZiS7mq7z80',
        resignation_count: 1,
        created_at: '2024-03-01'
    },
    {
        id: '6',
        name: 'Halim Shukor',
        title: 'Software Engineer',
        location: 'Malaysia',
        avatar_url: 'https://media.licdn.com/dms/image/v2/D5603AQH8iMXw7q9N-w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724582694562?e=1745452800&v=beta&t=5b9onEHNQu5sbjwaHCx97iXrcfREspDyK0_eU6Fcehw',
        resignation_count: 0,
        created_at: '2024-03-15'
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
    }
]; 