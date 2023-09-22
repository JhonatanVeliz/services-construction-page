const newId = () => {
    const date = Date.now();
    const timeStamp = String(date * (Math.random() * 10));
    return timeStamp.slice(0, 6)
}

export {
    newId
}