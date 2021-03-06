CREATE TABLE customers
(
  customer_id INTEGER PRIMARY KEY generated by default AS identity,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone VARCHAR(100),
  email VARCHAR(100),
  street VARCHAR(255),
  city VARCHAR(100),
  zip_code VARCHAR(5)
);

INSERT INTO customers
  (first_name, last_name, phone, email, street, city, zip_code)
  VALUES
    ('Kacie', 'Mckee','5555234', 'kacie.mckee@gmail.com', '61 Shadow Brook Court', 'Melrose, MA', '02176'),
    ('Moses', 'Mcghee', '5554651', 'moses.mcghee@gmail.com', '570 Old York St.', 'Upland, CA', '91784'),
    ('Jerome', 'Aguilar', '5555699', 'jerome.aguilar@yahoo.com', '68 Victoria Road', 'Hoboken, NJ', '07030'),
    ('Ainsley', 'Bonner', '5558564', 'ainsley.bonner@hotmail.com', '60 Winchester Road', 'Dundalk, MD', '21222') ,
    ('Delilah', 'Bateman', '5523124', 'delilah.bateman@gmail.com', '482 E. Oxford St.', 'Thibodaux, LA', '70301');