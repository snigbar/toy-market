import React from 'react'

const Blog = () => {
  return (
<section  className='py-10'>

        <div className='w-4/5 mx-auto my-4'>
        <h1 className='text-2xl text-zinc-800 font-bold leading-[4rem] my-6'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
        <p>A token allow user to access authrized or proctected resources. Token is used to give a user permission to access and fetch data.A refresh token allows the user to get a new token after the previous on expires. So the user need not to log again after access token expires.
        We should not store token in local Storage. We need to store it on session storage. Generally access token is generated when a user signs in and it stored in client side browser for a certian period of time. Without access token in browser user will not be able to access 
        protected resources.
        </p>
        </div>

        <div className='w-4/5 mx-auto my-4'>
        <h1 className='text-2xl text-zinc-800 font-bold leading-[4rem] my-6'>Compare SQL and NoSQL databases?</h1>
        <p>
            SQL: sql are relational database system.These are table based and fied database.SQL based database are vertically scalable and used for organized database system.
            It can handle complex quaries. SQL databases are valuable in handling structured data. It is scalable and has large community. PostgreSQL,MySQL,Db2 are examples of SQL based dta system.
            <br/>
            NoSQL: database has a known as unstructured data. It is distributed database system. Its Horizontly scalable and suitable for hierarchal structure.NoSQL systems allow to work with different data structures within a database.
            Queries in NoSQL databases is faster than SQL databases. MongoDB, CouchDB, CouchBase, Cassandra, HBase etc are the example of nosql base database system.
        </p>
        </div>

        <div className='w-4/5 mx-auto my-4'>
        <h1 className='text-2xl text-zinc-800 font-bold leading-[4rem] my-6'>What is express js? What is Nest JS?</h1>
        <p>
            Express js: built on the top of node js is a javascript framework used for backend development.It is designed for building web applications and APIs and it is used to build s single page, multipage, and hybrid web application. It is fast, Scalable and allow to use javascript a front end language to run on server side.
            <br/>
            Nest Js: Nest is also a node js framework used to build server side applications. Nest extends the feature of node js frameworks. It is Typescript base framework for building efficient, scalable, and enterprise-grade backend applications.it also allows to create outstanding, well-organized, and lightweight microservices.
        </p>
        </div>

        <div className='w-4/5 mx-auto my-4'>
        <h1 className='text-2xl text-zinc-800 font-bold leading-[4rem] my-6'>What is MongoDB aggregate and how does it work</h1>
        <p>
        Aggregation is a way of processing a large amount of data in a collection by passing them through different stages.The aggregation pipeline allows to perform complex operations that will allow any range of insights into your collections.This is the operations pf processing data records and return the computed results.
        MongoDB uses three ways for performing aggregation. Aggregation pipeline,map-reduce function and Single purpose aggregation methods. Aggregation in mongodb can be used with "db.collection_name.aggregate(aggregate_operation)". It clusters the collection data in best possible way.

        </p>
        </div>
</section>
  )
}

export default Blog