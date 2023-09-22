const x={
    "name": "My App",
    "app_type": "regular_web",
    "is_first_party": true,
    "oidc_conformant": true,
    "jwt_configuration": {
        "alg": "RS256",
        "lifetime_in_seconds": 36000
    },
    "token_endpoint_auth_method": "client_secret_post"
} 
const y={
    "name": "TestApi2 (Test Application)",
    "app_type": "non_interactive",
    "is_first_party": true,
    "oidc_conformant": true,
    "jwt_configuration": {
        "alg": "RS256",
        "lifetime_in_seconds": 36000
    },
    "token_endpoint_auth_method": "client_secret_post",
    "grant_types": ["client_credentials"],
    "samlp": {
        "audience": "org_b7U5xh0fb3QU1jhe",
      },
},

Client Grant={"audience":"https://cdumoymwzh.execute-api.us-east-1.amazonaws.com","client_id":"tXO8UdzQte1WBmH63KtIDtBWuOaFlaFb","scope":[]}