-- List all department names at Thinkful Books and their corresponding managers if they have a manager
-- left join gets all data on left side, regardless of match on right side
select
	d.department_name,
	e.first_name,
	e.last_name
from
	departments d left join employees e
on
	e.employee_id = d.manager 

-- list ALL employee names and name of department if they're a manager
select 
	e.first_name,
	e.last_name,
	d.department_name
from
	departments d right join employees e 
on
	d.manager = e.employee_id 

-- FULL JOIN returns all rows where there is a match in the left table or the right table
-- List all departments and all employees
select 
	e.first_name,
	e.last_name,
	d.department_name
from
	employees e full join departments d 
on
	e.employee_id = d.manager