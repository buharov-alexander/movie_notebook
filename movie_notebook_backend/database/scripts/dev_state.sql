-- Create root user (root/abcd)
INSERT INTO "public"."users" ("id", "username", "password", "email", "enabled", "role") VALUES (1, 'root', '$2a$10$yN2pc/5.2Rf5vXmgpNdFteR5zD0/CPZyMkVG0uajiTvY8a3N1fLae', 'root@mail.ru', true, 'ADMIN');
-- Create test user (test/abcd)
INSERT INTO "public"."users" ("id", "username", "password", "email", "enabled", "role") VALUES (2, 'test', '$2a$10$yN2pc/5.2Rf5vXmgpNdFteR5zD0/CPZyMkVG0uajiTvY8a3N1fLae', 'test@mail.ru', true, 'USER');