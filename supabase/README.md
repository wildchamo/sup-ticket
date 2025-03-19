# Contenedor para correr Supabase de forma local

Para iniciar Supabase localmente, solo es necesario ejecutar el siguiente comando con Docker activo en tu máquina:

```sh
npx supabase start
```

Este comando te devolverá un objeto con las siguientes URLs para conectar con Supabase localmente:

API URL: <http://127.0.0.1:54321>
GraphQL URL: <http://127.0.0.1:54321/graphql/v1>
S3 Storage URL: <http://127.0.0.1:54321/storage/v1/s3>
DB URL: postgresql://postgres:postgres@127.0.0.1:54322/postgres
Studio URL: <http://127.0.0.1:54323>
Inbucket URL: <http://127.0.0.1:54324>

Además, se generarán las siguientes claves y tokens:

anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0
service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU
S3 Access Key: 625729a08b95bf1b7ff351a663f3a23c
S3 Secret Key: 850181e4652dd023b7a98c58ae0d2d34bd487ee0cc3254aed6eda37307425907
S3 Region: local

O algo muy parecido a ellas!
