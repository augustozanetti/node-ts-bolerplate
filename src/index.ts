
interface Hello {
    name: string
}


const hello = (hello: Hello) => {
    console.log(hello)
}

hello({ name: "running" })
