let course = new List()
course.append("html");
course.append("css");
course.append("js");
course.append("bootstrap");
course.append("react");
course.append("redux");
course.append("python");
course.append("django");
course.append("flask");

// length
console.log(`length = `,course.length());

//first element
course.front()
console.log(`first = `,course.getElement());

course.next();
console.log(`next = `,course.getElement());

course.next();
course.next();
console.log(`next = `,course.getElement());

//previous
course.prev();
console.log("prev = ",course.getElement())


//last element
course.end();
console.log(`last = `,course.getElement());

