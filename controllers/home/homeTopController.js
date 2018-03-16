(function () {

app.controller("homeTopController", function (
  $state, $stateParams, $scope, $http
) {


$scope.header = {};
$scope.properties = [];
$scope.currentProperty = {};
var propertyId = '';
if ($stateParams.id) {
  var propertyId = $stateParams.id;
}

var getProperties = function () {
  return $http.get("data/properties.json")
    .then(function (data) {
      $scope.properties = data.data;
    });
};


var getCurrentProperty = function () {
  var id = $stateParams.id;
  return $http.get("data/properties.json")
    .then(function (data) {
      var properties = data.data;
      $scope.currentProperty =  properties.find(function (row) {
        return row.id == id;
      });

      var params = {
        id: $scope.currentProperty.id
      };
      // return $http.post("api/getImageFilePaths.php", {params})
      //   .then(function (filePaths) {
      //
      //
      //
      //     console.log(filePaths);
      //
      //
      //
      //   });
    });
};



var getPropertyDetails = function (properties) {
  $scope.property = {};
  $scope.property = $scope.properties.find(function (row) {
    return row.id == propertyId;
  });

  $scope.header = {
    title: $scope.property.name,
    description: $scope.property.neighbourhood
  };

  return $scope.property;
};


$scope.scrollFullScreenHeight = function () {
  $('html, body').animate({
    scrollTop: $(document).height()
  }, 'slow');
  return false;
};




// var loadPage = function () {
//   getProperties()
//     .then(getPropertyDetails)
//     .then(getCurrentProperty);
// };
// loadPage();

});

})();
