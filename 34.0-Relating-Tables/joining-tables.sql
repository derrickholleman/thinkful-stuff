SELECT *
FROM departments
  JOIN employees
  ON departments.manager = employees.employee_id;

-- The ON clause states that the data from table2 should only be pulled in where it has a relationship to the data from table1.  so only return department manager that matches the employee_id

-- List the order statuses, order dates, first names, and emails of all Thinkful Books customers
select 
 	o.order_status,
 	o.order_date,
 	c.first_name as customer_name,
 	c.email
from 
orders o join customers c 
on o.order_id = c.customer_id 

-- List the order dates, first and last names, and phone numbers of Thinkful Books customers with rejected orders (order_status = 3)
select 
 	c.first_name,
 	c.last_name,
 	c.phone,
 	o.order_date
from 
customers c join orders o 
on c.customer_id = o.customer_id 
where order_status = 3

-- List the employee's first and last names and the employees' project names.  join three tables, starting out with the one they have in common
select 
	e.first_name,
	e.last_name,
	p.project_name
from 
	employees e 
	join employees_projects ep 
	on e.employee_id = ep.employee_id 
	join projects p 
	on p.project_id = ep.project_id