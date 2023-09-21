
# Blogify Rest Api

This is a robust REST API backend for a blogging platform using cutting-edge technologies and best practices. The project includes the following key features and technologies. 




## How to use or test?

- Open Postman
- First you have to signup  
- Then signin to receive auth token which would be used to access  all the functionalities like performing CRUD operations as it is secured  by json web token.
- Now use postman to test it and then use it in your project by following the below guidelines


## Guidelines to use API 

#### First you have to signup by using below url in body json postman 

```http
  POST  https://blog-api-yjfx.onrender.com/api/user/signup
```
-Provide below details in raw json body in postman

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Your Name |
| `email` | `string` | **Required**. Your Email |
| `password` | `string` | **Required**. Your Password |


#### Then you have to LOGIN by using below url in body json postman.

```http
  POST  https://blog-api-yjfx.onrender.com/api/user/login
```
-Provide below details in raw json body in postman

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your Email |
| `password` | `string` | **Required**. Your Password |

- Now if the credentials are correct you will receive the jsonwebtoken which you have to put in headers in Authorization to read,update,create and delete any blog.
- If you dont do the above step you will not be able to perform CRUD operations

#### Get a blog by its id

```http
  GET https://blog-api-yjfx.onrender.com/api/blog/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of blog to fetch |

#### Delete a blog by its id

```http
  DELETE https://blog-api-yjfx.onrender.com/api/blog/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of blog to fetch |

#### Get all the blogs of a particular user id

```http
  GET https://blog-api-yjfx.onrender.com/api/blog/user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of blog to fetch |

#### Add a blog to a particular user's id

```http
  POST https://blog-api-yjfx.onrender.com/api/blog/add
```

- Provide the below parameters in json raw body of postman by making sure you have put Authorization key in headers

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Title of blog |
| `description`      | `string` | **Required**. Description of blog |
| `image`      | `string` | **Required**. Provide the url of image |
| `user`      | `string` | **Required**. Provide the user id to which you want to add blog |

#### Update the blog

```http
  PUT https://blog-api-yjfx.onrender.com/api/blog/update/${id}
```
- The above id parameter is blogid you want to update
- Provide the below parameters in json raw body of postman by making sure you have put Authorization key in headers

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Title of blog |
| `description`      | `string` | **Required**. Description of blog |
| `image`      | `string` | **Required**. Provide the url of image |







