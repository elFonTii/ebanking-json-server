# ebanking-json-server repository

Simple **API**. that's handle requests and return data without the necessity of a database, this uses filesystem to write into a `db.json` file.


# Deployment

This project was bootstrapped using **yarn**, so to install dependencies run `$yarn install`
## dotenv / .env file
The `.env` file only have one key called **PORT** its value will depend on which port do you want to initializate the app (numerical value)

# Managing endpoints

In this section we are going to introduce how you can add, remove o update endpoints.

## Modifying endpoints
To add/remove an endpoint all you have to do is add/remove a new key in the `db.json` file respectively

**`db.json:`**
```json
{
	http://localhost:3000/fruits ->
	"fruits": [
		{
		 "id": 1,
		 "name": "Apple"
		},
		{
		 "id": 2
		 "name": "Banana",
		}
	],
	
	http://localhost:3000/colors ->
	"colors": [
		{
		 "id": 1,
		 "name": "blue",
		 "hex": "#000FFF"
		},
		{
		"id": 2,
		"name": "red",
		"hex": "FF0000"
		}
	]
}
```

## Making requests

This application supports the following methods: `GET` `POST` `PUT` `PATCH` `DELETE` `OPTIONS`

`GET http://localhost:8080/$endpoint` where *$endpoint* means the endpoint where you want to fetch data.

*Headers* 
**`Content-Type: Application/JSON`**

`POST http://localhost:8080/$endpoint` where *$endpoint* means the endpoint where you want to fetch data.

`POST` `PUT` and `PATCH` request need to receive data from the `body` of the request, depending on which type of request do you want to do.



## Request example

Here's an example using **TypeScript** and **axios** of how you can make request to modify data.


```typescript
const addFruit = () => {
  axios
    .post('http://localhost:3000/fruits', { id: "3,", name: "Mango" })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateFruit = () => {
  axios
    .put('http://localhost:3000/fruits/3', { name: 'Grape' })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteFruit = () => {
  axios
    .delete('http://localhost:3000/fruits/3')
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
```
## Info
  
For more information you can always visit  [json-server](https://github.com/typicode/json-server) on **GitHub** there are more examples and troubleshooting
