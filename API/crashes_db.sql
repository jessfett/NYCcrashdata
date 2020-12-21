-- Drop table if exists
DROP TABLE crashes_2020;

-- Drop table if exists
DROP TABLE crash_count;

-- Drop table if exists
DROP TABLE crash_impact;

-- Create new table
CREATE TABLE crashes_2020 (
	CrashDate DATE NOT NULL,
	CrashTime TIME,
	Borough VARCHAR,
	Latitude NUMERIC, 
	Longitude NUMERIC,
	PeronsInjured INT,
	PersonsKilled INT,
	PedestriansInjured INT,
	PedestriansKilled INT,
	CyclistInjured INT, 
	CyclistKilled INT,
	MotoristInjured INT,
	MotoristKilled INT,
	ContributingFactor VARCHAR, 
	CollisionID INT,
	VehicleType VARCHAR
	)
	
-- Create new table
CREATE TABLE crash_count (
	Borough VARCHAR PRIMARY KEY,
	CrashCount INT
)
	
-- Create new table
CREATE TABLE crash_impact (
	Borough VARCHAR PRIMARY KEY,
	PersonsInjured INT,
	PersonsKilled INT,
	PedestriansInjured INT,
	PedestriansKilled INT,
	CyclistInjured INT,
	CyclistKilled INT,
	MotoristInjured INT,
	MotoristKilled INT
)
	
	
	