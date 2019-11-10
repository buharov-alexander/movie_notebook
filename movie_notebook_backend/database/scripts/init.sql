CREATE SEQUENCE public.id_seq
  START WITH 1000
  INCREMENT BY 1
  NO MINVALUE
  NO MAXVALUE
  CACHE 1;

CREATE TABLE public.users
(
  id integer NOT NULL DEFAULT nextval('id_seq'::regclass),
  username character varying(80) NOT NULL,
  password character varying(300) NOT NULL,
  email character varying(80) NOT NULL,
  enabled boolean NOT NULL,
  CONSTRAINT users_pkey1 PRIMARY KEY (id),
  CONSTRAINT unique_username UNIQUE (username)
);