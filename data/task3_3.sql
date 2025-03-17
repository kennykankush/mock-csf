CREATE DATABASE IF NOT EXISTS ecommerce;

USE ecommerce;

CREATE TABLE IF NOT EXISTS orders(
    order_id VARCHAR(255),
    date DATE,
    name VARCHAR(255),
    address VARCHAR(255),
    priority boolean,
    comments VARCHAR(255),
    constraint pk_order_id primary key(order_id)
);

CREATE TABLE IF NOT EXISTS carts(
    order_id VARCHAR(255),
    product_id VARCHAR(255),
    name VARCHAR(255),
    quantity INT,
    price DOUBLE,
    constraint fk_order_id foreign key(order_id) references orders(order_id)
);