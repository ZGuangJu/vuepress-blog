(function () {
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + "_" + this.lastName;
        }
        return Person;
    }());
    function showFullName(person) {
        return person.firstName + "_" + person.lastName;
    }
    var person = new Person("诸葛", "凤雏");
    console.log(showFullName(person));
})();
