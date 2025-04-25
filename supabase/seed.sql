SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.8
-- Dumped by pg_dump version 15.8

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '9446df82-3436-4ed6-8d79-64f0d107ad3a', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"jose@gmail.com","user_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","user_phone":""}}', '2025-03-24 02:51:27.636925+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e0919a23-d8f7-4013-a33e-abdfc12ec92c', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"jose2@gmail.com","user_id":"ff842dbc-a3b4-4648-9349-55de53751460","user_phone":""}}', '2025-03-24 02:51:57.986415+00', ''),
	('00000000-0000-0000-0000-000000000000', '062309a0-0ce8-4b75-a4ae-f7df86cd9f2b', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-03-24 03:19:14.82268+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c1c66c2a-5657-4883-a1b7-737f307e84d7', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-03-26 03:18:32.015144+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fe79cc6a-53cd-4c69-af8c-af6280de3cf8', '{"action":"logout","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-03-26 03:23:31.199009+00', ''),
	('00000000-0000-0000-0000-000000000000', '9a70a9db-f62b-4c41-9b4d-a9f99b5a1cc6', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-03-26 03:23:48.57721+00', ''),
	('00000000-0000-0000-0000-000000000000', '5547b144-f24c-4e73-81fb-7b5ab98cff40', '{"action":"logout","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-03-26 03:23:59.234177+00', ''),
	('00000000-0000-0000-0000-000000000000', '831e7df5-a87e-4e25-a3c5-a821ef7f57ba', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-03-26 03:25:51.30158+00', ''),
	('00000000-0000-0000-0000-000000000000', '3744720d-ddfb-43a4-90f4-bd0b5d5e102c', '{"action":"logout","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-03-26 03:33:54.797498+00', ''),
	('00000000-0000-0000-0000-000000000000', '193a74d3-4653-446e-b0d8-a847bdef4aa8', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-03-26 03:35:05.390628+00', ''),
	('00000000-0000-0000-0000-000000000000', '35020dd0-efab-44ea-b8be-4059f432da37', '{"action":"logout","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-03-26 03:35:08.142715+00', ''),
	('00000000-0000-0000-0000-000000000000', '3271abda-0519-45c0-9893-debd1dbaeb78', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-03-26 03:35:18.212192+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e2c74c43-31fc-4f6c-ae2d-c6d43043a2c4', '{"action":"logout","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-03-26 03:35:36.959332+00', ''),
	('00000000-0000-0000-0000-000000000000', '890ccbbf-de78-4804-a6bb-156d33df69a6', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-03-26 03:37:39.992451+00', ''),
	('00000000-0000-0000-0000-000000000000', '201bc3c7-6493-4408-af4a-218609da03f7', '{"action":"logout","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-03-26 03:37:49.225109+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a90cf24a-3f6e-4360-8e6d-9eeeb8a8dee3', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-03-26 03:38:11.308847+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e8696c75-c1ff-4932-8a82-dfbd85de1cf3', '{"action":"logout","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-03-26 03:38:13.709063+00', ''),
	('00000000-0000-0000-0000-000000000000', '51a93585-da88-454c-b54e-10a3be8bd7da', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-03-26 03:38:14.82365+00', ''),
	('00000000-0000-0000-0000-000000000000', '4e10576c-6aec-48fa-a9ab-04b884b7d59d', '{"action":"logout","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-03-26 03:38:24.625246+00', ''),
	('00000000-0000-0000-0000-000000000000', '140a3397-d390-47ed-9bc5-ca5db178afbb', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-03-26 03:38:25.758768+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b8b52b89-dff6-4481-9761-b606577a2cd0', '{"action":"logout","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-03-26 03:38:26.586669+00', ''),
	('00000000-0000-0000-0000-000000000000', '50c35280-7546-4b39-bd8a-c878c3703461', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-03-26 03:46:30.094189+00', ''),
	('00000000-0000-0000-0000-000000000000', '0dc83ff2-6fa6-4d2a-b236-9775d6955651', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-03-26 03:47:04.196952+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dc548ba9-334d-4b3a-8d5c-51fe270a9317', '{"action":"logout","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-03-26 03:47:18.53967+00', ''),
	('00000000-0000-0000-0000-000000000000', '458b5667-8fcc-4baa-862a-2bee00da9b44', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-03-29 01:25:47.355242+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bc6aec6c-3c80-4ae3-b9f1-576902e80304', '{"action":"logout","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-03-29 01:26:03.187512+00', ''),
	('00000000-0000-0000-0000-000000000000', '5024699f-62fb-4074-995a-27d5cd3f0bae', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-03-29 01:28:02.867576+00', ''),
	('00000000-0000-0000-0000-000000000000', '57bdd130-ec8b-47d5-8d3f-b9bac5f556ee', '{"action":"logout","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-03-29 01:28:04.238493+00', ''),
	('00000000-0000-0000-0000-000000000000', '8f3d0993-6484-4a68-9a11-c60c2de04139', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-03-29 01:33:38.730725+00', ''),
	('00000000-0000-0000-0000-000000000000', '414a2147-64a4-4d66-be13-177550e5f6bc', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-03-29 01:45:40.138056+00', ''),
	('00000000-0000-0000-0000-000000000000', '13b705a4-7470-44b4-b1dc-c3ff7b4e39b2', '{"action":"logout","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-03-29 01:45:59.883095+00', ''),
	('00000000-0000-0000-0000-000000000000', 'eb508c1c-f680-40c7-811f-0053f79406ca', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-22 21:24:49.301159+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fbd33a74-5bef-4abe-b7be-05a9b21074de', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-22 21:39:58.727001+00', ''),
	('00000000-0000-0000-0000-000000000000', '65def57c-964a-48e9-add0-06bc4d92dacd', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-22 21:40:49.618396+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd8825a5f-1837-4265-aea5-2af552bf24f0', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-22 21:43:03.036349+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c55c8538-f8d2-47a6-99fb-66973ac8b3d4', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-04-22 21:44:07.276915+00', ''),
	('00000000-0000-0000-0000-000000000000', '54948481-e535-4881-ab50-accf4705623f', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-22 21:45:19.386433+00', ''),
	('00000000-0000-0000-0000-000000000000', '859ee1c0-2fe5-43a1-9a23-b985fd955697', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-04-22 21:45:23.295528+00', ''),
	('00000000-0000-0000-0000-000000000000', '551b558c-70c7-4546-87a9-bd22a2193b96', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-22 21:47:35.504506+00', ''),
	('00000000-0000-0000-0000-000000000000', '62a170c2-a552-4d20-84ca-f95092d38c7e', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-04-22 21:47:45.79381+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd332aed3-84b4-418a-b708-86442a28f395', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-22 21:50:15.450622+00', ''),
	('00000000-0000-0000-0000-000000000000', '74c5d5c5-2d6b-4090-bda3-f96d4381b0d1', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-04-22 21:50:19.072313+00', ''),
	('00000000-0000-0000-0000-000000000000', 'feac3c3b-5e65-4a46-8ce8-eed4cef0236e', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"magiclink"}}', '2025-04-22 21:50:19.398251+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a370e4ad-f743-4bec-82e6-564eb6b09a59', '{"action":"logout","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-04-22 21:51:04.484031+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c4175952-2d14-4c2e-957b-7adfeeda02fc', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-22 21:51:19.325942+00', ''),
	('00000000-0000-0000-0000-000000000000', '92572a5a-2b2c-4574-84a6-6f875959bb7f', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-04-22 21:51:23.434525+00', ''),
	('00000000-0000-0000-0000-000000000000', '32156330-dacb-459c-a680-f9bcc901ad6c', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"magiclink"}}', '2025-04-22 21:51:23.739376+00', ''),
	('00000000-0000-0000-0000-000000000000', '0c5476b3-f55e-420c-8e9c-485508559e43', '{"action":"token_refreshed","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-04-24 18:44:27.496826+00', ''),
	('00000000-0000-0000-0000-000000000000', '1d89808e-163c-42b2-8db1-137cd6002b7d', '{"action":"token_revoked","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-04-24 18:44:27.499318+00', ''),
	('00000000-0000-0000-0000-000000000000', '8d0a8298-6d09-486b-8804-672f64c9d95e', '{"action":"token_refreshed","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-04-24 18:44:27.543062+00', ''),
	('00000000-0000-0000-0000-000000000000', '0ed677c4-7210-430b-a186-20f14f4e0e3b', '{"action":"logout","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-04-24 18:50:17.794201+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c3440294-0ef3-4bc3-b87f-76c2d560a406', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 18:50:26.946061+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c78812d5-7133-426d-bba1-504bef9c8fb1', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-04-24 18:50:32.082323+00', ''),
	('00000000-0000-0000-0000-000000000000', '27d26991-642e-499f-a52b-5f45205776c7', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"magiclink"}}', '2025-04-24 18:50:32.436126+00', ''),
	('00000000-0000-0000-0000-000000000000', '814801d2-6b8c-4421-9a92-01c2a32868eb', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 18:58:08.323038+00', ''),
	('00000000-0000-0000-0000-000000000000', '51fa7e32-54eb-4bc5-a8b7-860535d5f1a5', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 19:31:53.155647+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b736d667-959a-4b60-b14c-df7da51304d6', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 19:42:05.498255+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fc5a8339-1c88-4f1e-a18b-ed7122b83a50', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 21:38:51.646024+00', ''),
	('00000000-0000-0000-0000-000000000000', '564d952a-6008-48c2-951c-f2b1ce5c4f75', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 21:39:43.976401+00', ''),
	('00000000-0000-0000-0000-000000000000', '082fe6e1-dd41-4e65-b5e3-54241e245e74', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 21:47:05.921679+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e32c6fbd-5603-47e9-b2da-f17e58a0efca', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 21:47:33.434169+00', ''),
	('00000000-0000-0000-0000-000000000000', '072ceda6-2419-4d76-ab13-1bfffdf52ce7', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 21:47:40.690464+00', ''),
	('00000000-0000-0000-0000-000000000000', '58def64b-ee27-4727-ade5-30f0994932c0', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 21:52:19.203623+00', ''),
	('00000000-0000-0000-0000-000000000000', '7a8191e4-5032-4de5-8a47-003b25724778', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 21:52:27.481076+00', ''),
	('00000000-0000-0000-0000-000000000000', '363ed772-4ca0-4b56-ad41-fdd67d28fcfa', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 21:53:36.647268+00', ''),
	('00000000-0000-0000-0000-000000000000', '50b89556-4b22-4b62-84fc-c75aaee0b804', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-04-24 21:54:16.310589+00', ''),
	('00000000-0000-0000-0000-000000000000', '92bf7c68-5b5e-4ead-87eb-5371096e109d', '{"action":"logout","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-04-24 21:54:18.684665+00', ''),
	('00000000-0000-0000-0000-000000000000', '29c68a50-b473-4f4a-b5d3-7aba367cb6d6', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 21:54:22.095066+00', ''),
	('00000000-0000-0000-0000-000000000000', 'eb7f2794-5c9d-44d5-9b0a-b0d5c3695198', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-04-24 21:56:36.466768+00', ''),
	('00000000-0000-0000-0000-000000000000', '09aa6085-9f1b-4ab0-b6e3-56ef1ca3569d', '{"action":"logout","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-04-24 22:02:08.755712+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ac5542a9-9396-4b78-a2d9-21cd79c4707c', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 22:02:25.787007+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd2b63bec-4e39-4eb6-a080-ca099a07b630', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 22:02:52.177096+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ea46fdb3-c798-4c79-ba08-0ee3eac53d61', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 22:05:16.803282+00', ''),
	('00000000-0000-0000-0000-000000000000', '15a43230-d191-4488-bf8e-9989109e701c', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 22:05:35.354908+00', ''),
	('00000000-0000-0000-0000-000000000000', '9cb34e19-6174-4a0d-baa4-99560217bbbb', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 22:06:43.911073+00', ''),
	('00000000-0000-0000-0000-000000000000', '7098df22-2d33-40ac-8c23-bda3a793503d', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 22:07:50.63715+00', ''),
	('00000000-0000-0000-0000-000000000000', '66079644-e470-4744-9cd6-7fc06461c7f6', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-04-24 22:07:56.186698+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b0b5e430-df98-4782-837f-6ef19302ec31', '{"action":"logout","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-04-24 22:08:18.451079+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a3b73770-ddf1-4f89-a092-abe3aa988ca0', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 22:08:25.118205+00', ''),
	('00000000-0000-0000-0000-000000000000', 'da273009-21cd-419f-b90c-d98a1feecafd', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 22:14:24.876802+00', ''),
	('00000000-0000-0000-0000-000000000000', '86717078-e453-423b-ade7-ba9206e0b374', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 22:14:56.44423+00', ''),
	('00000000-0000-0000-0000-000000000000', '61d68246-5d2b-40a0-88ed-dcd1ec9106e2', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-04-24 22:15:01.285612+00', ''),
	('00000000-0000-0000-0000-000000000000', '1da8f89e-c603-49fd-87f8-0a8e063bcf88', '{"action":"logout","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-04-24 22:15:35.812331+00', ''),
	('00000000-0000-0000-0000-000000000000', '9faf8b86-3512-43a1-8cdd-835dd1f9e22b', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 22:15:45.2405+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd2ef4d1a-3020-470a-8009-8e4d59b138d4', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 22:16:18.049251+00', ''),
	('00000000-0000-0000-0000-000000000000', '3ee4e641-bc57-483b-b5b7-a1d0bc3d2226', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 22:18:00.552028+00', ''),
	('00000000-0000-0000-0000-000000000000', '751856e9-4e1e-406d-99a8-f931a5910e12', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 22:18:25.356775+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f5eea599-e605-4d58-bc26-6115b3e576ca', '{"action":"user_recovery_requested","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-04-24 22:19:51.502518+00', ''),
	('00000000-0000-0000-0000-000000000000', '51052f30-dbb2-4d45-ab52-713331ed5b8c', '{"action":"login","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-04-24 22:20:01.514635+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f140a9e8-ddd5-4a84-8010-61b35b2652a0', '{"action":"token_refreshed","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-04-24 23:55:27.638631+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f51d448a-f52f-45ae-8533-0ddab009c30e', '{"action":"token_revoked","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-04-24 23:55:27.721697+00', ''),
	('00000000-0000-0000-0000-000000000000', '9c2209a0-2ba5-4826-93fd-9a906afdb709', '{"action":"token_refreshed","actor_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","actor_username":"jose@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-04-24 23:55:30.172746+00', ''),
	('00000000-0000-0000-0000-000000000000', '739146b7-4516-4ebc-b3a7-5e9636ec0fe9', '{"action":"user_deleted","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"jose@gmail.com","user_id":"e86b8726-ef08-4c47-91fd-a18e58c687e9","user_phone":""}}', '2025-04-25 16:09:06.566902+00', ''),
	('00000000-0000-0000-0000-000000000000', '3639c46c-915e-43c9-8807-84162633c2cc', '{"action":"user_deleted","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"jose2@gmail.com","user_id":"ff842dbc-a3b4-4648-9349-55de53751460","user_phone":""}}', '2025-04-25 16:09:06.566794+00', ''),
	('00000000-0000-0000-0000-000000000000', '8c7a04c3-4b08-4148-810d-d43cae256cd6', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"jose@gmail.com","user_id":"5211585d-ebc5-4848-9446-2d55eff8a5a9","user_phone":""}}', '2025-04-25 16:09:18.399474+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."flow_state" ("id", "user_id", "auth_code", "code_challenge_method", "code_challenge", "provider_type", "provider_access_token", "provider_refresh_token", "created_at", "updated_at", "authentication_method", "auth_code_issued_at") VALUES
	('fbe756b4-3b3e-4e55-846a-15062b898d49', 'e86b8726-ef08-4c47-91fd-a18e58c687e9', '56b6876f-6b70-46d8-a48d-ff9ef59a08ab', 's256', 'RLO4sv_XlkRSqk90oS5F15iqCjSX6jnt2egqGO-c-p0', 'magiclink', '', '', '2025-04-22 21:24:49.296537+00', '2025-04-22 21:24:49.296537+00', 'magiclink', NULL),
	('e983c526-68c4-4d29-9645-7a1261955a50', 'e86b8726-ef08-4c47-91fd-a18e58c687e9', 'abb0e0af-d5ed-4024-9648-bcb4986e6107', 's256', 'Zgd2HZflCBjeinNODN6y0YlqCl9Dln6BHNmCdgaZ9zs', 'magiclink', '', '', '2025-04-22 21:39:58.724638+00', '2025-04-22 21:39:58.724638+00', 'magiclink', NULL),
	('83a0cd8e-a9ec-4cfc-9046-a5417992d263', 'e86b8726-ef08-4c47-91fd-a18e58c687e9', '465749c1-9bdd-4ae0-b3b6-b9a757411dc1', 's256', 'jvCGz9mhTnbpJyFDK27etDXxARnt_IZx1xIZlIxzeCk', 'magiclink', '', '', '2025-04-22 21:40:49.616881+00', '2025-04-22 21:40:49.616881+00', 'magiclink', NULL),
	('892e1312-ac89-45d4-95ca-481925b170df', 'e86b8726-ef08-4c47-91fd-a18e58c687e9', 'e8accf24-8019-46d7-9aba-de8f2592bc06', 's256', 'uKGHFjYiLGJVa5WtFNX9WsfI1pMaf6D0IaJ_7R1MQwM', 'magiclink', '', '', '2025-04-22 21:43:03.034032+00', '2025-04-22 21:44:07.280114+00', 'magiclink', '2025-04-22 21:44:07.280089+00'),
	('3ce7a5e1-af1b-4493-b94b-3674ddfd966e', 'e86b8726-ef08-4c47-91fd-a18e58c687e9', '814b8bbc-4683-4a7b-8fb3-91d5dc0984c3', 's256', 'AzLxsBpAkXuot1qlKbVrXBv7mrWWxIrRw1auZv8qafk', 'magiclink', '', '', '2025-04-22 21:45:19.383753+00', '2025-04-22 21:45:23.297939+00', 'magiclink', '2025-04-22 21:45:23.2979+00'),
	('d73e1af8-1591-485e-bf7a-19af615c4046', 'e86b8726-ef08-4c47-91fd-a18e58c687e9', '324b9a66-161c-4a00-9be8-410ee192914c', 's256', '0ZIk644Jkt2GkV03QNvls7-jot_LlhyNwgCBQ0YQgAM', 'magiclink', '', '', '2025-04-22 21:47:35.502083+00', '2025-04-22 21:47:45.795383+00', 'magiclink', '2025-04-22 21:47:45.795358+00'),
	('8adada67-fcf9-45f8-bfcf-688cf229e851', 'e86b8726-ef08-4c47-91fd-a18e58c687e9', 'fbda7351-3c50-488b-8c73-27971e0525eb', 's256', '7F9L_6OTcwCQc3nm5YCWBVX3jyvQx1-tcLsSOvQ7a5w', 'magiclink', '', '', '2025-04-24 18:58:08.320933+00', '2025-04-24 18:58:08.320933+00', 'magiclink', NULL);


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '5211585d-ebc5-4848-9446-2d55eff8a5a9', 'authenticated', 'authenticated', 'jose@gmail.com', '$2a$10$JHDnCkvSyR8WdpmPHCHf2.wg/DdUEJFKSrpmRnFeH4jh9J7933iUi', '2025-04-25 16:09:18.400536+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{"email_verified": true}', NULL, '2025-04-25 16:09:18.394419+00', '2025-04-25 16:09:18.403001+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('5211585d-ebc5-4848-9446-2d55eff8a5a9', '5211585d-ebc5-4848-9446-2d55eff8a5a9', '{"sub": "5211585d-ebc5-4848-9446-2d55eff8a5a9", "email": "jose@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2025-04-25 16:09:18.398697+00', '2025-04-25 16:09:18.398734+00', '2025-04-25 16:09:18.398734+00', 'abbfae0c-8600-4b48-afea-cfd8f06f6ed3');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: service_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."service_users" ("id", "created_at", "supabase_user", "full_name") VALUES
	(1, '2025-04-25 16:12:40.009123+00', '5211585d-ebc5-4848-9446-2d55eff8a5a9', 'Jose X');


--
-- Data for Name: tenants; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenants" ("id", "created_at", "name", "domain") VALUES
	('packt', '2025-04-25 15:54:27.643178+00', 'packt pub', 'packt.local'),
	('activenode

', '2025-04-25 15:55:42.059028+00', 'activenode Education', 'activenode.learn'),
	('oddmonkey', '2025-04-25 15:55:56.12333+00', 'OddMonkey Inc', 'oddmonkey.inc');


--
-- Data for Name: tenant_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenant_permissions" ("id", "created_at", "service_user", "tenant") VALUES
	(1, '2025-04-25 20:51:51.587102+00', 1, 'packt'),
	(2, '2025-04-25 20:53:09.512398+00', 1, 'oddmonkey');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: prefixes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 26, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: service_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."service_users_id_seq"', 1, true);


--
-- Name: tenant_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."tenant_permissions_id_seq"', 2, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
