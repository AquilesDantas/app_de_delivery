# Endpoints

## Fluxo comum

### 01 - Login
  - uri: localhost:3001/login
  - método: post
  - body : 
  ```
  {
    email,
    password
  }
  ```
  - resposta: 
  ```
  {
    user: {
      id,
      name,
      role
    },
    token
  }
```
### 02 - Registro
  - uri: localhost:3001/register
  - método: post
  - body: 
  ```
  {
    name,
    email,
    password 
  }
  ```
  - resposta: 
  ```
  {
    user: {
      id,
      name,
      role
    },
    token
  }
  ```

## Fluxo do cliente

### 03 - Lista de produtos
- uri: localhost:3001/customer/products
- método: get
- header: 
```
{
  Authorization: token
}
```
- resposta: 
```
[
  {
    id,
    name,
    price,
    urlImg
  }
]
``` 
### 04.0 - Lista vendedores
- uri: localhost:3001/customer/checkout
- método: get
- header: 
```
{
  Authorization: token
}
```
resposta: 
```
[
  {
    id,
    name,
  }
]
```
### 04 - Checkout
- uri: localhost:3001/customer/checkout
- método: post
- header: 
```
{
  Authorization: token
}
```
- body: 
```
{
  userID,
  sellerID,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  products: [
    {
      id,
      quantity, 
    }
  ]
}
``` 
- resposta: 
```
{
  newSale: {
    id,
    userID,
    sellerID,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
    saleDate
  },
  products: [
    {
      id,
      quantity
    }
  ]
}
``` 
### 05 - Customer orders
- uri: localhost:3001/customer/orders
- método: get
- header: 
```
{
  Authorization: token
}
```
- resposta: 
```
[
  {
    id,
    userID,
    sellerID,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
    saleDate
  }
]
```
### 06 - Costumer order details
- uri: localhost:3001/orders/:id
- método: get
- header: 
```
{
  Authorization: token
}
``` 
resposta: 
``` 
{
  id
	totalPrice,
	deliveryAddress,
	deliveryNumber,
	saleDate,
	status,
	sellerId,
	seller,
	products: [
		{
			id,
			name,
			price,
			quantity
		}
	]
}
```
## Fluxo do Vendedor

### 07 - Seller Orders
- uri: localhost:3001/seller/orders
- método: get
- header: 
```
{
  Authorization: token
}
```
- resposta: 
```
[
  {
    id,
    userID,
    sellerID,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
    saleDate
  }
]
```
### 09 - Seller Order Details
- uri: localhost:3001/orders/:id
- método: get
- header: 
```
{
  Authorization: token
}
``` 
resposta: 
``` 
{
  id
	totalPrice,
	deliveryAddress,
	deliveryNumber,
	saleDate,
	status,
	sellerId,
	seller,
	products: [
		{
			id,
			name,
			price,
			quantity
		}
	]
}
```
### 08 - Update Order Status
- uri: localhost:3001/orders/:id/update
- método: patch
- header: 
```
{
  Authorization: token
}
``` 
- body: 
```
{
  status
}
```
resposta: 
``` 
status
```

## Fluxo do Administrador

### 10 - Cria usuário
- uri: localhost:3001/users
- método: post
- header: 
```
{
  Authorization: token
}
``` 
- body: 
```
{
  name,
  email, 
  password,
  role
}
```
resposta: 
``` 
{
  id,
  name,
  email,
  password,
  role
}
```
### 11 - Lista usuários
- uri: localhost:3001/users
- método: get
- header: 
```
{
  Authorization: token
}
``` 
resposta: 
``` 
{
  [
    id,
    name,
    email,
    role
  ]
}
```
