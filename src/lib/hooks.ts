import { useEffect } from 'react';
import { Award } from '../types';
import { mockAwards, mockDeveloperAwards, mockDevelopers } from './mockData';
import { updateMetadata } from './metadata';

export const useDevelopers = (searchQuery: string = '') => {
    const getDeveloperAwards = (developerId: string) =>
        mockDeveloperAwards
            .filter(da => da.developer_id === developerId)
            .map(da => mockAwards.find(a => a.id === da.award_id))
            .filter((award): award is Award => award !== undefined);

    const query = searchQuery.toLowerCase();
    const developers = mockDevelopers.filter(dev =>
        dev.name.toLowerCase().includes(query) ||
        dev.title.toLowerCase().includes(query) ||
        dev.location.toLowerCase().includes(query)
    );

    return { developers, getDeveloperAwards };
};

export const useMetadata = (path: string) => {
    useEffect(() => {
        updateMetadata(path);
    }, [path]);
};
