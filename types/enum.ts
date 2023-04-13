

// enum types:
// numric enum
enum numricType {
    getData,
    readData,
    deleteData,
    updateData,
}
console.log(numricType.getData)

// string enum
enum stringType {
    getData = 'GET_DATA',
    readData = 'READ_DATA'
}
console.log(stringType.readData)