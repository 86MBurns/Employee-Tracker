-- need seeds for employee, role, department
INSERT INTO employee (first_name, last_name)(
    VALUES
    ('John', 'Doe'),
    ('Billy', 'Bob'),
    ('Sally', 'Tilly'),
    ('Bobert', 'Restinstine')
);

INSERT INTO role (title, salary)(
    ('Sales Manager', 60000),
    ('Sales Rep.', 30000),
    ('Engineer', 110000),
    ('Engineer Intern', 65000),
);

INSERT INTO department(name)(
    ('Sales'),
    ('Engineering')
);

