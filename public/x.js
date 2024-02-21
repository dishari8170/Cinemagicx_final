
function movestructure(object, keytomove, up = true) {
    const keys = Object.keys(object);
    const index = keys.indexOf(keytomove);

    if (index === -1) {

        return object;
    }

    const newIndex = up ? index - 1 : index + 1;

    if (newIndex < 0 || newIndex >= keys.length) {
        return  object
    }

    [keys[index], keys[newIndex]] = [keys[newIndex], keys[index]];

    const reorderedObject = {};
    keys.forEach(key => {
        reorderedObject[key] = object[key];
    });

    return reorderedObject;
}





x={x:["123","4567","uyt"],y:[23456,8765,456],z:[876,45,98]}


console.log(movestructure(x,"z",true))
