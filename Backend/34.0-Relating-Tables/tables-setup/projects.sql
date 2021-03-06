CREATE TABLE projects
(
  project_id INTEGER PRIMARY KEY generated by default AS identity,
  project_name VARCHAR(255) NOT NULL,
  budget NUMERIC DEFAULT 0,
  start_date DATE,
  end_date DATE
);

INSERT INTO projects
  (project_name, budget, start_date)
  VALUES
    ('Build Database', 20000, '3/4/2020'),
    ('Plan christmas party', 500, '11/20/2020'),
    ('Remove old stock', 1000, '4/6/2020'),
    ('Watch paint dry', 3000, '2/11/2020');