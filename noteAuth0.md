# Next auth0

https://manage.auth0.com/dashboard/us/dev-vobg0icyc3m2vf5z/applications/0Xh4mHTmuZVc0ZXSrPKT9tPz2vuexWw8/quickstart

# 1.Cấu hình Auth0

_cấu hình Callback URLs_
http://localhost:3000/api/auth/callback
_cấu hình Logout URLs_
http://localhost:3000/

# 2.Cài thư viện

npm install @auth0/nextjs-auth0

# 3. Cầu hình SDK

- Trong thư mục gốc của dự án của bạn, hãy thêm tệp `.env.local` với các biến môi trường sau:

1. AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
2. AUTH0_BASE_URL='http://localhost:3000'
3. AUTH0_ISSUER_BASE_URL='https://dev-vobg0icyc3m2vf5z.us.auth0.com'__https://{domain}
4. AUTH0_CLIENT_ID='0Xh4mHTmuZVc0ZXSrPKT9tPz2vuexWw8'\_\_clientID trong setting
5. AUTH0_CLIENT_SECRET='QHgtxkBhg8UI-j1-RSh9oXXwFNQZNU6C3NILHmGYiQOhSvM2qjI1b_mZWy8rLStX'\_\_clientSecret trong setting

kéo thả: react flow
