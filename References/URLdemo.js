const url=require('url')

const myurl=new URL('https://mywebsite.com/hello.txt?abc=123 & Status=active');

//serilized URL
console.log(myurl.href);
console.log(myurl.toString())

// Host
console.log(myurl.host)

// Host Namr
console.log(myurl.hostname)

//path name
console.log(myurl.pathname)

//Serilized query
console.log(myurl.search)
console.log(myurl.searchParams)

