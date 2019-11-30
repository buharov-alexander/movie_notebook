CREATE SEQUENCE public.id_seq
  START WITH 1000
  INCREMENT BY 1
  NO MINVALUE
  NO MAXVALUE
  CACHE 1;

-- Users
CREATE TABLE public.users
(
  id integer NOT NULL DEFAULT nextval('id_seq'::regclass),
  username character varying(80) NOT NULL,
  password character varying(300) NOT NULL,
  email character varying(80) NOT NULL,
  enabled boolean NOT NULL,
  role character varying(40) NOT NULL,
  CONSTRAINT users_pkey1 PRIMARY KEY (id),
  CONSTRAINT unique_username UNIQUE (username)
);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


-- Movies
CREATE TABLE public.movies (
    id integer DEFAULT nextval('public.id_seq'::regclass) NOT NULL,
    tmdb_id integer,
    title character varying(80),
    original_title character varying(80),
    description text,
    poster_path character varying(80)
);

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_tmdb_id_unique UNIQUE (tmdb_id);
