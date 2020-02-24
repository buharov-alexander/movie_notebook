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

-- Movies
CREATE TABLE public.movies (
    id integer DEFAULT nextval('public.id_seq'::regclass) NOT NULL,
    tmdb_id integer,
    user_id integer NOT NULL,
    title character varying(80),
    original_title character varying(80),
    description text,
    poster_path character varying(80),
    CONSTRAINT movies_pkey PRIMARY KEY (id),
    CONSTRAINT movies_tmdb_id_unique UNIQUE (tmdb_id),
    CONSTRAINT movies_user_id_fkey1 FOREIGN KEY (user_id)
      REFERENCES public.users (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
);

-- Create root user (root/abcd)
INSERT INTO "public"."users" ("id", "username", "password", "email", "enabled", "role") VALUES (1, 'root', '$2a$10$yN2pc/5.2Rf5vXmgpNdFteR5zD0/CPZyMkVG0uajiTvY8a3N1fLae', 'root@mail.ru', true, 'ADMIN');
