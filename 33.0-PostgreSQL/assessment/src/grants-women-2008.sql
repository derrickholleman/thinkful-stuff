select sum(amount)
from grants 
where to_char(fiscal_year, 'YYYY') = '2008' 
and applicant_name like '%Women%'