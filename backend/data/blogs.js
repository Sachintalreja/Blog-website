const blogs = [
    {
        title: 'Building microservices with Dropwizard, MongoDB & Docker',
        short_excerpt: "This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi-",
        image: "/images/blog-1.png",
        author: "Julia Walker",
        date: "Jan 17, 2022",
        content: `Microservices architecture has become increasingly popular due to its flexibility and scalability. In this article, we'll explore how to build microservices using Dropwizard, MongoDB, and Docker. Dropwizard is a Java framework that simplifies the development of web services. MongoDB, a NoSQL database, is ideal for microservices due to its flexibility and scalability. Docker allows us to containerize our microservices, making deployment and scaling easier.

        Dropwizard provides a convenient way to create RESTful APIs and integrates well with MongoDB. We'll demonstrate how to set up a Dropwizard project, define endpoints, and connect to a MongoDB database. Docker will then be used to containerize each microservice, ensuring consistency across environments.

        By the end of this tutorial, you'll have a clear understanding of how to architect microservices using Dropwizard, MongoDB, and Docker. This setup enables rapid development and deployment of scalable microservices, making it ideal for modern applications.`

    },
    {
        title: 'Building a Restful CRUD API with Node JS, Express, and MongoDB',
        short_excerpt: "Application Programming Interface is the abbreviation for API. An API is a software interface that enables two apps to communicate with one another. In other words, an API is a...",
        image: "/images/blog-2.png",
        author: "Julia Walker",
        date: "Oct 3, 2021",
        content: `Building a RESTful CRUD API is a fundamental skill for backend developers. In this tutorial, we'll walk through creating a RESTful API using Node.js, Express, and MongoDB. Node.js provides an efficient runtime for JavaScript on the server-side, while Express is a minimalist web framework for Node.js. MongoDB, a NoSQL database, offers flexibility and scalability for storing and retrieving data.

        We'll start by setting up a Node.js project and installing the necessary dependencies. Express will be used to define routes for handling HTTP requests, such as GET, POST, PUT, and DELETE. MongoDB will serve as our database, storing data in JSON-like documents.

        By the end of this tutorial, you'll have a fully functional RESTful API capable of performing CRUD operations on MongoDB. This API can be used as the backend for various applications, including web and mobile.`
    },
    {
        title: 'Monitoring Performance with the PageSpeed Insights API',
        short_excerpt: "The PageSpeed Insights API provides free access to performance monitoring for web pages and returns data with suggestions for how to improve. The V5 API includes lab data",
        image: "/images/blog-8.png",
        author: "Vivian Lewis",
        date: "Oct 15, 2021",
        content: `Monitoring performance is crucial for ensuring a smooth user experience on the web. The PageSpeed Insights API offers valuable insights into web page performance and provides recommendations for improvement. In this article, we'll explore how to use the PageSpeed Insights API to monitor and optimize website performance.

        The PageSpeed Insights API analyzes web pages and generates performance scores based on various metrics, including page load time and optimization opportunities. We'll demonstrate how to make API requests and interpret the results to identify performance bottlenecks.

        By implementing the suggestions provided by the PageSpeed Insights API, you can improve website performance, enhance user satisfaction, and boost search engine rankings.`
    },
    {
        title: 'How to connect a React frontend with a NodeJS/Express backend',
        short_excerpt: "The MERN (MongoDB, Express, React, NodeJS) stack is very popular for making full stack applications, utilizing Javascript for both the backend and frontend as well as a document-oriented...",
        image: "/images/blog-10.png",
        author: "Larry Walls",
        date: "Sep 21, 2021",
        content: `The MERN (MongoDB, Express, React, Node.js) stack is a popular choice for building full-stack web applications. In this tutorial, we'll learn how to connect a React frontend with a Node.js/Express backend to create a seamless user experience.

        React is a JavaScript library for building user interfaces, while Node.js and Express provide a robust backend framework. MongoDB offers a flexible and scalable database solution for storing and retrieving data.

        We'll start by setting up a Node.js/Express server and defining routes to handle API requests. Then, we'll create a React frontend and use Axios to make HTTP requests to the backend API.

        By the end of this tutorial, you'll have a fully functional full-stack web application built using the MERN stack, ready to deploy to production.`
    },
    {
        title: 'Accessibility Tips for Web Developers',
        short_excerpt: "It's awesome to build sites that are inclusive and accessible to everyone. There are at least six key areas of disability we can optimize for: visual, hearing, mobility, cognition, speech and...",
        image: "/images/blog-3.png",
        author: "Shawn Mclaren",
        date: "Nov 28, 2021",
        content: `Building inclusive and accessible websites is essential for ensuring that everyone can access and interact with your content. In this article, we'll explore six key areas of disability and provide practical tips for optimizing accessibility.

        Visual disabilities include conditions such as color blindness and low vision, which can be accommodated with proper color contrast and alternative text for images. Hearing disabilities may require closed captions or transcripts for audio content. Mobility disabilities may necessitate keyboard navigation and clear focus states.

        Cognitive disabilities can affect how users process information, so it's important to keep content simple and easy to understand. Speech disabilities may require alternative input methods, such as voice commands.

        By following these accessibility tips, you can create websites that are inclusive and accessible to all users, regardless of their abilities.`

    },
    {
        title: 'Adaptive Loading - Improving Web Performance on low-end devices',
        short_excerpt: "Adaptive Loading: Do not just respond based on screen size, adapt based on actual device hardware. Any user can have a slow experience. In a world with widely varying device...",
        image: "/images/blog-6.png",
        author: "Lisa Henriques",
        date: "Nov 10, 2021",
        content: `Adaptive loading is a technique for optimizing web performance based on the capabilities of the user's device. In this article, we'll explore how adaptive loading can improve the user experience, particularly on low-end devices with limited resources.

        Instead of relying solely on screen size, adaptive loading adjusts content based on device hardware, such as CPU and network speed. This ensures that all users, regardless of their device, have a fast and responsive experience.

        By implementing adaptive loading strategies, such as lazy loading images and deferring non-essential JavaScript, you can improve web performance and ensure a smooth user experience for all users.`
    },

]

export default blogs;