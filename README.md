# Show Search API

A REST API that returns JSON data about a single show.

It is built using [Typescript](https://www.typescriptlang.org/) and uses [The Movie Database](https://www.themoviedb.org/) API.

[Try it out here](https://reqbin.com/).

- **URL:**

  /search

- **Method:**

  `POST`

- **Success Response:**

  - **Code:** 200 - Success

    **Content:**

    ```json
    {
    	"show": "blue bloods",
    	"total_results": 1,
    	"results": [
    		{
    			"original_name": "Blue Bloods",
    			"genre_ids": [80, 18],
    			"name": "Blue Bloods",
    			"popularity": 80.627,
    			"origin_country": ["US"],
    			"vote_count": 337,
    			"first_air_date": "2010-09-24",
    			"backdrop_path": "/jKyyvxBFpss1Ww0bIUQvDqQqIAI.jpg",
    			"original_language": "en",
    			"id": 32692,
    			"vote_average": 7.3,
    			"overview": "A drama about a multi-generational family of cops dedicated to New York City law enforcement. Frank Reagan is the New York Police Commissioner and heads both the police force and the Reagan brood. He runs his department as diplomatically as he runs his family, even when dealing with the politics that plagued his unapologetically bold father, Henry, during his stint as Chief.",
    			"poster_path": "/9J2yrEANuY6bnyVweI4k039Q45T.jpg"
    		}
    	]
    }
    ```

* **Error Response:**

  - **Code:** 404 - Not Found

    **Content:**

    ```json
    {
    	"statusCode": 404,
    	"message": "Page Not Found"
    }
    ```

    OR

  - **Code:** 401 - Unauthorized

    **Content:**

    ```json
    {
    	"statusCode": 401,
    	"message": "Unauthorized"
    }
    ```

* **Sample Call:**

  ```javascript
  const headers = new Headers();

  headers.append("Content-Type", "application/json");

  const body = JSON.stringify({ show: "blue bloods" });

  const requestOptions = {
  	method: "POST",
  	headers,
  	body,
  	redirect: "follow",
  };

  fetch("localhost:3000/search", requestOptions)
  	.then((response) => response.text())
  	.then((result) => console.log(result))
  	.catch((error) => console.log("error", error));
  ```
