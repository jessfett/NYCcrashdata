DB_HOST = ""
DB_NAME = ""
DB_USER = ""
DB_PASS = ""

import psycopg2

psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST)