angular.module("mainModule", [])
  .controller("mainController", function ($scope)
  {
    $scope.colorsArray = ["Red", "Green", "Blue"];

    $scope.peopleArray = [
      {id: "1",firstName: "Mustafa", lastName: "Zorbaz", sex: "M"},
      {id: "2", firstName: "Fatma", lastName: "Haklı", sex: "F"},
      {id: "3", firstName: "Mehmet", lastName: "Polat", sex: "M"}
    ];

    $scope.colorsObject = {
      "R": "Kırmızı",
      "G": "Yeşil",
      "B": "Mavi"
    };

    $scope.peopleObject = {
      "1": {firstName: "Mustafa", lastName: "Zorbaz", sex: "M"},
      "2": {firstName: "Faruk", lastName: "Atla", sex: "F"},
      "3": {firstName: "Mehmet", lastName: "Polat", sex: "M"}
    };

    $scope.getPersonFullName = function (person)
    {
      return person.firstName + " " + person.lastName;
    };

    $scope.getPersonIdAndFullName = function (person)
    {
      return "(" + person.id + ") " + person.firstName + " " + person.lastName;
    };

    $scope.selectPersonById = function (id)
    {
      $scope.peopleArrayValue5 = {id: id};
    };
  });