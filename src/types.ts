export interface Developer {
  id: string;
  name: string;
  title: string;
  location: string;
  avatar_url: string;
  resignation_count: number;
  created_at: string;
}

export interface Award {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface DeveloperAward {
  id: string;
  developer_id: string;
  award_id: string;
  awarded_at: string;
}