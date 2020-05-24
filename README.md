# deno-jwt-sample

### Original link:
https://github.com/thecodeholic/deno-jwt-auth-example/blob/8a0d323236d98f668c5f9d21577795a32059480d/authMiddleware.ts

### Video
https://www.youtube.com/watch?v=2Skms0gkUXk


## Useful commands

**1. Running app locally**
```  
deno run --allow-net server.ts
```

**2. Getting jwt token**
```
curl -H "Content-Type: application/json" --request POST  --data '{"username":"{username}","password":"{password}"}' http://{host}:{port}/login
```

**3. Authenticating**
```
curl -H 'Accept: application/json' -H "Authorization: Bearer ${TOKEN}" https://{hostname}/auth
```