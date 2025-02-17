/*
  # Initial schema for Resigned Developers

  1. New Tables
    - `developers`
      - `id` (uuid, primary key)
      - `name` (text)
      - `title` (text)
      - `location` (text)
      - `avatar_url` (text)
      - `resignation_count` (integer)
      - `created_at` (timestamp)
    
    - `awards`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `icon` (text)
      - `created_at` (timestamp)
    
    - `developer_awards`
      - `id` (uuid, primary key)
      - `developer_id` (uuid, foreign key)
      - `award_id` (uuid, foreign key)
      - `awarded_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create developers table
CREATE TABLE developers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  title text NOT NULL,
  location text NOT NULL,
  avatar_url text NOT NULL,
  resignation_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create awards table
CREATE TABLE awards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create developer_awards junction table
CREATE TABLE developer_awards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  developer_id uuid REFERENCES developers(id) ON DELETE CASCADE,
  award_id uuid REFERENCES awards(id) ON DELETE CASCADE,
  awarded_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE developers ENABLE ROW LEVEL SECURITY;
ALTER TABLE awards ENABLE ROW LEVEL SECURITY;
ALTER TABLE developer_awards ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow read access to developers"
  ON developers
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow read access to awards"
  ON awards
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow read access to developer_awards"
  ON developer_awards
  FOR SELECT
  TO authenticated
  USING (true);

-- Insert some sample awards
INSERT INTO awards (name, description, icon) VALUES
  ('Loyalist', 'Stayed at a company for over 5 years before resigning', '🏆'),
  ('Speedrunner', 'Resigned within the first month', '🏃'),
  ('Legend', 'Has resigned from more than 10 companies', '👑'),
  ('Chain Breaker', 'Resigned from 3 companies in the same year', '⛓️'),
  ('Phoenix', 'Returned to a company after resigning', '🦅');