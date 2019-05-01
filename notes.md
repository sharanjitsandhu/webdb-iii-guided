## Review

- joins (inner and left)
- table aliasing
- aggregate functions
- pagination
- conactenation
- is null (is not null)

-- I want to see all customers regardless of whether they have orders or not --196 > 213

-- customers without orders...

select distinct c.customerName
from customers as c
left join orders as o on c.customerId = o.customerId
where o.orderId is not null
order by 1

-- aggregations, no of items grouped by order (orderId, 5) -- sum()
select o.orderId, count(od.orderId) as ItemsCount
from orders as o
inner join orderdetails as od on o.orderId = od.orderId
group by o.orderId

-- revenue per order (quantity _ price)
select o.orderId, round(sum(od.quantity _ p.price), 2) as Revenue
from orders as o
inner join orderdetails as od on o.orderId = od.orderId
inner join products as p on od.productId = p.productId
group by o.orderId
order by Revenue desc

## Schema

- structure of...
  - database
  - table
- create table
- add columns to the table

#migrations

- run `npx knex init` to generate a `./knexfile.js`
- modify `./knexfile.js` to configure our db connection
  remove staging and production configurations from `./knexfile.js`
- make a migration for each db schema change
