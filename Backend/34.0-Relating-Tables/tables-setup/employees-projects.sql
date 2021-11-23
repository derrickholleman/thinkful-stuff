CREATE TABLE employees_projects
(
  employee_id INTEGER REFERENCES employees(employee_id),
  project_id INTEGER REFERENCES projects(project_id),
  start_date DATE,
  end_date DATE,
  PRIMARY KEY (employee_id, project_id) -- Composite key means that no two combination can be the same
);

-- Assign employees to projects
INSERT INTO employees_projects
  (employee_id, project_id, start_date, end_date)
  VALUES
    (7, 1, '3/4/2020', '6/1/2020'),
    (6, 2, '11/20/2020', '12/25/2020'),
    (7, 3, '4/6/2020', '4/12/2020'),
    (4, 4, '2/11/2020', '2/15/2020'),
    (7, 4, '2/25/2020', '3/15/2020'),
    (2, 4, '2/11/2020', '2/25/2020'),
    (1, 4, '2/15/2020', '4/12/2020');