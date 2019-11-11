var getcookie = (key) => {
    let str = document.cookie; //username=admin; age=18
    let arr = str.split('; ');
    for (let item of arr) {
        let arr2 = item.split('=');
        if (key == arr2[0]) {
            return arr2[1];
        }
    }
}
export default getcookie;