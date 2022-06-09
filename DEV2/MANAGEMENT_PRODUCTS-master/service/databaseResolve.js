module.exports = callback

function callback(resolve, reject) {
    return function(err, conn) {
        if (err) reject(err)
        else resolve(conn)
    }
}


// function callback(err, conn) {
//     if (err) console.log(err)
//     else console.log(conn)
// }