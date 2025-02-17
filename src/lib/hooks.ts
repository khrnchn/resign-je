import { useState } from 'react';
import { Award } from '../types';
import { mockAwards, mockDeveloperAwards, mockDevelopers } from './mockData';

export const useDevelopers = (searchQuery: string = '') => {
    const [developers] = useState(mockDevelopers);
    const [awards] = useState(mockAwards);
    const [developerAwards] = useState(mockDeveloperAwards);

    const getDeveloperAwards = (developerId: string) => {
        const devAwards = developerAwards
            .filter(da => da.developer_id === developerId)
            .map(da => awards.find(a => a.id === da.award_id))
            .filter((award): award is Award => award !== undefined);
        return devAwards;
    };

    const filteredDevelopers = developers.filter(dev =>
        dev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dev.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return {
        developers: filteredDevelopers,
        getDeveloperAwards
    };
}; 