CREATE TABLE IF NOT EXISTS data
(
id serial,
name VARCHAR(20),
instructor VARCHAR(25),
start_date serial,
end_date serial,
PRIMARY KEY(id,start_date,end_date)
);