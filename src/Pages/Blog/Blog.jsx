import React from "react";
import useTitle from "../../CustomHook/useTitle";

const Blog = () => {
  useTitle('Blog');
  return (
    <div className=" grid gap-3 justify-items-center my-10">
      <h2 className="text-5xl font-bold">BLOG</h2>
      <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container lg:max-w-6xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Database
            </a>
          </div>
          <div className="mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              Difference between SQL and NoSQL
            </a>
            <p className="mt-2">
              Both SQL and NoSQL Databases have their set of advantages and
              disadvantages. SQL databases can be considered when you are
              looking for data consistency, reliability, integrity, and when the
              data is structured. NoSQL databases are a much better option if
              the data is large, semi-structured, or unstructured and you are
              looking for faster storage and retrieval of data.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4"></div>
        </div>
      </div>
      <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container lg:max-w-6xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Authorization
            </a>
          </div>
          <div className="mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              What is JWT, and how does it work?
            </a>
            <p className="mt-2">
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.
              <br />
              <br />
              JWTs differ from other web tokens in that they contain a set of
              claims. Claims are used to transmit information between two
              parties. What these claims are depends on the use case at hand.
              For example, a claim may assert who issued the token, how long it
              is valid for, or what permissions the client has been granted.
            </p>
          </div>
        </div>
      </div>
      <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container lg:max-w-6xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Javascript
            </a>
          </div>
          <div className="mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              What is the difference between javascript and NodeJS?
            </a>
            <p className="mt-2">
              JavaScript is a very popular programming language which generally
              used by any web application developer. It is very easy to find a
              resource on the same for work on JavaScript and do some specific
              development. Node JS is an extension of JavaScript libraries
              <br />
              <br />
              NodeJS mainly used for accessing or performing any non-blocking
              operation of any operating system, like creating or executing a
              shell script or accessing any hardware-specific information or
              running any backend job.
            </p>
          </div>
        </div>
      </div>
      <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container lg:max-w-6xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              ExpressJS
            </a>
          </div>
          <div className="mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              How does NodeJS handle multiple requests at the same time?
            </a>
            <p className="mt-2">
              Node actually farms off the I/O work to threads. I/O operations
              typically take orders of magnitude longer than CPU operations so
              why have the CPU wait for that? Besides, the OS can handle I/O
              tasks very well already. In fact, because Node does not wait
              around it achieves much higher CPU utilisation.
              <br />
              <br />
              By way of analogy, think of NodeJS as a waiter taking the customer
              orders while the I/O chefs prepare them in the kitchen. Other
              systems have multiple chefs, who take a customers order, prepare
              the meal, clear the table and only then attend to the next
              customer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
