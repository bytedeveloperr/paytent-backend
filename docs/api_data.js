define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login a new user",
    "version": "1.0.0",
    "name": "Login_a_new_user",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the user</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User loggedin</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response",
          "content": "HTTPS 200 OK\n{\n\t \"success\": true,\n\t \"message\": \"User loggedin\",\n  \"data\": { \"accessToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM1MjJiZDM0OWNmZTMzOGQzYTgzMDQiLCJuYW1lIjoiQWJkdWxyYWhtYW4iLCJlbWFpbCI6ImFiZHVscmFobWFueXVzdWYxMjZAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2MDY3ODQ2MjEsImV4cCI6MTYwNzA0MzgyMX0.L6fwqDCHh4po4FLudbgwI106ZomqOuE_LXmKUZPNx0Y\" },\n\t \"status\": 200\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Example",
          "content": "HTTPS 400 Bad Request\n{\n\t \"success\": false,\n  \"message\": \"The request you sent to the server was bad\",\n\t \"data\": { \"error\": \"Email does not exist\" },\n\t \"status\": 400\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/auth.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "Register a new user",
    "version": "1.0.0",
    "name": "Register_a_new_user",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The full name of the user</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the user</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User registered</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response",
          "content": "HTTPS 201 Created\n{\n\t \"success\": true,\n\t \"message\": \"User registered\",\n  \"data\": { \"accessToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM1MjJiZDM0OWNmZTMzOGQzYTgzMDQiLCJuYW1lIjoiQWJkdWxyYWhtYW4iLCJlbWFpbCI6ImFiZHVscmFobWFueXVzdWYxMjZAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2MDY3ODQ2MjEsImV4cCI6MTYwNzA0MzgyMX0.L6fwqDCHh4po4FLudbgwI106ZomqOuE_LXmKUZPNx0Y\" },\n\t \"status\": 201\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Example",
          "content": "HTTPS 400 Bad Request\n{\n\t \"success\": false,\n  \"message\": \"The request you sent to the server was bad\",\n\t \"data\": { \"error\": \"Email already registered\" },\n\t \"status\": 400\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/auth.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/dashboard",
    "title": "Load user dashboard",
    "version": "1.0.0",
    "name": "Load_user_dashboard",
    "group": "Dashboard",
    "description": "<p>This endpoint returns the details of a user dashboard, you do not need any parameter to get the user dashboard detais. You only need the authorization header pointing to the token that contains the user details</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Access Token that contains the user details</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Dashboard loaded</p>"
          }
        ]
      }
    },
    "filename": "src/routes/dashboard.js",
    "groupTitle": "Dashboard"
  },
  {
    "type": "post",
    "url": "/wallets/create",
    "title": "Create a new wallet",
    "version": "1.0.0",
    "name": "Create_a_new_wallet",
    "group": "Wallet",
    "description": "<p>This endpoint creates a wallet and returns the details. You only need the authorization header pointing to the token that contains the wallet owner details</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Wallet</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>The wallet identifier e.g #wallet-name</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Access Token that contains the user details</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Wallet created</p>"
          }
        ]
      }
    },
    "filename": "src/routes/wallet.js",
    "groupTitle": "Wallet"
  }
] });
