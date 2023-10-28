CREATE USER penguin;

CREATE DATABASE penguin;

GRANT ALL PRIVILEGES ON DATABASE penguin TO penguin;

\c penguin

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = NOW(); RETURN NEW; END; $$ LANGUAGE plpgsql;
