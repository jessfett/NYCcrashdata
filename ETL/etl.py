import pandas as pd
import csv
from sqlalchemy import create_engine
import os
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
import numpy as np

DATABASE_URL = os.environ["DATABASE_URL"]
engine = create_engine(DATABASE_URL)

file_one = "ETL/Data/April_Motorvehicles.csv" 

crashes2020 = pd.read_csv(file_one, encoding="ISO-8859-1") 

crashes2020.head()

del crashes2020['ON STREET NAME']
del crashes2020['CROSS STREET NAME']
del crashes2020['OFF STREET NAME']
del crashes2020['CONTRIBUTING FACTOR VEHICLE 3']
del crashes2020['CONTRIBUTING FACTOR VEHICLE 4']
del crashes2020['CONTRIBUTING FACTOR VEHICLE 5']
del crashes2020['VEHICLE TYPE CODE 3']
del crashes2020['VEHICLE TYPE CODE 4']
del crashes2020['VEHICLE TYPE CODE 5']

crashes2020

crashes2020 = crashes2020[crashes2020['BOROUGH'].notna()]
crashes2020 = crashes2020[crashes2020['LATITUDE'].notna()]
crashes2020 = crashes2020[crashes2020['LONGITUDE'].notna()]

crashes2020

del crashes2020['CONTRIBUTING FACTOR VEHICLE 2']
del crashes2020['VEHICLE TYPE CODE 2']

crashes2020_df = crashes2020.rename(columns={"CRASH DATE":"crashdate", "CRASH TIME": "crashtime", "ZIP CODE": "zipcode",
                                            "NUMBER OF PERSONS INJURED": "personsinjured", "NUMBER OF PERSONS KILLED": "personskilled",
                                            "NUMBER OF PEDESTRIANS INJURED": "pedestriansinjured", "NUMBER OF PEDESTRIANS KILLED": "pedestrianskilled", 
                                            "NUMBER OF CYCLIST INJURED": "cyclistinjured", "NUMBER OF CYCLIST KILLED": "cyclistkilled",
                                            "NUMBER OF MOTORIST INJURED": "motoristinjured", "NUMBER OF MOTORIST KILLED": "motoristkilled",
                                            "CONTRIBUTING FACTOR VEHICLE 1": "contributingfactor", "VEHICLE TYPE CODE 1": "vehicletype"})


crashes2020_df

crashes2020_df = crashes2020_df.rename(columns={"BOROUGH":"borough", "LATITUDE": "latitude", "LONGITUDE": "longitude", 
                                                "LOCATION": "location", "COLLISION_ID": "collisionid"})

crashes2020_df

del crashes2020_df['location']

crashes2020_df["crashdate"] = pd.to_datetime(crashes2020_df["crashdate"]).dt.strftime('%Y-%m-%d')
print(crashes2020_df)

crashes2020_df.head()

del crashes2020_df['zipcode']

crashes2020_df

crashes2020_df=crashes2020_df.round({'latitude': 4, 'longitude': 4})

crashes2020_df

# crashes2020_df.to_csv("Data/NYC2020crashes.csv", index=False, header=True)

# crashes2020_df.to_json(r'Path to store the exported JSON file\File Name.json')

crashes2020_df

crash_count = crashes2020_df.groupby(['borough']).count()
crash_count

crash_count = crash_count.rename(columns={"crashdate": "crashcount"})

del crash_count['crashtime']
del crash_count['latitude']
del crash_count['longitude']
del crash_count['personsinjured']
del crash_count['personskilled']
del crash_count['pedestriansinjured']
del crash_count['pedestrianskilled']
del crash_count['cyclistinjured']
del crash_count['cyclistkilled']
del crash_count['motoristinjured']
del crash_count['motoristkilled']
del crash_count['contributingfactor']
del crash_count['collisionid']
del crash_count['vehicletype']

crashcount = crash_count.reset_index()

# crashcount.to_csv("Data/CrashCount.csv", index=False, header=True)

crash_impact = crashes2020_df.groupby(['borough']).sum()
crash_impact

del crash_impact['latitude']
del crash_impact['longitude']
del crash_impact['collisionid']

crashimpact = crash_impact.reset_index()

#crashimpact.to_csv("ETL/Data/CrashImpacts.csv", index=False, header=True)

# sqlalchemy will not detect table without PK. This seems to be the best solution (https://stackoverflow.com/q/50469391)
crashcount.to_sql("crash_count", engine, if_exists='replace') 
# engine.execute(f'ALTER TABLE crash_count ADD PRIMARY KEY (borough);')

crashimpact.to_sql("crash_impact", engine, if_exists='replace') 
# engine.execute(f'ALTER TABLE crash_impact ADD PRIMARY KEY (policy_number);')

# crashes2020_df.to_sql("crashes_2020", engine, if_exists='replace') 
# engine.execute(f'ALTER TABLE crashes_2020 ADD PRIMARY KEY (policy_number);')