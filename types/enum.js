"use strict";
// enum types:
// numric enum
var numricType;
(function (numricType) {
    numricType[numricType["getData"] = 0] = "getData";
    numricType[numricType["readData"] = 1] = "readData";
    numricType[numricType["deleteData"] = 2] = "deleteData";
    numricType[numricType["updateData"] = 3] = "updateData";
})(numricType || (numricType = {}));
console.log(numricType.getData);
// string enum
var stringType;
(function (stringType) {
    stringType["getData"] = "GET_DATA";
    stringType["readData"] = "READ_DATA";
})(stringType || (stringType = {}));
console.log(stringType.readData);
