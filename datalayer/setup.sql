  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  DROP TABLE IF EXISTS user_things;
  DROP TABLE IF EXISTS users;
  DROP TABLE IF EXISTS things;

  CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
    name VARCHAR NOT NULL CHECK(char_length(name) > 1)
  );
  
  CREATE TABLE things (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL CHECK(char_length(name) > 1)
  );
  
  CREATE TABLE user_things (
    user_things_id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
    "userId" UUID NOT NULL REFERENCES users(id),
    "thingId" UUID NOT NULL REFERENCES things(id)
  );